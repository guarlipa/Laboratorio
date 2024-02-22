import React, { useState } from 'react';
import './App.css';
import Perfil from './Componentes/Perfil';
import PerfilB from './Componentes/PerfilB';
import PerfilC from './Componentes/PerfilC';
import Contador from './Componentes/Contador';

function App() {
  const [contador, setcontador] = useState(0);
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Mis desarrolladores favoritos son</h1>
        <Perfil
          nombre='Brais Moure'
          pais='España'
          imagen='brais'
          cargo='Ingeniero de Software'
          empresa='MoureDev'
          perfil='Es un Youtuber español, es el fundador de la empresa de desarrollo de software MoureDev'
          linkedin='https://www.linkedin.com/in/braismoure/'
          youtube='https://www.linkedin.com/in/braismoure/'
          twitter='https://www.linkedin.com/in/braismoure/'
        />
        <PerfilB
          nombre='Facundo Giuliani'
          pais='Argentina'
          imagen='facundo'
          cargo='Desarrollador Web'
          empresa='Freelance'
          perfil='Desarrollador web autodidacta con experiencia en diversas tecnologías web.'
          linkedin='https://www.linkedin.com/in/facundo-giuliani/'
          youtube='https://www.youtube.com/c/FacundoGiulianiDev'
          twitter='https://twitter.com/facundogt'
        />
        <PerfilC
          nombre='Midudev'
          pais='España'
          imagen='midudev'
          cargo='Ingeniero de Software'
          empresa='Midudev'
          perfil='Desarrollador web y creador de contenido en YouTube sobre tecnología.'
          linkedin='https://www.linkedin.com/in/midudev/'
          youtube='https://www.youtube.com/c/Midudev/'
          twitter='https://twitter.com/midudev'
        />
        <Contador contador={contador} setcontador={setcontador} />
      </div>
    </div>
  );
}

export default App;
