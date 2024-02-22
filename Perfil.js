import React from 'react';
import '../Estilos/Perfil.css';
import braisImg from '../imagenes/brais.png'; // Importa la imagen directamente
import facundoImg from '../imagenes/facundo.png'; // Importa la imagen directamente
import midudevImg from '../imagenes/midudev.png'; // Importa la imagen directamente

function Perfil(props) {
    return (
        <div>
            <div className='contenedor-perfil'>
                <img className='imagen-perfil'
                    src={braisImg}
                    alt='Foto de desarrollador' />
                <div className='contenedor-texto-perfil'>
                    <p className='nombre-perfil'>
                        <strong>{props.nombre}</strong> en {props.pais}
                    </p>
                    <p className='cargo-perfil'>
                        {props.cargo} en <strong>{props.empresa}</strong>
                    </p>
                    <p className='texto-perfil'>"{props.perfil}" </p>
                </div>
                <button onClick={() => window.open(props.linkedin, '_blank')}>
                    Seguir en LinkedIn
                </button>
                <button onClick={() => window.open(props.youtube, '_blank')}>
                    Seguir en YouTube
                </button>
                <button onClick={() => window.open(props.twitter, '_blank')}>
                    Seguir en Twitter
                </button>
            </div>
        </div>
    );
}

export default Perfil;
