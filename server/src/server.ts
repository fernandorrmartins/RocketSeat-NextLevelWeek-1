import express from 'express';

const app = express();

// Rota: Endereço completo da requisição
// Recurso: Qual entidade estamos acessando do sistema

// GET: Buscar uma ou mais informações do back-end
// POST: Criar uma nova informação no back-end
// PUT: Atualizar uma informação existente no back-end
// DELETE: Remover uma informação do back-end

// POST http://localhost:3333/users = Criar um usuário
// GET http://localhost:3333/users = Listar usuários
// GET http://localhost:3333/users/5 = Buscar do usuário com Id 5

app.get('/users', (request, response) => {
    console.log('Listagem de usuários');

    return response.json(['Diego', 'Fernando']);
});

app.post('/users', (request, response) => {
    const user = {
        name: 'Fernando',
        email: 'fernandorrmartins@gmail.com'
    };

    return response.json(user);
})

app.listen(66);