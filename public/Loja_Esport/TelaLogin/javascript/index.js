const express = require('express');
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const path = require('path');
 
const app = express();
const prisma = new PrismaClient();
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
 
// Endpoint de login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.login.findUnique({
    where: { email }
  });
 
  if (user && await bcrypt.compare(password, user.passwordHash)) {
    res.status(200).json({ message: 'Login bem-sucedido', token: user.token });
  } else {
    res.status(401).json({ message: 'Credenciais inválidas' });
  }
});
 
// Iniciar o servidor
app.listen(3001, () => {
  console.log('http://localhost:3001');
});