### Node ~ API
A simple boilerplate to start your new API.
It has **auth** and a user registry using **postgreSQL**

### how to use
- `npm install` to get dependences

- copy and rename `.env.example` to `.env` and put your configs

- `npx prisma migrate dev` to applies all unapplied migrations to the development database and updates the _prisma_migrations table

finally, `npm run dev` to go!

### user table schema
```
-- id
-- name
-- email
-- password
-- role
```

enjoy!~