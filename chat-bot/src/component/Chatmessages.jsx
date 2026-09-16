import RobotImage from '../assets/robot.png';
import UserImage from '../assets/user.png';    
    
    //Chat Component
export function ChatMessage (props) {
       console.log(props)
      const message = props.message;
      const sender = props.sender;
     
      

      return (
        <div className={
          sender==="user" 
          ? "chat-user" 
          : "chat-robot" 
        }> 

            {sender === "robot" && 
            <img  className="robot-img"  
                  src={RobotImage} 
                  alt="user image" 
                   /> }

            <div className="chat-text">
              {message}
            </div>
            

            {sender === "user" &&  
            <img  className="user-img"
                  src={UserImage}
                  alt="user image" 
                  />  }


        </div> 
      );
    }    