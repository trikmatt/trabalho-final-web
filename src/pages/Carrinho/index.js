import Footer from "../../components/Footer/footer"
import Header from "../../components/Header/header"
import { useLocation } from "react-router"

const Carrinho = () => {
    const location = useLocation().state

    return (
        <>
        <Header/>
            <ul>
                {location && location.map((produto, index) => <li key={index}>{produto.nomeProduto}</li>)}
            </ul>
        <Footer/>
        </>
    )
}

export default Carrinho