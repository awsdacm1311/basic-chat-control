import { createSlice } from '@reduxjs/toolkit'

const initialState =  {selectedChat:"",
    chats:[
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
  ]};


const chatSlice = createSlice({
    name: 'chats',
    initialState,
    reducers: {
      addNewChat(state, action){
        state.chats.push(action.payload);
        state.selectedChat=action.payload.name;

      },
      addNewMessage(state, action){
        state.chats.map(chat => {
            if(chat.name ===action.payload.chatname){
                return  {...chat, messages: chat.messages.push(action.payload.message)};
            }
            return chat;
        })
      }, 
      selectChat:(state, action)=>{
        return {...state, selectedChat: action.payload};
      },

    },
  });

export const { addNewChat, addNewMessage,selectChat } = chatSlice.actions;

export default chatSlice.reducer;