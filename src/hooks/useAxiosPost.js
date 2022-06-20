import { useState, useEffect } from "react"
import api from "../services/api"

const useAxiosPost = (endpoint) => {
    const [dados, setDados] = useState(null)

    useEffect(()=>{
        const fetchData = async () => {
            const {data} = await api.post(endpoint,  {idProduto: 1, quantidadeProduto: 1, valorDesconto: "0"},{ headers: {
                'Content-Type': 'application/json'}
            })
            setDados(data)
            console.log(data)
        }
        fetchData()
    },[endpoint])

    return { dados }
} 

export default useAxiosPost