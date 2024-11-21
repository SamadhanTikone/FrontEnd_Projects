import { useState , useEffect } from "react";




export default function useFetch(url) {

    const [data,setData] = useState();

  const[loading, setLoading] = useState(true)
  const[error, setError] = useState(null)

    useEffect(()=>{
    
        setTimeout(()=>{
          fetch(url)
          .then(res=> {
            if(!res.ok){
              throw Error(" ❌ Could not Connect with Resources")
            }
              return res.json() })
          .then((data)=> {
            setData(data) 
            setLoading(false)
          })
          .catch((e)=>{
            
            setError(e.message)
            setLoading(false)
          })
        },1000)

        
          
    
       },[])


  return { data,loading ,setData, error}
}
