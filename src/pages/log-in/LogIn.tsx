import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TextField, Button } from '@mui/material';
import './login.css';
import loginImage from '../../assets/img/login-image.jpeg';
import { useTranslation } from 'react-i18next';

const LogIn: React.FC<{ setHideElements: (hide: boolean) => void }> = ({ setHideElements }) => {
const { t } = useTranslation();

  useEffect(() => {
    setHideElements(true);
    return () => setHideElements(false);
  }, [setHideElements]);

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!formData.username) {
      setErrors({ ...errors, username: 'Username is required' });
      return;
    }
    if (!formData.password) {
      setErrors({ ...errors, password: 'Password is required' });
      return;
    }
    console.log('Formulario enviado:', formData);
  };
  return (

    <div className="login-container">
      <Link to="/" className="back-button"><i className='bx bxs-left-arrow-circle arrow-return'></i></Link>
      <div className="login-left">
        <motion.div className="login-box"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2>Welcome Back</motion.h2>
          <motion.p className='login-text'>Please login to your account</motion.p>
          <form onSubmit={handleSubmit}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <TextField
                type="text"
                className="login-input"
                placeholder="User or Email"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                error={!!errors.username}
                helperText={errors.username}
                fullWidth
                margin="normal"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <TextField
                type="password"
                className="login-input"
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button type="submit" variant="contained" className="login-button login-btn-sn">
                Log In
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </div>
      <div className="login-right">
        <motion.img src={loginImage} alt="Description" className="login-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  );
};

export default LogIn;
