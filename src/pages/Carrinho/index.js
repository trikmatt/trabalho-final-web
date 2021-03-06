import { useLocation } from "react-router"
import { useEffect, useState } from "react"
import api from "../../services/api"

const Carrinho = () => {
    const location = useLocation().state


    const [comprar, setComprar] = useState(false)

    const [pedido, setPedido] = useState()

    const [carrinho, setCarrinho] = useState()

    const [compras, setCompras] = useState([])


    useEffect(() => {
        const postApiAdicionar = async (idPedido, idProduto) => {
            const { data } = await api.post(`/pedidos/item/${idPedido}`, { idProduto: idProduto, quantidadeProduto: 1, valorDesconto: 0 })

            console.log(data)

        }
        const postApiFinalizar = async (idPedido) => {
            const { data } = await api.post(`/pedidos/${idPedido}`, { codigoPagamento: 1 })

            console.log(data)

        }

        if (!!carrinho && !!pedido) {
            console.log(carrinho, pedido)
            carrinho.forEach(produto => postApiAdicionar(pedido.idPedido, produto.idProduto))
            const pedidoFinalizado = postApiFinalizar(pedido.idPedido)
            console.log(pedidoFinalizado)
        }


    }, [comprar])

    useEffect(() => {
        if (location[0].length !== 0) {
            setCarrinho(location[0])
        }
        if (!!location[1]) {
            setPedido(location[1])
        }
    }, [location])

    return (
        <>

            <ul class="list-group">
                {location && location[0].map((produto, index) => <li class="list-group-item" key={index}>{produto.nomeProduto}<br /> Valor: R${produto.valorUnitario}
                </li>)}
            </ul>
            <br />
            <button onClick={() => setComprar(true)} type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
                Confirmar compra!
            </button>

        </>
    )
}

export default Carrinho