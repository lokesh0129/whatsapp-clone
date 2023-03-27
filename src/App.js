import './App.css';
import { Chat } from './components/Chat';
import SideBar from './components/SideBar';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import Login from './components/Login';
import { useStateValue } from './components/StateProvider';

function App() {
  const [{user} , dispatch] = useStateValue()
   
  return (
    <div className="app">
      {!user ? <Login />:(
      <div className="app__body">
        <Router>
         <SideBar />
         <Switch>
            <Route path="/rooms/:roomId">
              <Chat />
            </Route>
            <Route  path="/">
              <Chat />
            </Route>
         </Switch>
        </Router>
         
      </div>
      )}
     </div>
  );
}

export default App;
