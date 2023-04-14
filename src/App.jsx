import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Contact from './Contact';
import Event from '/src/Event';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={< Layout/>}>
          <Route index element={< Home/>}></Route>
          <Route path='Contact' element={< Contact/>}></Route>
          <Route path='Event' element={< Event/>}></Route>
          <Route path='*' element={<page404/>}></Route>
        </Route>        
      </Routes>
    </BrowserRouter>
  );
 }

export default App