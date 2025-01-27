"use client";
console.log("ChatComponent loaded");
import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:4000"); // Assicurati che il server Socket.IO sia attivo

export default function ChatComponent() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      socket.off("message");
    };
  }, []);

  const sendMessage = () => {
    if (input.trim()) {
      socket.emit("message", input);
      setInput("");
    }
  };

  return (
    <div>
      <h2>Chat</h2>
      <div style={{ border: "1px solid #ccc", height: "300px", overflowY: "scroll" }}>
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Scrivi un messaggio"
      />
      <button onClick={sendMessage}>Invia</button>
    </div>
  );
}
