// import Patient from '../models/patient'; 
import { getToken } from '../utils/authentication.js';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const apiUrl = process.env.URL_FHIR;
const token = await getToken();

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    Authorization: `Bearer ${token}`,
};

export const createPatient = async (req, res) => {
    try {
        const { data } = await axios.post(`${apiUrl}/Patient`, req.body, { headers });
        res.status(200).json(data);
    } catch (error) {
        console.error('Erro ao criar paciente:', error);
        res.status(500).json({ error: 'Erro ao criar paciente:', error});
    }
};

export const getAllPatient = async (req, res) => {
    try {
        const { data } = await axios.get(`${apiUrl}/Patient`, { headers });
        res.status(200).json(data);
    } catch (error) {
        console.error('Erro ao buscar pacientes:', error);
        res.status(500).json({ error: 'Erro ao buscar pacientes.' });
    }
};

export const getPatientId = async (req, res) => {
    try {
        const { id } = req.params; // Obtenha o ID do parâmetro da URL
        const { data } = await axios.get(`${apiUrl}/Patient/${id}`, { headers });
        res.status(200).json(data);
    } catch (error) {
        console.error('Erro ao atualizar paciente:', error);
        res.status(500).json({ error: 'Erro ao atualizar paciente.' });
    }
};

export const updatePatient = async (req, res) => {
    try {
        const { id } = req.params;
        const { data } = await axios.put(`${apiUrl}/Patient/${id}`, req.body, { headers });
        res.status(200).json(data);
    } catch (error) {
        console.error('Erro ao atualizar paciente:', error);
        res.status(500).json({ error: 'Erro ao atualizar paciente.' });
    }
};

export const deletePatient = async (req, res) => {
    try {
        const { id } = req.params; 
        const { data } = await axios.delete(`${apiUrl}/Patient/${id}`, { headers });
        res.status(200).json(data);
    } catch (error) {
        console.error('Erro ao atualizar paciente:', error);
        res.status(500).json({ error: 'Erro ao atualizar paciente.' });
    }
};
