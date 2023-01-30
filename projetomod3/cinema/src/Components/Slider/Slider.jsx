import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import "./Carousel.css"

function Slider() {
  return (
    <div className='Carousel-parent'>
      <Carousel style={{ height: "50vh" }}>
        <Carousel.Item interval={3000}>
          <div className='bloco'>
            <h1>Top Gun: Maverick</h1>
            <p>Mais vendido</p>
          </div>
          <img
            src="https://catv.com.br/wp-content/uploads/2022/05/capa-1-750x350.jpg"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <div className='bloco'>
            <h1>M3gan</h1>
            <p>Sessão começando agora</p>
          </div>
          <img
            src="https://www.einerd.com.br/wp-content/uploads/2022/10/M3GAN-890x466.jpg"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <div className='bloco'>
            <h1>Gato de Botas 2: o Último Pedido</h1>
            <p>Lançamento</p>
          </div>
          <img
            src="https://pipocasclub.com.br/wp-content/uploads/2022/12/ogatodebotas2pipocasclub.png"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
