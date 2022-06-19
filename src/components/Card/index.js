import { BsCartPlusFill } from 'react-icons/bs'

const Card = ({ produto }) =>{
    return(
        <div className="col">
          <div className="card">
            <img src="..." className="card-img-top" alt=""/>
            <div className="card-body">
              <h5 className="card-title">{produto.nomeProduto}</h5>
              <p className="card-text">Valor unitário: {produto.valorUnitario}</p>
              <button type='button'>Comprar!<BsCartPlusFill/></button>
            </div>
          </div>
        </div>
    )
}

export default Card