Nest Js :
- Back End
- Rest API (Http Verbs)
framework berbasis javascript/typesript untuk di jalankan secara serverside processing
basis node js + Express(default)

Next Js :
- Front End
- API

ORM :
- code first
- database first

untuk authetifikasi
menggunakan jwt
bisa dilihat di jwt.io

tambahan package auth jwt
npm i passport passport-jwt @nestjs/passport @nestjs/jwt
npm --save-dev @types/passport-jwt

tambahan package untuk upload gambar ataupun file
npm install --save @types/multer

serve static file:
npm i @nestjs/serve-static

menjalankan nest js nya
pastikan pathnya di lokasi nest jsnya
kemudian jalankan ini di terminal
npm run start

D:\Project\Training\NestJs\nest-api-rapp\package.json
"test:e2e": "jest --config ./test/jest-e2e.json --no-cache --watch"
untuk no cache ini menghapus cache nya
watch jika ingin berjalan secara otomatis ketika ada perubahan