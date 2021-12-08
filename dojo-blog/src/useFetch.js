// import React from "react";
import { useEffect, useState } from "react";

const useFetch=(url) => {
    const [data, setData] = useState(null);
    const[isPending,setPending] = useState(true);
    const [error,setError] = useState(null);
    
    useEffect(() => {
            setTimeout(() => {
            fetch(url)
            .then(res => {
                if(!res.ok){
                throw Error('could not fetch the data for that responce')
                }
                return res.json();
            })
            .then(data => {
                console.log(data);
                setData(data);
                setPending(false);
            })
            .catch((err => {
                setError(err.message);
                setPending(false);
            }))
            },1000);
            return () => console.log("clean up")
        }, [url] );
    return {data,isPending,error}
}

export default useFetch;