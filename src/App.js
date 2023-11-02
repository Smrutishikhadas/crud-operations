
import './App.css';
import Create from './Components/Create';
import Read from './Components/Read';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Update from './Components/Update';


function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route exact path ="/" element={ <Create/>}> </Route>
          <Route exact path ="/read" element={ <Read/>}> </Route>
          <Route exact path ="/update" element={ <Update/>}> </Route>
        </Routes>
      </BrowserRouter>
   
     
    </div>
  );
}

export default App;
