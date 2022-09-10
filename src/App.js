
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ChatMain from './components/ChatMain';

const user = "daniel"


function App() {


  return (
    <ChatMain user={user}/>
  );
}

export default App;
