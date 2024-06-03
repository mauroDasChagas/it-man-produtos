# 📕 Orientações para projeto web solo

Oopa! Falae pessoal! Tudo certo? A prova está chegando e uma das melhores formas de estudar é praticando! Sendo assim, além de vocês concertarem aplicações web como uma forma de estudo para a parte prática, acho que seria super bacana tentarem desenvolver uma aplicação do zero! É algo que vai ajudá-los a ter uma noção mais ampla de como é todo o processo de desenvolvimento de uma aplicação e, por consequência, vai facilitar o processo de correção de outra aplicação!

Aqui eu vou deixar só uma proposta de exercício e algumas orientações de como vocês podem fazer! A ideia é que vocês tentem desenvolver usando os aprendizados que tiveram ao longo do módulo! Vou passar um direcionamento, mas os modos como podem fazer isso são ilimitados! Usem como uma forma de estudo e desenvolvimento!

## ✅ Sistema de gestão de tarefas

Desenvolva um projeto web que servirá como um sistema de gestão de tarefas, desenvolvido para auxiliar no gerenciamento de tarefas diárias. A aplicação permitirá aos usuários criar, editar, excluir e visualizar tarefas. O projeto deverá ser desenvolvido usando Sails.js, um framework MVC para Node.js.

### 🎯 Objetivo

Desenvolver uma aplicação web completa utilizando Sails.js, aplicando conceitos de MVC (Model-View-Controller) e helpers para controllers, além de estruturar o frontend de maneira organizada.

### 🛠️ Sugestões de funcionalidades:

- Registro e login de usuários
- CRUD de tarefas (Criar, Ler, Atualizar, Excluir)
- Marcar tarefas como concluídas
- Filtragem de tarefas por categoria, data e status

### 💭 Alguns direcionamentos iniciais

1. Lembre-se de ter o sails instalado na sua máquina:

```bash
npm install -g sails
```

2. Lembre-se do comando para criar um novo projeto

```bash
sails new nome-do-seu-projeto
```

3. Lembre-se do comando de como entrar na pasta do seu projeto após criá-lo

```bash
cd nome-do-seu-projeto
```

4. Lembre-se que para usar um banco de dados _PostgreSQL_ é necessário ter o adaptador do _Sails_

```bash
npm install sails-postgresql --save
```

5. Lembre-se de configurar seu arquivo `config/datastore.js` com as credenciais do seu banco de dados (se quiser usar as credenciais do banco de dados que eu disponibilizei para vocês na branch main desse repositório, fique à vontade)

```javascript
module.exports.datastores = {
  default: {
    adapter: 'sails-postgresql',
    url: 'postgres://username:password@host:port/database',
    ssl: true, // não se esqueça de definir o ssl como true
  },
};
```

6. Lembre-se que toda a estrutura dos seus Models, Controllers e Helpers fica na pasta `api` do projeto Sails, enquanto que a visualização do seu frontend fica em `views`.

7. Lembre-se que os nomes das suas rotas são criados em `config/routes.js`

### 💡 Algumas ideias 

Bem, minha principal recomendação com esse projeto é que você tente implementar os conhecimentos que tem do 0, visando realmente revisar e colocar em prática o que aprendeu sobre desenvolvimento web durante esse módulo! Precisamente por isso, incentivo que invente moda e faça com que seja divertido todo esse processo!

Mas caso precise de um direcionamento, deixo aqui algumas sugestões em alto nível do que pode ser feito!

#### Models que podem ser criados
- Tarefa (bem, um sistema de gerenciamento de tarefas precisa de tarefas, né?)
    - Nome da tarefa
    - Descrição
    - Data de início
    - Data de vencimento
    - Prioridade (Alta/Média/Baixa)
    - Etiquetas ("Trabalho", "Estudo", "Casa", ou mesmo o usuário pode criar suas próprias)
    - Local
    - Subtarefas (Como modelar isso no PostgreSQL??? Uma tarefa pode ter várias subtarefas? 🤔 E as subtarefas? 🤔Pode ter subsubtarefas? 🤔 E as subsubsubtarefas? 🤔 Tem subsubsubsub aaaaaaa 😭)
    - Status (Pendente/Concluída)

- Usuário (relaxem quanto a questão de criptografia e autenticação, não é o foco aqui)
    - Nome
    - Email
    - Idade
    - Profissão

- Etiquetas (Se for seguir a ideia dos usuários poderem criar as suas próprias, então você vai ter que armazenar essa informação)
    - Nome da etiqueta
    - Descrição
    - Cor da etiqueta (talvez para mudar a visualização no frontend)

#### Controllers
- Na verdade aqui não tem muito segredo, apenas pense sobre quais ações seriam interessantes para cada uma das suas entidades, faz sentido criar um usuário? (provavelmente sim), faz sentido um usuário poder deletar sua própria conta? (bem, acho que sim) faz sentido um usuário poder deletar a conta de outro usuário? (calma lá, patrão). Pense principalmente no que faz e não faz sentido e aplique da forma que melhor atender às necessidades da sua aplicação!

#### Helpers
- **Formatador de Data:** Um helper para formatar datas de acordo com o formato desejado, facilitando a exibição da data de vencimento das tarefas.
- **Validador de Campos:** Um helper para validar os campos de entrada antes de criar ou atualizar as tarefas, garantindo que os campos obrigatórios sejam preenchidos.
- **Gerador de ID Único:** Um helper para gerar IDs únicos para as tarefas, garantindo que não haja conflitos de identificação.
- **Verificador de Tarefas Concluídas:** Um helper para verificar se todas as tarefas foram concluídas, útil para exibir uma mensagem ou tomar alguma ação quando todas as tarefas estiverem concluídas.
- **Calculadora de Tempo Restante:** Um helper para calcular o tempo restante até a data de vencimento das tarefas, ajudando os usuários a priorizarem suas atividades.
- **Gerador de Relatório:** Um helper para gerar relatórios de tarefas

#### Views
- **Tela de Login:** Uma tela para que os usuários façam login na aplicação
- **Tela de Cadastro de Tarefas:** Uma tela para que os usuários possam criar novas tarefas, com campos para preencher as informações necessárias, como nome da tarefa, descrição, data de início, data de vencimento, prioridade, etiquetas, local e status.
- **Tela de Listagem de Tarefas:** Uma tela para que os usuários possam visualizar todas as tarefas criadas, com opções para filtrar e ordenar as tarefas por categoria, data e status. Além disso, você pode adicionar opções para editar ou excluir as tarefas.
- **Tela de Edição de Tarefas:** Uma tela para que os usuários possam editar as tarefas existentes, com campos para atualizar as informações necessárias
- **Tela de Detalhes de Tarefas:** Uma tela para que os usuários possam visualizar as informações detalhadas de uma tarefa específica, incluindo o nome, descrição, data de início, data de vencimento, prioridade, etiquetas, local e status.
- **Tela de Perfil de Usuário:** Uma tela para que os usuários possam visualizar e editar as informações do seu perfil, como nome, email, idade e profissão.
- **Tela de Listagem de Etiquetas:** Uma tela para que os usuários possam visualizar todas as etiquetas criadas, com opções para filtrar e ordenar as etiquetas.
- **Tela de Cadastro de Etiquetas:** Uma tela para que os usuários possam criar novas etiquetas, com campos para preencher as informações necessárias, como nome da etiqueta, descrição e cor da etiqueta.
- **Tela de Relatório de Tarefas:** Uma tela para que os usuários possam visualizar relatórios de tarefas, como o número de tarefas concluídas, o número de tarefas em andamento e o tempo restante até a data de vencimento das tarefas.
- **Tela de Configurações:** Uma tela para que os usuários possam configurar as configurações do sistema, como a cor do tema, a linguagem e as notificações.
- **Tela de Ajuda:** Uma tela para que os usuários possam acessar a documentação e os tutoriais do sistema, bem como entrar em contato com o suporte.

### 🤓 Considerações finais

Lembre-se que a ideia disso é ser mais como uma forma de estudo, de forma alguma levem isso como mais uma ponderada ou coisa assim, implmentem o que der na telha, façam o melhor que puderem, estudem como acharem melhor! Estou apenas compartilhando algumas formas de fazer isso caso estejam precisando! E lembrem-se, qualquer dúvida, me chamem!


### 📚 Uff referências

- [Sails.js Docs reference](https://sailsjs.com/documentation/reference)
- [Sails.js docs concepts](https://sailsjs.com/documentation/concepts)
- [Sails.js docs tutorials](https://sailsjs.com/documentation/tutorials)
- [Node.js docs](https://nodejs.org/docs/latest/api/synopsis.html)
- [Node.js tutorial - w3schools](https://www.w3schools.com/nodejs/)
- [MVC Design Pattern - GeeksForGeeks](https://www.geeksforgeeks.org/mvc-design-pattern/)
- [JavaScript tutorial - w3schools](https://www.w3schools.com/Js/)


![Imagem](https://pbs.twimg.com/media/FN4c9bragAASHBX.jpg)