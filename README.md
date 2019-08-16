# Dad-A-Base

A place for expecting fathers.

## [Client](/client)

## [Server](/server)

## MERN STACK TODO's

[ ] Input Validation signup & login

[ ] Style pages

[ ] login erors

[ ] dashboard page get auth route


## Getting Started

Make sure that you have Git, Node.js and MongoDB installed. Then in your terminal run the following:

```sh
$ git clone git@github.com:T-Wesst/dad-a-base.git
$ mongod
$ npm run install-all
$ npm run dev
```

# CLIENT ROUTES
| METHOD | ROUTE  | DESCRIPTION                                                                                                                
| ------ | ------ |------------------------------------------ |
| POST   | /signup| shows signup form: submit to /api/users/signup |
| POST   | /login | shows login form: submit to /api/users/login  |
| GET    | /logut | button request to /api/users/logout       |
| GET   | /* | shows 404 page & request to *  |
| GET   | /dashboard | shows dashboard page & request api/users/authorized  |                                                                                              

# API ROUTES

| METHOD | ROUTE            | RESPONSE                                                                                                                
| ------ | ---------------- | ------------------------------------------------------------------------ |
| POST   | api/users/signup | creates user, token into cookie, send to client |                   
| GET    | api/users/logout | clears cookie and redirects to landing page                              |
| POST   | api/users/login | finds a user by username & password, stores and creates a token in cookie and sends to client |
| GET    | api/users/authorized | cookie required to access protected routes                           |
| GET    | api/users/visitor | sends a welcome message                                                                               
| GET    | * | sends a 404 message|
