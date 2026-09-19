function Review({ formData }) {

  return (
    <div className="form-section">

      <h2>Review & Submit</h2>
      <div className="review-box">
        <p>Please review your information before submitting:</p>

        <div> <b>Name:</b> {formData.name || "Not provided"}</div>
        <div> <b>Email:</b> {formData.email || "Not provided"}</div>
        <div> <b>Username:</b> {formData.username || "Not provided"}</div>
        <div> <b>Password:</b> {formData.password ? "****" : "Not provided"}</div>
      </div>
    </div>
  );
}

export default Review;