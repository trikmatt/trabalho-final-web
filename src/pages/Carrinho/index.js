import Footer from "../../components/Footer/footer"
import Header from "../../components/Header/header"
import { useLocation } from "react-router"
import { useEffect, useState } from "react"
import api from "../../services/api"

const Carrinho = () => {
    const location = useLocation().state
    

    const [comprar, setComprar] = useState(false)

    const [pedido, setPedido] = useState()

    const [carrinho, setCarrinho] = useState()

    const [compras, setCompras] = useState([])


    useEffect(()=> {
        const postApi = async(idPedido, idProduto) => {
            const {data} = await api.post(`/pedidos/item/${idPedido}`, {idProduto: idProduto, quantidadeProduto: 1, valorDesconto: 0})
            
            console.log(data)
           
        }

        if(!!carrinho && !!pedido){
            console.log(carrinho,pedido)
            carrinho.forEach(produto=>postApi(pedido.idPedido, produto.idProduto))
        }
    
  },[comprar])

    useEffect(()=>{
        if(location[0].length !== 0) {
            setCarrinho(location[0])
        }
        if(!!location[1]) {
            setPedido(location[1])
        }
    },[location])

    return (
        <>
        <Header/>
            <ul class="list-group">
                {location && location[0].map((produto, index) => <li class="list-group-item" key={index}>{produto.nomeProduto}<br/> Valor: R${produto.valorUnitario}
                    </li>)}
            </ul>
            <br />
            <button onClick={()=> setComprar(true)} type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
  Confirmar compra!
</button>
        <Footer/>
        </>
    )
}

export default Carrinho