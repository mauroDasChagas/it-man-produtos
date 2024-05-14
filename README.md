# it-man-produtos

Repositório contendo um projeto básico utilizando Sails conectado a um banco de dados PostgreSQL no Render. O objetivo é auxiliar os alunos a compreender como realizar a integração entre frontend, backend e banco de dados.

## Como rodar a aplicação?

1. Navegue até o diretório da aplicação usando o comando:

```
cd it-man-app
```

2. Em seguida, execute o comando: (talvez precise de um `npm i` antes)

```
sails lift
```

3. Acesse a aplicação em [http://localhost:1337](http://localhost:1337)

## Dados para conectar com o DBeaver:

- **Hostname:** dpg-cp14isfsc6pc7385iv0g-a
- **Porta:** 5432
- **Usuário:** itman
- **Senha:** 4RKbp8foBDBNIOaSgZMNF779VkJl4lcQ
- **URL do banco de dados externo:** `postgres://itman:4RKbp8foBDBNIOaSgZMNF779VkJl4lcQ@dpg-cp14isfsc6pc7385iv0g-a.oregon-postgres.render.com/dbitman`

## Explicação do que foi desenvolvido até então:

A aplicação é simples e tem como principal objetivo servir de suporte para facilitar a compreensão da integração entre as partes de uma aplicação. Alguns pontos importantes incluem:

- O arquivo `./config/datastore.js` está conectado ao banco de dados fornecido. Para conectar-se ao seu próprio banco de dados ou projeto, basta modificar esta linha com os dados correspondentes:

 ```javascript
 adapter: 'sails-postgresql',
 url: mude aqui,
 ssl: true,
 ```

- O arquivo `./config/routes.js` contém todas as rotas da aplicação, responsáveis pelas operações CRUD (Create, Read, Update, Delete) de produtos.

 ```javascript
 // CRUD - produtos
 'POST /product/create': 'ProductController.create',
 'GET /product/:id': 'ProductController.findOne',
 'GET /product': 'ProductController.find',
 'PUT /product/:id': 'ProductController.update',
 'DELETE /product/:id': 'ProductController.delete',
 ```

- No diretório `./api/models`, há um modelo simples chamado `Product.js`, enquanto no diretório `./api/controllers` encontra-se o `ProductController`, responsável por executar as operações definidas nas rotas.

- Por fim, temos uma única visualização localizada em `./views/pages/homepage.ejs`, onde a integração ocorre. Embora todo o conteúdo esteja em um único arquivo por questões de simplicidade, não foi utilizado o EJS diretamente. Em vez disso, foram utilizadas tags `<script></script>` correspondentes para cada parte do HTML, onde o `fetch` é usado para obter dados das rotas do backend, os quais são convertidos em JSON e retornados ao frontend. O frontend então manipula o DOM para atualizar com os dados do servidor.

Para qualquer dúvida, não hesite em entrar em contato. Estou aqui para ajudar! 🤙

![Imagem](https://pbs.twimg.com/media/Fi6hVIsXgAYu-a6.png)
