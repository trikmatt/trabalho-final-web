import { useState, useEffect } from "react"
import api from "../services/api"

const useAxiosGet = (endpoint) => {
    const [dados, setDados] = useState(null)

    useEffect(()=>{
        const fetchData = async () => {
            const {data} = await api.get(endpoint)
            setDados(data)
            // console.log(data)
        }
        fetchData()
    },[endpoint])

    return { dados }
} 

export default useAxiosGet