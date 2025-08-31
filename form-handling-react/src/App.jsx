import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import formikForm from "./components/formikForm";

function App() {
  return (
    <div className="p-6">
      <RegistrationForm />
      <formikForm />
    </div>
  );
}

export default App;
