Teste Recrutamento Interno Dev Opa! Suite

Documentação de Requisitos Funcionais

Objetivo: O sistema tem como objetivo implementar uma API de gerenciamento de produtos e categorias. O sistema será desenvolvido utilizando Node.js (Express) para o backend. A aplicação deve armazenar os dados em um banco de dados MongoDB (local ou Atlas).

Funcionalidades Obrigatórias

1. Cadastro de Usuários (Backend)

    Descrição: O sistema deve permitir o cadastro de usuários através de uma rota de API.
    Requisitos:
        Deve haver uma rota para cadastro de usuários.
        O usuário deve fornecer username e password no cadastro.
        Os dados do usuário devem ser armazenados em um banco de dados MongoDB.
        A rota deve retornar um feedback de sucesso ou falha no cadastro.

2. Autenticação de Usuário (Backend)

    Descrição: O sistema deve permitir que os usuários autenticados acessem a aplicação.
    Requisitos:
        Deve haver uma rota para realizar o login.
        Deve ser possível autenticar usando um username e password cadastrados.
        Após o login, a API deve retornar um token JWT que será utilizado nas demais requisições como método de autenticação.

3. Gestão de Categorias (Backend)

    Descrição: O sistema deve permitir que os usuários criem, editem e deletem categorias.
    Requisitos:
        Deve haver um endpoint para criar uma categoria.
        Deve haver um endpoint para editar uma categoria.
        Deve haver um endpoint para atualizar uma categoria.
        Deve haver um endpoint para buscar todas as categorias.
        Deve haver um endpoint para buscar uma categoria específica.
        Uma categoria deve possuir os campos name e description.

4. Gestão de Produtos (Backend)

    Descrição: O sistema deve permitir que os usuários criem, editem e deletem produtos..
    Requisitos:
        Deve haver um endpoint para criar um produto.
        Deve haver um endpoint para editar um produto.
        Deve haver um endpoint para atualizar um produto..
        Deve haver um endpoint para buscar todos os produtos.
        Deve haver um endpoint para buscar um produto específico.
        Um produto deve possuir os campos name, description, amount e price.
        Um produto pode estar associado a nenhuma, uma ou múltiplas categorias.

5. Consulta de dados gerais (Backend)

    Descrição: O sistema deve permitir que os usuários consultem dados através de uma rota
    Requisitos:
        Deve ser possível consultar todas as categorias juntamente com seus produtos associados.
         Deve ser possível consultar todos os produtos pertencentes a uma categoria específica.

Requisitos Não Funcionais

6. Repositório Git

    Descrição: O projeto deve ser entregue em um repositório público no GitLab ou GitHub.
    Requisitos:
        O repositório deve conter o código-fonte do projeto.
        O README.md deve conter as instruções para instalação, configuração e execução da aplicação.


 instalação:
  npm install

 configuração .env:
  port= 5000
  MONGO_URI=mongodb://localhost:27017/testeopa
  JWT_SECRET=sua-chave-secreta

  executar:
   npm run dev
   npm start

   arquivo para importar as rotas de testes:
    rotas_teste.json
    