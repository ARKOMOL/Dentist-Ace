import { useEffect, useState } from "react";

const useTestmonial =()=>{
    const [testmonial,setTestmonial]=useState([]);
    

    useEffect(()=>{
        fetch('testmonial.json')
        .then(res =>res.json())
        .then(data=>{
            // console.log(data);
            setTestmonial(data)
        },[])
    
    })
    return [testmonial,setTestmonial];
}
export default useTestmonial;