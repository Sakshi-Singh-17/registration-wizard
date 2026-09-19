function PersonalInfo({ formData, setFormData }) {
  return (
    <div className="form-section">
      <h2>Personal Information</h2>
      <label>Full Name</label>
      <input type="text" placeholder="Enter your name" value={formData.name} 
      onChange={(e) =>
          setFormData({ ...formData, name: e.target.value })
        }
      />

      <label>Email</label>
      <input type="email" placeholder="Enter your email" value={formData.email}
        onChange={(e) =>
          setFormData({ ...formData, email: e.target.value })
        }
      />
    </div>
  );
}

export default PersonalInfo;
