// import axois from "axios";
import styles from "./Chat.module.css";
import { useSelector } from "react-redux";
import { useState } from "react";

function Chat() {
  const user = useSelector((state) => state.selectUser);
  const [message, setMessage] = useState("");
  let value = ["hii", "how are you", "i'm fine "];
  //  when tpye message and click send button then send message to server with opposite user
  function sendMessage() {
    console.log(message);
    value.push(message);
    setMessage("");
    // axois.post("http://localhost:3001/chat/newMessage"),
    //   {
    //     message: "Welcome! your massage send ",
    //   }.catch((err) => {
    //     console.log(err);
    //   });
  }
  // demo for storing this type of message user


  return (
    <section className={styles.chat_body}>
      <div className={styles.chat_heading}>
        <img src="" alt="" />
        <h3>{user}</h3>
        {/*  */}
        {/** always on the top  */}
        {/* import image and user name */}
        {/* <label> {name} <img src={image} alt={user}/> </label> */}
        {/* in future delete message implement */}
      </div>
      {/* this section is chat message data taken from server */}
      {/* here two types accepting message 1)linked listed 2) array new msg is last of the array */}
      <div className={styles.chat_mesaage}>
        <div className={styles.message}>
          {value.reverse().map((chat, i) => (
            <p key={i}>{chat}</p>
          ))}
        </div>
      </div>

      <div className={styles.chat_footer}>
        <input
          type="text"
          placeholder="Type your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessage} disabled={!message} >Send</button>
      </div>
    </section>
  );
}
export default Chat;
