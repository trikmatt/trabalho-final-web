import './App.css';
import React, { useEffect, useState } from 'react';
import useAxiosGet from './hooks/useAxiosGet';
import api from './services/api';
import Card from './components/Card';


function App() {
  const [produtos, setProdutos] = useState([])

  const {dados} = useAxiosGet('/produtos')

  useEffect(()=>{
    if(!dados) return
    setProdutos(dados)

  },[dados])

  return (
    <div className="App">
     <h1>Escolha algo abaixo para comprar</h1>
     <div className="row row-cols-1 row-cols-md-2 g-4">
     {produtos.map(produto=> 
      <Card key={produto.idProduto} produto={produto}></Card>
     )}
      </div>
    </div>
  );
}

export default App;
