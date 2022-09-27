import { login } from '../repository/adminRepository.js'

import { Router } from "express";
const server = Router();


server.post('/admin/login', async (req, resp) => {
    try {
        const { email, senha } = req.body;
        
        const resposta = await login(email, senha);
        if (!resposta) {
            throw new Error ('credenciais invalidas')
        }
        resp.send(resposta)
        
        
    } catch (err) {
        resp.status(401).send({
            erro: err.message
        });
    }
})

export default server;