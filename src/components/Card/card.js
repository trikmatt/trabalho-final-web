import { BsCartPlusFill } from 'react-icons/bs';
import './card.css'


const Card = ({ produto, adicionar }) =>{
    return(
        <div className="card-body">
          <div className="card ">
            <img src='./img/Colher.png' className="card-img-top1" alt="colher"/>
            <div className="card">
              <h5 className="card-title">{produto.nomeProduto}</h5>
              <p className="card-text">Valor unitário: {produto.valorUnitario}</p>
              <button type='btn btn-sm btn-outline-danger ms-2' onClick={()=>adicionar(produto.idProduto)}>
              <div className='d-flex1'>
                <BsCartPlusFill className='me-1'/>
                Adicionar ao carrinho 
              </div>
              </button>
            </div>
          </div>
        </div>
    )
}

export default Card;