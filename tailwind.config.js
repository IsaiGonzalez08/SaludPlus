/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        backgroundImage: {
          backDoctors : "url('./assets/img/Background.png')",
          backLogin : "url('./assets/img/Login-bckg.jpg')",
          backRegistro : "url('./assets/img/Registro.bckg.jpg')",
          backLogAdmin  : "url('./assets/img/backAdmi.jpg')"
        }
      },
    },
    plugins: [],
  }