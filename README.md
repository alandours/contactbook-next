# ContactBook

Contacts app made with Next.js, TypeScript and PostgreSQL

## Setup

#### Clone repo

```
git clone https://github.com/alandours/contactbook-next.git
```

#### Add `DATABASE_URL` to .env file ([Connection details](https://www.prisma.io/docs/orm/overview/databases/postgresql#connection-details))

```
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE
```

#### Install dependencies

```sh
npm install
```

#### Generate Prisma client

```sh
npx prisma generate
```

#### Run development server

```sh
npm run dev
```
