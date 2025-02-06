import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Intercambio from './Components/Pages/Intercambio';
import Caracteristicas from './Components/Pages/Caracteristicas';
import PerguntasFrequentes from './Components/Pages/PerguntasFrequentes';
import NavBar from './Components/Layouts/NavBar';
import ConectarCarteira from './Components/Pages/ConectarCarteira';
import Rodape from './Components/Layouts/Rodape';

import Container from './Components/Layouts/Container';

function App() {
    return(
      <div className="App">
           <Router>
              <NavBar/>
              <Container CustomClasse="minHeight">
                  <Routes>
                       <Route path="/" element={<Home/>}/>
                       <Route path="/intercambio" element={<Intercambio/>}/>
                       <Route path="/caracteristicas" element={<Caracteristicas/>}/>
                       <Route path="/perguntasfrequentes" element={<PerguntasFrequentes/>}/>
                       <Route path="/conectarcarteira" element={<ConectarCarteira/>}/>
                  </Routes>
              </Container>
              <Rodape/>
            </Router>
      </div>
    )
}

export default App;