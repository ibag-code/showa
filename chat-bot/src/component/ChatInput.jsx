import { useState} from 'react'
import {Chatbot} from 'supersimpledev'






//Input Component
export function ChatInput({ chatMessages, setChatMessages, setIsLoading }) {
    
    const [inputText, setInputText] = useState("");
    // const inputText = theInputTextArray[0];
    // const setInputText = theInputTextArray[1];

 

    function saveInputText (event) {
    setInputText (event.target.value)
    } 



    async function sendMessage () {
    if (inputText.trim() === '') {
    return;
    }

    const newChatMessages =  [
        ...chatMessages,
        {
        id: crypto.randomUUID(),
        message: inputText ,
        sender: "user"
        }
    ]

    setChatMessages(newChatMessages)
    setIsLoading(true);



    const botResponce = await Chatbot.getResponseAsync(inputText)

    setChatMessages([
        ...newChatMessages,
        {
        id: crypto.randomUUID(),
        message: botResponce ,
        sender: "robot"
        }
    ])

    setIsLoading(false) 
    setInputText('');
    }


    function TheEnter (event) {
    if (event.key ==="Enter") {
        sendMessage()
        setInputText('')
    }

    if (event.key === "Escape") {
        // alert("Escape text")
        setInputText('');

        ;
    }
    }


    return (
    <div className="chat-container">
        <input 
        className = "input-field "
        type="text" 
        placeholder="Send a message to Chatbot"  
        size= "50" 
        onChange={saveInputText }
        onKeyDown = {TheEnter}
        value = {inputText}  //controlled input
        
        />
        <button 
        onClick = {sendMessage}
        className = "send-button"
        > 
        Send </button>
    </div>
    );
}