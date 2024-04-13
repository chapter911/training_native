instalasi nest.js
npm i -g @nestjs/cli

buat project nest js :
secara default menggunakan ini
nest new nest-api-rapp

metode lainnya
nest new nest-api-rapp --skip-git

instalasi prisma orm:
sourcenya di prisma.io
(tools untuk development)
npm i prisma --save-dev

(tools untuk development/client)
npm i @prisma/client

npx prisma init (create schema file)

jika db first:
npx prisma db pull

code first:
npx prisma migrate dev (tabel akan di reset dari awal)

untuk membuka prisma studio:
npx prisma studio

config module :
npm i --save @nestjs/config

create module :
nest g module namaModule

create service:
nest g service namaService
nest g service namaService --no-spec

validator
npm i class-validator

hashing:
npm i argon2

instalasi pactumjs
npm i pactum --save-dev