### Node ~ API
A simple boilerplate to start your new API.
It has **JWT auth** and a user registry using **mySQL**

### how to use
`npm install` to get dependences<br/>
copy and rename `.env.example` to `.env`, and put your configs ..<br/>
create user table and user (with admin role) in your DB (necessary to the get token)
finally, `npm run dev` to go!

### user table schema
```
-- id
-- email
-- password
-- role
```
