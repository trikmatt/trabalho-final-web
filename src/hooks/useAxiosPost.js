import { useState, useEffect } from "react"
import api from "../services/api"

const useAxiosPost = (endpoint, body) => {
    const [dados, setDados] = useState(null)

    useEffect(()=>{
        const fetchData = async () => {
            const {data} = await api.post(endpoint, body)
            setDados(data)
            console.log(data)
        }
        fetchData()
    },[endpoint])

    return { dados }
} 

export default useAxiosPost