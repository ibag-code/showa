import { useState } from 'react'

import { ChatInput } from './component/ChatInput';

import ChatMessageFrame from './component/ChatMessageFrame';

import './App.css'



    function AppDisplay() {
            
          //Converting the data into state
      const [chatMessages, setChatMessages] = useState(
        [{
            id: 'id1',
            message: "Hello ChatBot",
            sender: "user"
          },
          {
            id: 'id2',
            message: "Hello! how can i help you?",
            sender: "robot"
          }, 
          {
            id: 'id3',
            message: "Can you get me todays day",
            sender: "user"
          }, 
          {
            id: 'id4',
            message: "Today is September 9",
            sender: "robot"
          }
        ]);


        //Loading State 
      const [isLoading, setIsLoading] = useState(false)

        return (
          <div className ="app-container">  


              <ChatMessageFrame 
              chatMessages={chatMessages}
              isLoading={isLoading}  
               />


              <ChatInput 
              chatMessages={chatMessages}
              setChatMessages={setChatMessages}
              setIsLoading={setIsLoading} 
              />
          </div>
        ) 

       }

export default AppDisplay
