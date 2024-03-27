import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Entry from './Presentation/View/Entry/Entry';
import { NotFoundComponent } from './Presentation/View/Not Found/NotFound';
import Home from './Presentation/View/Home/Home';
import UserContext from './Presentation/Context/UserContext/UserContext';

function App() {
  return (
    <div className="App">
      <UserContext>
        <BrowserRouter>
          <Routes>
            <Route path='/NotFound' Component={NotFoundComponent} />
            <Route path='/Home/*' element={<Home />} />
            <Route path='/*' Component={Entry} />
          </Routes>
        </BrowserRouter>
      </UserContext>
    </div>
  );
}

export default App;
