# Sobre

É uma Api de cadastro, consulta e atualização de usuarios, utilizando Jwt para autenticação e autorizção dos serviços.



#Database

```
 docker run -v ~/docker --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=balta -e MONGO_INITDB_ROOT_PASSWORD=e296cd9f mongo
```

# Auth
name: joao
password: 123



#Tabela de conteúdo
=================
<!--ts-->
   * [Sobre](#Sobre)
   * [Database](#Database)
   * [Auth](#Auth)
   * [Tabela de Conteúdo](#Tabela-de-conteúdo)
   * [Tecnologias](#Tecnologias)
   * [Como usar](#Como-usar)
<!--te-->


# Tecnologias
## Back end
- Typescript 
- NestJs
- Jwt
- Logger
- Swagger


<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>



#Como usar

```bash
# clonar repositório
git clone https://github.com/henriquepython/ApiTraineUser.git

# entrar na pasta do projeto
cd ApiTraineUser

# instalar dependências
npm install

# executar o projeto
npm start
```
