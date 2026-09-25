import { useState, type ChangeEvent } from "react";
import CommonModal from "../components/Modal/CommonModal";
import TabulatorTable from "../components/Tabulator/CommonTable";
import "../Common.css";

type UserFormState = {
  name: string;
  id: string;
  password: string;
};

type UserRecord = UserFormState;

const initialUserForm: UserFormState = {
  name: "",
  id: "",
  password: "",
};

const validateUserForm = (values: UserFormState) => {
  const nextErrors: Partial<Record<keyof UserFormState, string>> = {};

  if (!values.name.trim()) {
    nextErrors.name = "User Name is required.";
  }

  if (!values.id.trim()) {
    nextErrors.id = "ID is required.";
  }

  if (!values.password.trim()) {
    nextErrors.password = "Password is required.";
  }

  return nextErrors;
};

const UserManagement = () => {
  const [users, setUsers] = useState<UserRecord[]>([
    { name: "Alice Johnson", id: "USR-1001", password: "Password1" },
    { name: "Marcus Lee", id: "USR-1002", password: "Password2" },
  ]);

  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [editingUserId, setEditingUserId] = useState<string | null>(null);
  const [userForm, setUserForm] = useState<UserFormState>(initialUserForm);
  const [userFormErrors, setUserFormErrors] = useState<
    Partial<Record<keyof UserFormState, string>>
  >({});

  const openCreateModal = () => {
    setEditingUserId(null);
    setUserForm(initialUserForm);
    setUserFormErrors({});
    setIsUserModalOpen(true);
  };

  const openEditModal = (user: UserRecord) => {
    setEditingUserId(user.id);
    setUserForm(user);
    setUserFormErrors({});
    setIsUserModalOpen(true);
  };

  const closeUserModal = () => {
    setIsUserModalOpen(false);
    setEditingUserId(null);
    setUserForm(initialUserForm);
    setUserFormErrors({});
  };

  const handleDeleteUser = (userId: string) => {
    setUsers((current) => current.filter((user) => user.id !== userId));
  };

  const userTableColumns = [
    { title: "User Name", field: "name" },
    { title: "User ID", field: "id" },
    { title: "Password", field: "password" },
    {
      title: "Action",
      field: "action",
      width: 160,
      hozAlign: "center",
      headerSort: false,
      formatter: (_cell) => {
        const rowData = _cell.getRow().getData() as UserRecord;

        const wrapper = document.createElement("div");
        wrapper.className = "user-action-buttons";

        const editButton = document.createElement("button");
        editButton.type = "button";
        editButton.className = "user-action-button edit";
        editButton.textContent = "Edit";
        editButton.onclick = () => openEditModal(rowData);

        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.className = "user-action-button delete";
        deleteButton.textContent = "Delete";
        deleteButton.onclick = () => handleDeleteUser(rowData.id);

        wrapper.appendChild(editButton);
        wrapper.appendChild(deleteButton);

        return wrapper;
      },
    },
  ];

  const handleUserInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserForm((current) => ({ ...current, [name]: value }));

    if (userFormErrors[name as keyof UserFormState]) {
      setUserFormErrors((current) => ({
        ...current,
        [name]: undefined,
      }));
    }
  };

  const handleSaveUser = () => {
    const validationErrors = validateUserForm(userForm);

    if (Object.keys(validationErrors).length > 0) {
      setUserFormErrors(validationErrors);
      return;
    }

    const normalizedUser: UserRecord = {
      name: userForm.name.trim(),
      id: userForm.id.trim(),
      password: userForm.password.trim(),
    };

    if (editingUserId) {
      setUsers((current) =>
        current.map((user) =>
          user.id === editingUserId ? { ...user, ...normalizedUser } : user,
        ),
      );
    } else {
      setUsers((current) => [normalizedUser, ...current]);
    }

    closeUserModal();
  };

  return (
    <div className="user-management-page">
      <div className="user-management-panel">
        <div className="user-management-header">
          <h2>User Management</h2>
          <button
            type="button"
            className="create-user-button"
            onClick={openCreateModal}
          >
            Create User
          </button>
        </div>

        <TabulatorTable
          columns={userTableColumns}
          data={users}
          options={{ layout: "fitColumns", responsiveLayout: "hide" }}
        />
      </div>

      <CommonModal isOpen={isUserModalOpen} onClose={closeUserModal}>
        <div className="user-modal-content">
          <div className="user-modal-header">
            <h3>{editingUserId ? "Edit User" : "Create User"}</h3>
            <button
              type="button"
              className="modal-close-button"
              onClick={closeUserModal}
            >
              ×
            </button>
          </div>

          <div className="user-form-fields">
            <label className="user-form-field">
              <span>User Name</span>
              <input
                type="text"
                name="name"
                value={userForm.name}
                onChange={handleUserInputChange}
                placeholder="Enter user name"
              />
              {userFormErrors.name && (
                <small className="field-error">{userFormErrors.name}</small>
              )}
            </label>

            <label className="user-form-field">
              <span>ID</span>
              <input
                type="text"
                name="id"
                value={userForm.id}
                onChange={handleUserInputChange}
                placeholder="Enter ID"
              />
              {userFormErrors.id && (
                <small className="field-error">{userFormErrors.id}</small>
              )}
            </label>

            <label className="user-form-field">
              <span>Password</span>
              <input
                type="password"
                name="password"
                value={userForm.password}
                onChange={handleUserInputChange}
                placeholder="Enter password"
              />
              {userFormErrors.password && (
                <small className="field-error">{userFormErrors.password}</small>
              )}
            </label>
          </div>

          <div className="user-modal-actions">
            <button
              type="button"
              className="user-modal-cancel"
              onClick={closeUserModal}
            >
              Cancel
            </button>
            <button
              type="button"
              className="user-modal-submit"
              onClick={handleSaveUser}
            >
              {editingUserId ? "Update User" : "Save User"}
            </button>
          </div>
        </div>
      </CommonModal>
    </div>
  );
};

export default UserManagement;
