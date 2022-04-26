import './App.css';
import { SocketContext, socket } from './context/socketContext';

function App() {

  return (
    <SocketContext.Provider value={socket}>
    <div className="App">
      ASD
    </div>
    </SocketContext.Provider>
  );
}

export default App;
