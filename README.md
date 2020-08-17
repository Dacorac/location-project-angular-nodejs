# location-project-angular-nodejs

## Description
This project is built using an Express server and an Angular client. The database is built as a replica fron RDS PostgreSQL database in AWS. Everything is wrapped up in a docker compose project to be executed.

### Pre-requisitos 📋

To run this project you need to install [Docker](https://docs.docker.com/get-docker/) 

### Run 🔧

Follow the following steps to run the docker image from this project.

- Clone this project using GIT.
```sh
$ git clone https://github.com/Dacorac/location-project-angular-nodejs.git
```
- Run the following commands in your CMD.
```sh
$ cd location-project-angular-nodejs
$ docker-compose build
$ docker-compose up
```
- Go to **http://localhost:4200** in your browser.

## Built using 🛠️
  - [AngularCLI](https://cli.angular.io/) - Frontend
  - [Nodejs](https://nodejs.org/) - Backend
  - [Express](https://expressjs.com/) - Backend 
  - [Sequelize](https://sequelize.org/) - ORM 
  - [RDS AWS](https://aws.amazon.com/rds/) - Database
  - [PostgreSQL](https://https://www.postgresql.org/) - Database
  - [Docker](https://www.docker.com/) - Containers

License
----

MIT
