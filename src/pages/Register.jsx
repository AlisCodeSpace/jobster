import React, { useState } from 'react';
import JobsterLight from '../assets/images/jobster-light.png';
import SwitchForm from '../components/register/SwitchForm';
import { Link } from 'react-router-dom';
import RegisterForm from '../components/register/RegisterForm';

const Register = () => {
  const [switchForm, setSwitchForm] = useState('user'); // Toggles between 'user' and 'company'

  const [formData, setFormData] = useState({
    user: { name: '', email: '', password: '' },
    company: { name: '', email: '', password: '' },
  });

  const [formErrors, setFormErrors] = useState({
    user: { name: '', email: '', password: '' },
    company: { name: '', email: '', password: '' },
  });

  const placeholders = {
    user: { name: 'Full Name', email: 'Email', password: 'Password' },
    company: { name: 'Company Name', email: 'Company Email', password: 'Password' },
  };

  const handleInputChange = (type, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [type]: {
        ...prev[type],
        [field]: value,
      },
    }));

    setFormErrors((prev) => ({
      ...prev,
      [type]: {
        ...prev[type],
        [field]: '', // Clear error for the field being changed
      },
    }));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4 px-10">
      {/* Logo */}
      <div className="mb-5">
        <img src={JobsterLight} width={248} alt="Jobster Light Logo" />
      </div>

      {/* Title */}
      <div className="flex flex-col items-center gap-3">
        <h2 className="text-2xl text-center font-medium">Begin the Job Hunt</h2>
        <p className="text-gray-700 text-center">Create a user or company account to continue</p>
      </div>

      {/* Form Switcher */}
      <SwitchForm switchForm={switchForm} setSwitchForm={setSwitchForm} />

      {/* Register Form */}
      {switchForm === 'user' ? (
        <RegisterForm
          formData={formData.user}
          placeholders={placeholders.user}
          formErrors={formErrors.user}
          handleInputChange={(field, value) => handleInputChange('user', field, value)}
          setErrors={(errors) => setFormErrors((prev) => ({ ...prev, user: errors }))}
        />
      ) : (
        <RegisterForm
          formData={formData.company}
          placeholders={placeholders.company}
          formErrors={formErrors.company}
          handleInputChange={(field, value) => handleInputChange('company', field, value)}
          setErrors={(errors) => setFormErrors((prev) => ({ ...prev, company: errors }))}
        />
      )}

      {/* Terms and Conditions */}
      <p className="text-gray-500 text-center text-xs">
        By continuing, you agree to the Jobster{' '}
        <Link className="intext-link">User Agreement</Link>,{' '}
        <Link className="intext-link">Privacy Policy</Link>, and{' '}
        <Link className="intext-link">Cookie Policy</Link>.
      </p>

      {/* Login Link */}
      <p className="text-gray-700">
        Already have an account? <Link to="/login" className="intext-link">Login</Link>
      </p>
    </div>
  );
};

export default Register;
