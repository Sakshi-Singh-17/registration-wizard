function AccountDetails({ formData, setFormData }) {
  return (
    <div className="form-section">
      <h2>Account Details</h2>
      <label>Username</label>
      <input type="text" placeholder="Enter username" value={formData.username}
        onChange={(e) =>
          setFormData({ ...formData, username: e.target.value })
          } 
      />

      <label>Password</label>
      <input
        type="password" placeholder="Enter password" value={formData.password}
        onChange={(e) =>
          setFormData({ ...formData, password: e.target.value })
        }
      />
    </div>
  );
}

export default AccountDetails;