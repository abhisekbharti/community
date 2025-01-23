import User from "./components/User/user";
import "./App.css";
import Chat from "./components/chat/Chat";



function App() {


  return (
    <div className="App">
      <div className="logo-header"> </div>{" "}
      {/* this section is header section logo image and name of project */}
      <div className="banner" >this is banner </div>{" "}
      {/* this section is function of heading */}
      {/* here started working with two area user naming and chatting with user */}
      <div className="container">
        {" "}
        {/** main body some styling */}
        {/* left side of user showing user name */}
        <div className="left_body">
          <User />
        </div>
        {/* right side chatting with user */}
        <div className="right_body">
          <Chat />{" "}
        </div>
        {/* footer is not recommended */}
        {/* <div className='footer'></div> */}
      </div>
    </div>
  );
}

export default App;
