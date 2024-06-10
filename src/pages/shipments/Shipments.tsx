import React, { useState } from 'react';
import axios from 'axios';

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
        console.log('Response received:', response); // Aquí
        setShippingInfo(response.data);
        setError('');
      } catch (err) {
        console.error('Error fetching product info:', err);
        setError('Error al obtener los datos del producto.');
        setShippingInfo(null);
      }
    };
  
    return (
      <div>
        <input
          type="text"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
          placeholder="Ingrese el ID del producto"
        />
        <button onClick={fetchProductInfo}>Buscar</button>
  
        {error && <p>{error}</p>}
        
        {shippingInfo && shippingInfo.dimensions && (
          <div>
            <h2>Información de Envío:</h2>
            <p>Modo de Envío: {shippingInfo.mode}</p>
            <p>Local Pick-Up: {shippingInfo.local_pick_up ? 'Sí' : 'No'}</p>
            <p>Gratis: {shippingInfo.free_shipping ? 'Sí' : 'No'}</p>
            <p>Logística: {shippingInfo.logistic_type}</p>
            <p>Store Pick-Up: {shippingInfo.store_pick_up ? 'Sí' : 'No'}</p>
            <h3>Dimensiones del Producto:</h3>
            <p>Peso: {shippingInfo.dimensions.weight} g</p>
            <p>Ancho: {shippingInfo.dimensions.width} cm</p>
            <p>Altura: {shippingInfo.dimensions.height} cm</p>
            <p>Largo: {shippingInfo.dimensions.length} cm</p>
          </div>
        )}
      </div>
    );
  };
  
  export default Shipments;
  