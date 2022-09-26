
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import React  from 'react';

import { ConversationProvider } from './components/context/ConversationProvider';
import ChatMain from './components/ChatMain';


function App() {

  return (
    <ConversationProvider>

      <ChatMain />
             
    </ConversationProvider>
  );
}

export default App;
