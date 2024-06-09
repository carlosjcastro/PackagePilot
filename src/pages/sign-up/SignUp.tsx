import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TextField, Button } from '@mui/material';
import './signup.css';
import signupImage from '../../assets/img/sign-up.jpeg';

const SignUp: React.FC<{ setHideElements: (hide: boolean) => void }> = ({ setHideElements }) => {
  useEffect(() => {
    setHideElements(true);
    return () => setHideElements(false);
  }, [setHideElements]);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    let newErrors = { ...errors };

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    }
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    }
    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = 'Confirm Password is required';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);

    if (Object.values(newErrors).every(value => value === '')) {
      console.log('Formulario enviado:', formData);
    }
  };

  return (
    <div className="signup-container">
      <Link to="/" className="back-button"><i className='bx bxs-left-arrow-circle arrow-return'></i></Link>
      <div className="signup-left">
        <div className="signup-box">
          <h2>Create an Account</h2>
          <p className='signup-text'>Please fill in the following details to create your account</p>
          <form onSubmit={handleSubmit}>
            <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <TextField
                type="text"
                className="signup-input"
                placeholder="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                error={!!errors.fullName}
                helperText={errors.fullName}
                fullWidth
                margin="normal"
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <TextField
                type="email"
                className="signup-input"
                placeholder="Email Address"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                error={!!errors.email}
                helperText={errors.email}
                fullWidth
                margin="normal"
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
              <TextField
                type="password"
                className="signup-input"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                error={!!errors.password}
                helperText={errors.password}
                fullWidth
                margin="normal"
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
              <TextField
                type="password"
                className="signup-input"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword}
                fullWidth
                margin="normal"
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
              <Button type="submit" variant="contained" className="signup-button">
                Sign Up
              </Button>
            </motion.div>
          </form>
        </div>
      </div>
      <div className="signup-right">
        <img src={signupImage} alt="Sign Up" className="signup-image" />
      </div>
    </div>
  );
};

export default SignUp;
