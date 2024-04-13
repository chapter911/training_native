# create next js app
- npx create-next-app@latest nextjs-rapp
- npx create-next-app@latest nextjs-rapp --use-npm // jalankan yang ini

√ Would you like to use TypeScript? ... Yes
√ Would you like to use ESLint? ... Yes
√ Would you like to use Tailwind CSS? ... No
√ Would you like to use `src/` directory? ... No
√ Would you like to use App Router? (recommended) ... Yes
√ Would you like to customize the default import alias (@/*)? ... No

# instalasi
npm install react-secure-storage

# run aplikasi
npm run dev //untuk development
npm run start //untuk production

# Perubahan
D:\Project\Training\NextJs\nextjs-rapp\package.json
"scripts": {
"dev": "next dev -p 4000 --watch",
"build": "next build",
"start": "next start",
"lint": "next lint"
},

# Langkah
buat file pages/index.js
buat file config/index.js
buat file components/Layout.js
buat file components/Header.js
buat file components/Footer.js
buat file components/UserItems.js //all user
buat file components/UserItem.js //only one user
buat file pages/user/[id].js //only one user
buat file pages/user/profile.js //only one user
delete folder app //disini rename saja
buat file pages/index.js
buat file context/AuthContext.js
buat file pages/_app.js
buat file pages/user/create.js
buat file pages/user/edit/[id].js
buat file pages/user/delete/[id].js