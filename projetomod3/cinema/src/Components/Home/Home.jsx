import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';
import Bar from '../Filmes/Bar'
import Footer from '../Footer'
import Header from '../Header'
import Items from '../Items/Items'
import Slider from '../Slider/Slider'
import axios from 'axios';

function Home() {
  let [lista, setLista] = useState([]);

  useEffect(() => {
    let url = 'http://localhost:3000/filmes';

    const getPosts = async () => {
      const { data: res } = await axios.get(url);
      setLista(res);
    };
    getPosts();

  }, []);


  return (
    <div>
      <Header />
      <Slider />
      <Bar />
      <Items lista={lista} />
      <Footer />
    </div>
  )
}

export default Home
