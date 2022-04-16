import { useEffect, useState } from "react";

const useServices =()=>{
    const [service,setService]=useState([]);
    

    useEffect(()=>{
        fetch('Services.json')
        .then(res =>res.json())
        .then(data=>{
            // console.log(data);
            setService(data)
        },[])
    
    })
    return [service,setService];
}
export default useServices;