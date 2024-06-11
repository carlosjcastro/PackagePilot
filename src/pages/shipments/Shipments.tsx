import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './shipments.css';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

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

const Shipments: React.FC = () => {
  const { t, i18n } = useTranslation("global");
  const [productId, setProductId] = useState('');
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo | null>(null);
  const [error, setError] = useState('');

  const fetchProductInfo = async () => {
    try {
      console.log('Fetching product info for product ID:', productId);
      const response = await axios.get(`http://localhost:5173/shipments/${productId}`, {
        headers: {
          'Accept': 'application/json'
        }
      });
      console.log('Response received:', response);
      setShippingInfo(response.data);
      setError('');
    } catch (err) {
      console.error('Error fetching product info:', err);
      setError(t("shipments.shipment-error"));
      setShippingInfo(null);
    }
  };

  useEffect(() => {
    if (error) {
      setError(t("shipments.shipment-error"));
    }
  }, [i18n.language]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="shipments-container"
    >
      <h2 className='shipments-title'>{t("shipments.shipment-title")}</h2>
      <input
        type="text"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
        placeholder={t("shipments.shipment-place")}
        className="input"
      />
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={fetchProductInfo}
        className="shipments-button"
      >
        {t("shipments.shipment-button")}
      </motion.button>

      {error && <p className="error">{error}</p>}
      
      {shippingInfo && shippingInfo.dimensions && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="shipping-info"
        >
          <h2>{t("shipments.shipping-info")}</h2>
          <p>{t("shipments.mode")}: {shippingInfo.mode}</p>
          <p>{t("shipments.local-pick-up")}: {shippingInfo.local_pick_up ? t("yes") : t("no")}</p>
          <p>{t("shipments.free-shipping")}: {shippingInfo.free_shipping ? t("yes") : t("no")}</p>
          <p>{t("shipments.logistic-type")}: {shippingInfo.logistic_type}</p>
          <p>{t("shipments.store-pick-up")}: {shippingInfo.store_pick_up ? t("yes") : t("no")}</p>
          <h3>{t("shipments.product-dimensions")}</h3>
          <p>{t("shipments.weight")}: {shippingInfo.dimensions.weight} g</p>
          <p>{t("shipments.width")}: {shippingInfo.dimensions.width} cm</p>
          <p>{t("shipments.height")}: {shippingInfo.dimensions.height} cm</p>
          <p>{t("shipments.length")}: {shippingInfo.dimensions.length} cm</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Shipments;
