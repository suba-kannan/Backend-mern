import React, { useEffect, useState } from 'react'

const useFetchapi = (url) => {

    const [datasave,setDatasave] = useState([])

    useEffect(()=>{
        const fetchapi = async()=>{
        try{

            const res = await fetch(url)
            const datas = await res.json()
            setDatasave(datas)

        }catch(error){
            console.log(error);
            alert("error",error.message)
            
        }
    }
    fetchapi()
    },[])


  return {datasave}
}

export default useFetchapi