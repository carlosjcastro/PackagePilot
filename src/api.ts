import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const detectAnomaly = async (data: any) => {
  const response = await axios.post(`${API_URL}/detect_anomaly`, data);
  return response.data;
};

export const translateText = async (texts: any, to: string) => {
  const response = await axios.post(`${API_URL}/translate`, { texts, to });
  return response.data;
};
