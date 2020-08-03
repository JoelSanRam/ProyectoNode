import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Acercade(props) {
  return (
    <>
    <div className="back-to-result">
    <Link to="/">Regresar</Link>
    </div>
    <h1 className="acerca">Acerca De</h1>
    <section class="questions contenedor">
    <section class="textos-questions">
    
        <h1>Misión</h1>
        <p>Aprovechar la tecnología y la experiencia de nuestros usuarios para ofrecer un servicio de calidad</p>
        
    </section>
        <img src="https://chpeti20182916533home.files.wordpress.com/2019/03/mision.png?w=640" alt="" height="200" height="200"/>
    </section>
    <section class="questions contenedor">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTs-1Pxlx9cyD5wIOy2f7gVXMyXGxSE1YTPZw&usqp=CAU" alt="" height="200" height="200"/>
    <section class="textos-questions">

        <h1>Visión</h1>
        <p>Ser la empresa líder en creación y venta de manuales para poder aprender nuevas tecnologías</p>
        
    </section>
        
    </section>
    <section class="questions contenedor">
    <section class="textos-questions">

        <h1>¿Quiénes somos?</h1>
        <p>Somos una empresa yucateca que brinda manuales para el aprendizaje de nuestros usuarios</p>
        
    </section>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRD720TN-O-a3gGos752h5RPKRl66MtW44lBg&usqp=CAU" alt="" height="200" height="200"/>
    </section>
</>
  );
}

export default Acercade;