import './App.css';
import React, { useEffect, useState } from 'react';
import useAxiosGet from './hooks/useAxiosGet';
import api from './services/api';
import Card from './components/Card';
import axios from 'axios';
import useAxiosPost from './hooks/useAxiosPost';
import Header from './components/Header/header';


function App() {
  const [produtos, setProdutos] = useState([])

  const {dados: getProdutos} = useAxiosGet('/produtos')

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
    <>
      <Header logarCliente={verificarCliente} clienteLogado={cliente} />
    <div className="App">
     <h1>Escolha algo abaixo para comprar</h1>
     <div className="row row-cols-1 row-cols-md-2 g-4">
     {produtos.map(produto=> 
      <Card key={produto.idProduto} produto={produto} adicionar={adicionarAoCarrinho}></Card>
      )}
      </div>
    </div>
      </>
  );
}

export default App;
