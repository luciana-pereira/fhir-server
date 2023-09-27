import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const tenantId = process.env.TENANT_ID;
const apiUrl = process.env.URL_FHIR;

export const getToken = async () => {
  const tokenUrl = `https://login.microsoftonline.com/${tenantId}/oauth2/token`;
  const requestBody = `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}&resource=${apiUrl}`;
  
  try {
    const response = await axios.post(tokenUrl, requestBody, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  
    if (response.data && response.data.access_token) {
      return response.data.access_token;
    } else {
      throw new Error('Falha ao obter o token de autenticação.');
    }
  } catch (error) {
    throw error;
  }
};
