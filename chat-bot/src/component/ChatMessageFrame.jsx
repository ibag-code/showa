import { useRef, useEffect } from 'react'; 
import { ChatMessage } from './Chatmessages';


//MVC component
function ChatMessageFrame ({ chatMessages, isLoading}) {

      const chatMessagesRef = useRef(null);

      //Run some code after MVC component code run
       useEffect(() => {

       const containerELem = chatMessagesRef.current;
       if (containerELem) {
        containerELem.scrollTop =  containerELem.scrollHeight;
       }

       },[chatMessages])
          
      return(

        <div className="both-chat-container"
              ref = {chatMessagesRef}
        > 

          {chatMessages.map((chatMessage) => {
              return (

                <ChatMessage 
                  key = {chatMessage.id}
                  message={chatMessage.message}
                  sender={chatMessage.sender}
                />
              );
          })}

          {isLoading && <div>Loading...</div>}
        </div>
      )

    }

export default ChatMessageFrame;