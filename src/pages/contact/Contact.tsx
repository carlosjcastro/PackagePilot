import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import './contact.css';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
    marginBottom: '3rem',
  },
  submitButton: {
    marginTop: '2rem',
  },
}));

const Contact: React.FC = () => {
  const { t, i18n } = useTranslation("global");
  const classes = useStyles();
  const [formData, setFormData] = useState({

    weight: '',
    length: '',
    width: '',
    height: '',
    // Campos existentes
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    contactMethod: '',
    lookingFor: '',
    message: '',
  });
  const [errors, setErrors] = useState<any>({});
  const [translatedErrors, setTranslatedErrors] = useState<any>({});

  useEffect(() => {
    const updateTranslatedErrors = () => {
      const newTranslatedErrors: any = {};
      Object.keys(errors).forEach((key) => {
        newTranslatedErrors[key] = t('contact.errors-required');
      });
      setTranslatedErrors(newTranslatedErrors);
    };

    updateTranslatedErrors();
  }, [i18n.language, errors, t]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    validateField(name, value);
  };

  const handleSelectChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value as string,
    });
    validateField(name, value);
  };

  const validateField = (name: string, value: string) => {
    setErrors((prevErrors: any) => {
      const newErrors = { ...prevErrors };
      if (!value) {
        newErrors[name] = 'required';
      } else {
        delete newErrors[name];
      }
      return newErrors;
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let formIsValid = true;
    const newErrors: any = {};

    Object.keys(formData).forEach((key) => {
      if (!formData[key as keyof typeof formData]) {
        newErrors[key] = 'required';
        formIsValid = false;
      }
    });

    if (formIsValid) {
      console.log('Form submitted:', formData);
    } else {
      setErrors(newErrors);
    }
  };

  const allFieldsValid = () => {
    return Object.keys(formData).every((key) => formData[key as keyof typeof formData] && !errors[key]);
  };

  return (
    <ThemeProvider theme={createTheme()}>
      <h2 className='title-contact' data-aos="fade-right">{t("contact.contact-title")}</h2>
      <div className="contact-container" data-aos="fade-down">
        <div className="form-container">
          <form onSubmit={handleSubmit} method="POST">
            {/* Campos existentes */}
            <TextField
              id="last-name"
              name="lastName"
              label={t('contact.contact-label-name')}
              variant="outlined"
              value={formData.lastName}
              onChange={handleChange}
              error={!!translatedErrors.lastName}
              helperText={translatedErrors.lastName}
              fullWidth
              className={`input-white ${allFieldsValid() ? 'input-valid' : ''}`}
            />

            <TextField
              id="weight"
              name="weight"
              label="Weight (kg)"
              variant="outlined"
              value={formData.weight}
              onChange={handleChange}
              error={!!translatedErrors.weight}
              helperText={translatedErrors.weight}
              fullWidth
              className={`input-white ${allFieldsValid() ? 'input-valid' : ''}`}
            />
            <TextField
              id="length"
              name="length"
              label="Length (cm)"
              variant="outlined"
              value={formData.length}
              onChange={handleChange}
              error={!!translatedErrors.length}
              helperText={translatedErrors.length}
              fullWidth
              className={`input-white ${allFieldsValid() ? 'input-valid' : ''}`}
            />
            <TextField
              id="width"
              name="width"
              label="Width (cm)"
              variant="outlined"
              value={formData.width}
              onChange={handleChange}
              error={!!translatedErrors.width}
              helperText={translatedErrors.width}
              fullWidth
              className={`input-white ${allFieldsValid() ? 'input-valid' : ''}`}
            />
            <TextField
              id="height"
              name="height"
              label="Height (cm)"
              variant="outlined"
              value={formData.height}
              onChange={handleChange}
              error={!!translatedErrors.height}
              helperText={translatedErrors.height}
              fullWidth
              className={`input-white ${allFieldsValid() ? 'input-valid' : ''}`}
            />
            {/* Fin de los campos para el cálculo de envío */}
            <Button
              type="submit"
              className={`${classes.submitButton} custom-button`}
            >
              {t("contact.contact-btn-send")}
            </Button>
          </form>
        </div>
        <div className="info-container">
          <h2>{t("contact.contact-title-form")}</h2>
          <p>Worldwide</p>
          <p>contact@packagepilot.com</p>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Contact;
