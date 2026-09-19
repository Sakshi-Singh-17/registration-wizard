import { useState } from "react";
import "./App.css";
import PersonalInfo from "/PersonalInfo";
import AccountDetails from "/AccountDetails";
import Review from "/Review"; 


function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = () => {
    if(step === 3) {  
      console.log("Finalized Data Object:", formData);
      setSubmitted(true);}
  };

 
  const resetForm = () => {
    setSubmitted(false);
    setStep(1);
    setFormData({
      name: "",
      email: "",
      username: "",
      password: "",
    });
  };


  if (submitted) {
    return (
      <div className="container">
        <div className="success-box">
          <h1>Success!</h1>
          <p>
            Form has been submitted successfully
          </p>

          <button onClick={resetForm}> Submit Another </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="form-card">
        <h1>Registration Form</h1>

        {step === 1 && ( <PersonalInfo formData={formData} setFormData={setFormData} />)}

        {step === 2 && ( <AccountDetails formData={formData} setFormData={setFormData} /> )}

        {step === 3 && ( <Review formData={formData} />)} 

        <div className="navigation">
          <button onClick={handleBack} disabled={step === 1} className="back-btn"> Back</button>

          <button onClick={handleNext} disabled={step === 3} className="next-btn"> Next</button>

          <button onClick={handleSubmit} disabled={step !== 3} className="submit-btn"> Submit</button>
        </div>
      </div>
    </div>
  );
}

export default App;
