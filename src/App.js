import './App.css';
import React, { useEffect, useState } from 'react';
import useAxiosGet from './hooks/useAxiosGet';
import api from './services/api';
import Card from './components/Card/card';
import axios from 'axios';
import useAxiosPost from './hooks/useAxiosPost';
<<<<<<< HEAD

=======
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
>>>>>>> afca975aec21d1f49d12d6712ed8f0e358b840f4


function App() {
  const [produtos, setProdutos] = useState([])

  const {dados: getProdutos} = useAxiosGet('/produtos')

  const {dados: getClientes} = useAxiosGet('/clientes')
  
  const [cliente, setCliente] = useState(null)

  const [carrinho, setCarrinho] = useState([])

  // const {dados: resPedidoPost} = useAxiosPost('/pedidos', {idCliente: cliente.id})

  const [pedidoInit, setPedidoInit] = useState()

  useEffect(()=> {
    const postPedido = async (cliente) => {
      const {data} = await api.post('/pedidos', {idCliente: cliente.id})
      setPedidoInit(data)
    }
    postPedido(cliente)

  },[cliente])

  // useEffect(()=> {
  //   const postApi = (idPedido, idProduto) => {

  //   }

  //   const postItemCarrinho()

    
  // },[pedidoInit])


  const adicionarCliente = (nome) => {
    const clienteFilter = getClientes.filter(cliente => cliente.nome === nome)
    if(clienteFilter.length !== 0) {
      setCliente(clienteFilter[0])
    } else {
      return
    }
  }
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
    console.log(produtos)

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
