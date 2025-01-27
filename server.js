const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "*", // Permetti connessioni da qualsiasi origine (puoi restringere in produzione)
  },
});

io.on("connection", (socket) => {
  console.log("Un utente si è connesso!");

  // Gestione messaggi
  socket.on("message", (data) => {
    console.log(`Messaggio ricevuto: ${data}`);
    io.emit("message", data); // Invia il messaggio a tutti i client
  });

  socket.on("disconnect", () => {
    console.log("Un utente si è disconnesso.");
  });
});

// Avvio server
const PORT = 4000;
httpServer.listen(PORT, () => {
  console.log(`Socket.io server in esecuzione su http://localhost:${PORT}`);
});
