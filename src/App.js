import './App.css';
import React, { useEffect, useState } from 'react';
import useAxiosGet from './hooks/useAxiosGet';
import api from './services/api';
import Card from './components/Card/card';
import axios from 'axios';
import useAxiosPost from './hooks/useAxiosPost';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Router from './Routes';


function App() {
  const [produtos, setProdutos] = useState([])

  

  // const {dados: getProdutos} = useAxiosGet('/produtos')

  const {dados: getClientes} = useAxiosGet('/clientes')

  const {dados: getCategorias} = useAxiosGet('/categorias')
  
  const [cliente, setCliente] = useState(null)

  const [categorias, setCategorias] = useState()

  const [carrinho, setCarrinho] = useState([])

  // const {dados: resPedidoPost} = useAxiosPost('/pedidos', {idCliente: cliente.id})

  const [pedidoInit, setPedidoInit] = useState()

  useEffect(()=> {
    console.log(cliente)
    const postPedido = async (cliente) => {
      const {data} = await api.post('/pedidos', {idCliente: cliente.id})
      console.log(data)
      setPedidoInit(data)
    }
    postPedido(cliente)

  },[cliente])

  // useEffect(()=> {
  //   const postApi = async(idPedido, idProduto) => {
  //     const {data} = await api.post(`/pedidos/${idPedido}`)
  //   }

  //   const postApi()

    
  // },[pedidoInit])

  const pegarProdutosPorCategoria = async (idCategoria) => {
      const {data} = await api.get(`/categorias/${idCategoria}/produtos`)
      setProdutos(data)
      console.log(data)
  }


  const logarCliente = (nome) => {
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


  // useEffect(()=>{
  //   if(!getProdutos) return
  //   setProdutos(getProdutos)
  //   console.log(produtos)

  // },[getProdutos])

  useEffect(()=> {
    if(!getCategorias) return
    setCategorias(getCategorias)
    console.log(categorias)
  },[getCategorias])

  return (
    <>
      <Header logarCliente={logarCliente} clienteLogado={cliente} carrinho={carrinho} pedido={pedidoInit} />
        <div className="App">
          <h1>Escolha algo abaixo para comprar</h1>
          <ul>
            <li><button type="button" onClick={()=>pegarProdutosPorCategoria(1)} class="btn btn-primary">{categorias && categorias[0].categoria}</button></li>
            <br />
            <li><button type="button" onClick={()=>pegarProdutosPorCategoria(2)} class="btn btn-success">{categorias && categorias[1].categoria}</button></li>
            <br />
            <li><button type="button" onClick={()=>pegarProdutosPorCategoria(3)} class="btn btn-warning">{categorias && categorias[2].categoria}</button></li>
          </ul>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {produtos.map(produto=> 
              <Card key={produto.idProduto} produto={produto} adicionar={adicionarAoCarrinho} cliente={cliente}></Card>
            )}
          </div>
        </div>
        <Footer />
      </>
  );
}

export default App;
