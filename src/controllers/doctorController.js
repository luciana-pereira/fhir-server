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

export const createDoctor = async (req, res) => {
    try {
        const { data } = await axios.post(`${apiUrl}/Practitioner`, req.body, { headers });
        res.status(200).json(data);
    } catch (error) {
        console.error('Erro ao criar médico:', error);
        res.status(500).json({ error: 'Erro ao criar médico:', error});
    }
};

export const getAllDoctor = async (req, res) => {
    try {
        const { data } = await axios.get(`${apiUrl}/Practitioner`, { headers });
        res.status(200).json(data);
    } catch (error) {
        console.error('Erro ao buscar médico:', error);
        res.status(500).json({ error: 'Erro ao buscar médico.' });
    }
};

export const getDoctorId = async (req, res) => {
    try {
        const { id } = req.params; // Obtenha o ID do parâmetro da URL
        const { data } = await axios.get(`${apiUrl}/Practitioner/${id}`, { headers });
        res.status(200).json(data);
    } catch (error) {
        console.error('Erro ao atualizar médico:', error);
        res.status(500).json({ error: 'Erro ao atualizar médico.' });
    }
};

export const updateDoctor = async (req, res) => {
    try {
        const { id } = req.params;
        const { data } = await axios.put(`${apiUrl}/Practitioner/${id}`, req.body, { headers });
        res.status(200).json(data);
    } catch (error) {
        console.error('Erro ao atualizar médico:', error);
        res.status(500).json({ error: 'Erro ao atualizar médico.' });
    }
};

export const deleteDoctor = async (req, res) => {
    try {
        const { id } = req.params; 
        const { data } = await axios.delete(`${apiUrl}/Practitioner/${id}`, { headers });
        res.status(200).json(data);
    } catch (error) {
        console.error('Erro ao atualizar médico:', error);
        res.status(500).json({ error: 'Erro ao atualizar médico.' });
    }
};
