import express from "express";
import fetch from 'node-fetch';
/* Obtener repositorios */
export const getRepositories = async (req, res) => {
  try {
    const response = await fetch('https://api.github.com/users/google/repos?per_page=10&sort=stars');
    const data = await response.json();
    res.json(data);
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

