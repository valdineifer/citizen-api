# API - Cidadão
Vi o escopo deste projeto em um grupo no Telegram e decidi fazê-lo para praticar o desenvolvimento de API com uso de:
* MongoDB
* NodeJS
* Express
* Mongoose (com Paginate)

## Projeto
Desenvolvimento de API para manipular dados de cidadão.

## Requisitos:
* [x] Permitir gravar (inserir e atualizar) dados de cidadão com: nome, sobrenome, cpf, contatos (telefone, email e celular), endereço (cep, logradouro, bairro, cidade e uf);
* [x] Permitir consultar todos os cidadãos;
* [x] Permitir consultar um cidadão pelo CPF;
* [x] Não permitir cadastrar cidadão com o mesmo CPF;
* [x] Com o CEP as informações de logradouro, bairro, cidade e uf devem ser buscadas no ViaCEP: https://viacep.com.br/ws/01001000/json/
* [x] Somente usuários autenticados podem adicionar, editar ou excluir dados

## Orientações:
 - A API pode ser REST ou GraphQL;
 - A escolha do armazenamento dos dados e a utilização ou não de frameworks ficam ao seu critério;
 - Trafegar JSON;
 - Documentação das requisições;
 - Testes;
 - Boas práticas de desenvolvimento;
