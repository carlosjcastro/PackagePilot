import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import './contact.css';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
    marginBottom: '3rem',
  },
  submitButton: {
    marginTop: '2rem',
  },
  message: {
    textAlign: 'center',
    marginTop: '1rem',
  },
}));

const Contact = () => {
  const { t, i18n } = useTranslation("global");
  const classes = useStyles();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    contactMethod: '',
    lookingFor: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [translatedErrors, setTranslatedErrors] = useState({});
  const [message, setMessage] = useState('');

  useEffect(() => {
    const updateTranslatedErrors = () => {
      const newTranslatedErrors = {};
      Object.keys(errors).forEach((key) => {
        newTranslatedErrors[key] = t('contact.errors-required');
      });
      setTranslatedErrors(newTranslatedErrors);
    };

    updateTranslatedErrors();
  }, [i18n.language, errors, t]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    validateField(name, value);
  };

  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      if (!value) {
        newErrors[name] = 'required';
      } else {
        delete newErrors[name];
      }
      return newErrors;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let formIsValid = true;
    const newErrors = {};
  
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = 'required';
        formIsValid = false;
      }
    });
  
    if (formIsValid) {
      console.log('Form data:', formData);
      axios.post('/sending.php', formData)
        .then((response) => {
          const data = response.data;
          console.log('Response data:', data);
          if (data.success) {
            setMessage('Message sent successfully');
            setTimeout(() => {
              setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                contactMethod: '',
                lookingFor: '',
                message: '',
              });
              setMessage('');
            }, 1000);
          } else {
            setMessage('Failed to send message: ' + data.message);
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          setMessage('Error sending message');
        });
    } else {
      setErrors(newErrors);
    }
  };

  const allFieldsValid = () => {
    return Object.keys(formData).every((key) => formData[key] && !errors[key]);
  };

  return (
    <ThemeProvider theme={createTheme()}>
    <h2 className='title-contact' data-aos="fade-right">{t("contact.contact-title")}</h2>
    <div className="contact-container" data-aos="fade-down">
      <div className="form-container">
        <form onSubmit={handleSubmit} method="POST" autoComplete="off" action="/sending.php">
          <TextField
            id="first-name"
            name="firstName"
            label={t('contact.contact-label-name')}
            variant="outlined"
            value={formData.firstName}
            onChange={handleChange}
            error={!!translatedErrors.firstName}
            helperText={translatedErrors.firstName}
            fullWidth
            className={`input-white ${allFieldsValid() ? 'input-valid' : ''}`}
          />
          <TextField
            id="last-name"
            name="lastName"
            label={t('contact.contact-label-lastname')}
            variant="outlined"
            value={formData.lastName}
            onChange={handleChange}
            error={!!translatedErrors.lastName}
            helperText={translatedErrors.lastName}
            fullWidth
            className={`input-white ${allFieldsValid() ? 'input-valid' : ''}`}
          />
          <TextField
            id="email"
            name="email"
            label={t('contact.contact-label-email')}
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
            error={!!translatedErrors.email}
            helperText={translatedErrors.email}
            fullWidth
            className={`input-white ${allFieldsValid() ? 'input-valid' : ''}`}
          />
          
          <FormControl variant="outlined" className={`${classes.formControl} input-white ${allFieldsValid() ? 'input-valid' : ''}`} fullWidth error={!!translatedErrors.lookingFor}>
            <InputLabel id="looking-for-label">{t('contact.contact-label-subject')}</InputLabel>
            <Select
              id="looking-for"
              name="lookingFor"
              label={t('contact.contact-label-subject')}
              value={formData.lookingFor}
              onChange={handleSelectChange}
              className={classes.selectContainer}
            >
              <MenuItem value="">
                <em>{t("contact.contact-subject.contact-general")}</em>
              </MenuItem>
              <MenuItem value="product">{t("contact.contact-subject.contact-product")}</MenuItem>
              <MenuItem value="service">{t("contact.contact-subject.contact-service")}</MenuItem>
            </Select>
            {translatedErrors.lookingFor && <FormHelperText>{translatedErrors.lookingFor}</FormHelperText>}
          </FormControl>
          <TextField
            id="message"
            name="message"
            label={t('contact.contact-label-message')}
            variant="outlined"
            value={formData.message}
            onChange={handleChange}
            error={!!translatedErrors.message}
            helperText={translatedErrors.message}
            fullWidth
            className={`input-white ${allFieldsValid() ? 'input-valid' : ''}`}
          />
          <Button
            type="submit"
            className={`${classes.submitButton} custom-button`}
          >
            {t("contact.contact-btn-send")}
          </Button>
          <p className={classes.message}>{message}</p>
        </form>
      </div>
      <div className="info-container">
        <h2>{t("contact.contact-title-form")}</h2>
      </div>
    </div>
  </ThemeProvider>
  
  );
};

export default Contact;
