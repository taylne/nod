console.log("HELLO WORLD");
  
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Hello Node !!!!</h1>\n");
});

server.listen(3000, () => {
  console.log("Serveur en écoute sur le port 3000");
});


const fs = require("fs");

// 1. Créer un fichier "welcome.txt" contenant "Hello Node"
fs.writeFile("welcome.txt", "Hello Node", (err) => {
  if (err) throw err;
  console.log("Fichier créé avec succès !");
});

// 2. Lire et afficher le contenu de "welcome.txt"
fs.readFile("welcome.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log("Contenu du fichier :", data);
});

const generator = require("generate-password");

function generateRandomPassword() {
  const password = generator.generate({
    length: 12,
    numbers: true,
    symbols: true,
    uppercase: true,
    lowercase: true,
    strict: true,
  });

  console.log("Mot de passe généré :", password);
}

generateRandomPassword();

const nodemailer = require("nodemailer");

// Configurer le transporteur SMTP
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "votre-email@gmail.com", // Remplacez par votre email
    pass: "votre-mot-de-passe",    // Remplacez par votre mot de passe ou utilisez un mot de passe d'application
  },
});

// Définir les options de l'email
const mailOptions = {
  from: "votre-email@gmail.com",
  to: "destinataire@example.com",
  subject: "Test Nodemailer",
  text: "Hello, ceci est un test d'envoi d'email avec Nodemailer en Node.js !",
};

// Envoyer l'email
transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.log("Erreur d'envoi :", err);
  } else {
    console.log("Email envoyé :", info.response);
  }
});
