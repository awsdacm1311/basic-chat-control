import {useState} from 'react';
import {ConversationContext} from './ConversationContext';

export const ConversationProvider = ({children}) => {

    const [chats, setChats] = useState([
        {
          name: "Chat 1 con juan",
          messages: [
            {
              username:"juan",
              text: "hello hello"
            },
            {
              username:"daniel",
              text: "que chevere"
            }
          ]
        },
        {
          name: "Chat 2 con Carlos",
          messages: [
            {
              username:"carlos",
              text: "bien o no"
            },
            {
              username:"daniel",
              text: "super"
            }
          ]
        },
        {
          name: "Chat 3 con Felipe",
          messages: [
            {
              username:"felipe",
              text: "bogota es bacana"
            },
            {
              username:"daniel",
              text: "ahi se va"
            }
          ]
        }
      ]);
    const [messages, setMessages] = useState([]);
    const [chatName, setChatName] = useState("");
    const [user, setUser] = useState("daniel");


    const addMessages = (newMessagesArr) =>{
        setMessages(newMessagesArr);
    
        let Index = chats.findIndex(p=> p.name===chatName);
        chats[Index].messages = newMessagesArr;
      } 

      
    const setChat = (chName) =>{
        let chat = chats.filter(p=> p.name===chName);
        setMessages(chat[0].messages);
        setChatName(chName);
      }

    return (
        <ConversationContext.Provider value={{chats, setChats, setChat, messages, addMessages, chatName, setChatName, user, setUser}}>
            {children}
        </ConversationContext.Provider>
    )
}