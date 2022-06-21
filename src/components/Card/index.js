import { useEffect, useState } from 'react'
import { BsCartPlusFill } from 'react-icons/bs'
import useAxiosPost from '../../hooks/useAxiosPost'

const Card = ({ produto, adicionar, cliente, idPedido}) =>{  



    const pedido = (idproduto) => {
      adicionar(produto.idProduto)
    }

    

    return(
        <div className="col">
          <div className="card">
            <img src="..." className="card-img-top" alt=""/>
            <div className="card-body">
              <h5 className="card-title">{produto.nomeProduto}</h5>
              <p className="card-text">Valor unitário: {produto.valorUnitario}</p>
              <button value={produto.idProduto} type='button' onClick={(e)=> pedido(e.target.value)}>Comprar!<BsCartPlusFill/></button>
            </div>
          </div>
        </div>
    )
}

export default Card