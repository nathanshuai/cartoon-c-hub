import './style/index.css'
import Catalog from './components/Catalog';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';
import New from './components/New';
import { Routes, Route } from 'react-router-dom';

function App() {
  
return (
   <>
   <main>
        <Routes>
            <Route exact path="/cartoon-c-hub" element={<Catalog  />}/>
            <Route exact path="/detail/:objectId" element={<Detail />}/>
            <Route exact path="/new" element={<New />}/>
            <Route exact path="*" element={<NotFound />} />
        </Routes>
   </main>
   </>
 );
}

export default App; 
