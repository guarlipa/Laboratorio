import React from 'react';
import '../Estilos/Perfil.css';
import facundoImg from '../imagenes/facundo.png'; // Importa la imagen directamente

function PerfilB(props) {
    return (
        <div className='contenedor-perfil'>
            <img className='imagen-perfilB'
                src={facundoImg}
                alt='Foto de desarrolladorB' />
            <div className='contenedor-texto-perfilB'>
                <p className='nombre-perfilB'>
                    <strong>{props.nombre}</strong> en {props.pais}
                </p>
                <p className='cargo-perfilB'>
                    {props.cargo} en <strong>{props.empresa}</strong>
                </p>
                <p className='texto-perfilB'>"{props.perfil}" </p>
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
    );
}

export default PerfilB;
