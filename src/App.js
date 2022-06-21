import './App.css';
import React, { useEffect, useState } from 'react';
import useAxiosGet from './hooks/useAxiosGet';
import api from './services/api';
import Card from './components/Card/card';
import axios from 'axios';
import useAxiosPost from './hooks/useAxiosPost';



function App() {
  const [produtos, setProdutos] = useState([])

  const {dados: getProdutos} = useAxiosGet('/produtos')
    console.log(getProdutos)

  const {dados: getClientes} = useAxiosGet('/clientes')
  
  const {dados: postPedido} = useAxiosPost('/pedidos/item/1')

  const [cliente, setCliente] = useState(null)

  const [carrinho, setCarrinho] = useState([])

  const verificarCliente = (nome) => {
    const cliente = getClientes.filter(cliente => cliente.nome === nome)
    if(cliente.length !== 0) {
      setCliente(cliente[0])
    }
  }
  useEffect(()=> {
    console.log(cliente)
  },[cliente])


  const adicionarAoCarrinho = (id) => { 
    const produto = produtos.filter(produto=>produto.idProduto === id)
    setCarrinho([...carrinho, produto[0]])
  }

  useEffect(()=>{
    if(carrinho.length === 0) return
    console.log(carrinho)
  },[carrinho])


  useEffect(()=>{
    if(!getProdutos) return
    setProdutos(getProdutos)

  },[getProdutos])

  return (   
      
    <div className="App">
      <div className='Titulo'>
        <h1>Escolha um de nossos produtos</h1>
        <h2>Adicione ao seu carrinho</h2>
      </div >        
     <div className="row row-cols-md-2" id='pv'>
     {produtos.map((produto)=><Card key={produto.idProduto} produto={produto} adicionar={adicionarAoCarrinho}/>)}
        </div>      
    </div>
     
  );
}

export default App;
