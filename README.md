# Dad-A-Base

A place for expecting fathers.

# API ROUTES

METHOD | ROUTE | RESPONSE
---|---|---
POST | api/users/signup | creates a new user with a token, stores in cookie and sends to client, redirects to authorized
GET | api/users/logout | clears cookie and redirects to landing page
POST | api/users/login |finds a user by ID, creates a token, stores in cookie and sends to client, redirects to authorized
GET | api/users/authorized | cookie required to access protected routes
GET | api/users/visitor | sends a welcome message