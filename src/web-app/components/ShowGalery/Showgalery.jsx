import React, { useState, useEffect } from 'react';

import obtenerImagenUrl from "../../firebase/config"; // Ajusta la ruta

 const Showgalery = () => {

  const [img1, setImg1] = useState('');
  const [img2, setImg2] = useState('');
  const [img3, setImg3] = useState('');

  useEffect(() => {
    const cargarImagenes = async () => {
      const url1 = await obtenerImagenUrl("pentax/Foto 1 - Cataras del Niagara.png");
      const url2 = await obtenerImagenUrl("pentax/Foto 2 - Guitarra.png");
      const url3 = await obtenerImagenUrl("pentax/Foto 3 - Girasoles.png");

      setImg1(url1);
      setImg2(url2);
      setImg3(url3);
    };

    cargarImagenes().catch(console.error);
  }, []);
  return (
    <div className='img-container-galery'>
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />



    </div>
  )
}
export default Showgalery;