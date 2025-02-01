import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import styles from "./Chat.module.css";

function Chat() {
  const user = useSelector((state) => state.selectUser);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(["hii", "how are you?", "I'm fine"]);
  const messageEndRef = useRef(null);  // Reference for the scroll position

  // Scroll to the bottom after new message is sent
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (message.trim()) {
      setMessages((prevMessages) => [message, ...prevMessages]); // New message goes to the top
      setMessage("");
      // Here you can add the logic to send the message to the server
      // axios.post("http://localhost:3001/chat/newMessage", { message });
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <section className={styles.chat_body}>
      <div className={styles.chat_heading}>
        <h3>{user}</h3>
      </div>

      <div className={styles.chat_message}>
        {/* Render all messages */}
        {messages.map((chat, i) => (
          <p key={i}>{chat}</p>
        ))}
        <div ref={messageEndRef} /> {/* This is where the scroll will go to */}
      </div>

      <div className={styles.chat_footer}>
        <input
          type="text"
          placeholder="Type your message"
          value={message}
          onKeyPress={handleKeyPress}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessage} disabled={!message.trim()}>
          Send
        </button>
      </div>
    </section>
  );
}

export default Chat;
