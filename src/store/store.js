import { configureStore } from '@reduxjs/toolkit'

import chats from './chatsreducer';


export default configureStore({
  reducer:{
    chat_reducer: chats
  }
})