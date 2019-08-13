# Dad-A-Base

A place for expecting fathers.

## MERN STACK

## Getting Started

Make sure that you have Git, Node.js and MongoDB installed. Then in your terminal run the following:

```sh
$ git clone git@github.com:T-Wesst/dad-a-base.git 
$ mongod
$ npm run install-all
$ npm run dev
```

## [Client]()

## [Server]()

# API ROUTES

METHOD | ROUTE | RESPONSE
---|---|---
POST | api/users/signup | creates a new user with a token, stores in cookie and sends to client, redirects to authorized
GET | api/users/logout | clears cookie and redirects to landing page
POST | api/users/login |finds a user by ID, creates a token, stores in cookie and sends to client, redirects to authorized
GET | api/users/authorized | cookie required to access protected routes
GET | api/users/visitor | sends a welcome message