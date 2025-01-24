import User from "./components/User/User";
import "./App.css";
import Chat from "./components/chat/Chat";

function App() {
  return (
    <div className="App">
      <div className="logo-header"></div>
      {/* this section is header section logo image and name of project */}
      <div className="banner" >this is banner </div>

      <div className="container">
        <div className="left_body">
          <User />
        </div>
        <div className="right_body">
          <Chat />
        </div>
      </div>
      {/* footer is not recommended */}
      {/* <div className='footer'></div> */}
    </div>
  );
}

export default App;
