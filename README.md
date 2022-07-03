# Dad-A-Base

A place for expecting fathers.

## [Client](/client)

## [Server](/server)

## MERN STACK TODO's

[ ] on login: direct to dashboard
[ ] protect client routes
[ ] Associations: user, messages, chatroom, friends

## Getting Started

Make sure that you have Git, Node.js and MongoDB installed. Then in your terminal run the following:

```sh
$ git clone git@github.com:T-Wesst/dad-a-base.git
$ mongod
$ npm run install-all
$ npm run dev
```

# CLIENT ROUTES

| METHOD | ROUTE      | DESCRIPTION                                         |
| ------ | ---------- | --------------------------------------------------- |
| POST   | /signup    | shows signup form: submit to /api/users/signup      |
| POST   | /login     | shows login form: submit to /api/users/login        |
| GET    | /logut     | button request to /api/users/logout                 |
| GET    | /\*        | shows 404 page & request to \*                      |
| GET    | /dashboard | shows dashboard page & request api/users/authorized |

# API ROUTES

| METHOD | ROUTE                | RESPONSE                                                                                      |
| ------ | -------------------- | --------------------------------------------------------------------------------------------- |
| POST   | api/users/signup     | creates user, token into cookie, send to client                                               |
| GET    | api/users/logout     | clears cookie and redirects to landing page                                                   |
| POST   | api/users/login      | finds a user by username & password, stores and creates a token in cookie and sends to client |
| GET    | api/users/authorized | cookie required to access protected routes                                                    |
| GET    | api/users/visitor    | sends a welcome message                                                                       |
| GET    | \*                   | sends a 404 message                                                                           |

# Data Associations

| Model    | Relationship | Model     |
| -------- | ------------ | --------- |
| User     | one : many   | Mssages   |
| User     | many : many  | Chatrooms |
| User     | one : many   | Friends   |
| Chatroom | one : many   | Messages  |

```js
// embedded association

var postSchema = new mongoose.Schema({
	title: String,
	content: String
})

var Post = mongoose.modal('Post', postSchema);

var userSchema = new mongoose.Schema({
	email: String,
	name: String,
	posts: [postSchema]
})

var User = mongoose.modal('User', userSchema);


var newUser = new User({
	email:'hi@gmail.com',
	name:'hi'
})

// !does not save
newUser.posts.push({
	title:'new post',
	content: 'its a new post'
})

// saves new post
newUser.save(function(err, user){
	if(err){
		console.log(err);
	} else {
		consoel.log(user);
	}
})

//		=======================================

// refeerence association

var postSchema = new mongoose.Schema({
	title: String,
	content: String
})

var Post = mongoose.modal('Post', postSchema);

var userSchema = new mongoose.Schema({
	email: String,
	name: String,
	posts: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'postSchema'
		}
	]
})

var User = mongoose.modal('User', userSchema);

Post.create({
	title: 'new post',
	content: 'its a new post'
}, function(err, post){
		User.findOne({name:'tyroo'}, function(err, foundUser){
			if(err) console.log(err);
			foundUser.posts.push(post);
			foundUser.save(function(err, data){
				if(err) console.log(err);
				console.log(data);
			})
		})
	})

// creates and saves a user
User.create({
	name:'tyroo',
	email:'tyroo@t.com
})
```

Embedding:

- Small subdocuments
- Data that does not change regularly
- Eventual consistency is acceptable
- Document that grow by a small amout
- Data that you will often need to perform a second query to fetch
- Fast reads

Referencing:

- Large subdocuments
- Volatile data
- Immediate consistency is necessary
- Document that grow a large amount
- Data that you will often exclude from results
- Fast writes

```js
// using above, find user and all posts associated with user

User.findOne({ name: 'tyroo' })
  .populate('posts')
  .exec(function(err, user) {
    if (err) console.log(err);
    console.log(user);
  });
```
