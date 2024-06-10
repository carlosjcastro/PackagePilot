import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { TextField, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
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

interface ShippingInfo {
  mode: string;
  local_pick_up: boolean;
  free_shipping: boolean;
  logistic_type: string;
  store_pick_up: boolean;
  dimensions: {
    weight: string;
    width: string;
    height: string;
    length: string;
  };
}

const Contact: React.FC = () => {
  const { t, i18n } = useTranslation("global");
  const classes = useStyles();
  const [formData, setFormData] = useState({
    weight: '',
    length: '',
    width: '',
    height: '',
    lastName: '',
  });
  const [errors, setErrors] = useState<any>({});
  const [translatedErrors, setTranslatedErrors] = useState<any>({});
  const [productInfo, setProductInfo] = useState<any>(null); // Estado para almacenar la información del producto
  const [productId, setProductId] = useState('');
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo | null>(null);
  const [error, setError] = useState('');

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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    console.log('Form data:', formData);
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
      try {
        const weightNumber = parseFloat(formData.weight);
        const lengthNumber = parseFloat(formData.length);
        const widthNumber = parseFloat(formData.width);
        const heightNumber = parseFloat(formData.height);
        const response = await fetch('http://127.0.0.1:5000/calculate_shipping', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Origin': 'http://localhost:5173'
          },
          body: JSON.stringify({ ...formData, weight: weightNumber, length: lengthNumber, width: widthNumber, height: heightNumber })
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log('Shipping cost:', data.shipping_cost);
          // Verificar si se devuelve el ID del producto correctamente
          if (data.product_id) {
            const productResponse = await fetch(`http://127.0.0.1:5000/details/${data.product_id}`);
            if (productResponse.ok) {
              const productData = await productResponse.json();
              setProductInfo(productData);
            } else {
              console.error('Failed to fetch product details');
            }
          } else {
            console.error('No product ID found in response');
          }
        } else {
          console.error('Failed to calculate shipping cost');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      setErrors(newErrors);
    }
  };

  const fetchProductInfo = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/product/${productId}`);
      setShippingInfo(response.data);
      setError('');
    } catch (err) {
      setError('Error al obtener los datos del producto.');
      setShippingInfo(null);
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
          <form onSubmit={handleSubmit} method="POST" action="/calculate_shipping">
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
