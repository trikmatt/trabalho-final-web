import { BsCartPlusFill } from 'react-icons/bs';
import './card.css'



const Card = ({ produto, adicionar }) =>{
  const inserirImagem = (nomeProduto) => {
    const imagem = null
    switch (nomeProduto) {
      case "Arruela": imagem = '../../public/img/arruelas.png'; break;
      case "Porca": imagem = '../../public/img/porca.png'; break;
      case "Bucha": imagem = '../../public/img/buchas.png'; break;
      case "Barra rosqueada": imagem = '../../public/img/barra-roscada.png'; break;
      case "Parafuso": imagem = '../../public/img/parafuso.png'; break;
      case "Chave de Fenda": imagem = '../../public/img/Chave-de-fenda.png'; break;
      case "Broca": imagem = '../../public/img/brocas.png'; break;
      default: console.log('nenhuma imagem selecionada');
    }
    return imagem
  }

    return(
        <div className="card-body">
          <div className="card ">
            <img src='../../../public/img/arruelas.png' className="card-img-top1" alt="colher"/>
            <div className="card">
              <h4 className="card-title">{produto.nomeProduto}</h4>
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