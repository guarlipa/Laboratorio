import React from 'react';
import '../Estilos/Perfil.css';
import midudevImg from '../imagenes/midudev.png'; // Importa la imagen directamente

function PerfilC(props) {
    return (
        <div className='contenedor-perfil'>
            <img className='imagen-perfilC'
                src={midudevImg}
                alt='Foto de desarrolladorC' />
            <div className='contenedor-texto-perfilC'>
                <p className='nombre-perfilC'>
                    <strong>{props.nombre}</strong> en {props.pais}
                </p>
                <p className='cargo-perfilC'>
                    {props.cargo} en <strong>{props.empresa}</strong>
                </p>
                <p className='texto-perfilC'>"{props.perfil}" </p>
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

export default PerfilC;
