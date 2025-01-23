import styles from "./user.module.css";
import { useDispatch } from "react-redux";
import { udpateUser as selectUser } from "../app/feature";

// import username from './username';  kahi se user name import karne ka code hai ye bakend se aa rha hai


let userName = [{name:'abhisek'},{name:'bharti'},{name:'xyz'},{name:'power'}];


function User(){
    const dispatch = useDispatch();
    // user send to store then access @chat user  
    function handleUser(user){
        dispatch(selectUser(user))
        // get data chat history user
        
        // console.log(user);
    }





    // <img src={user.image} alt={user.name} /> replace inside label 
return (
    <>
      <div className={styles.user_bodies}>
        {userName.map((user, i) => (
          <div className={styles.user_body} key={i}>
            <div className={styles.user} onClick={() => handleUser(user.name)}>
              <label>
                {/* <img src="" alt=""/> */}
                {user.name} {/* Only the name should be displayed here */}
              </label>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default User;
