// import React from "react";
import { useEffect, useState } from "react";

const useFetch=(url) => {
    const [data, setData] = useState(null);
    const[isPending,setPending] = useState(true);
    const [error,setError] = useState(null);
    
    useEffect(() => {
        const abortConst = new AbortController();
            setTimeout(() => {
            fetch(url, {signal: abortConst.signal })
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
                if (err.name === 'AbortError') {
                    console.log("fetch aborted")
                } else {
                    setError(err.message);
                    setPending(false);

                }
                
            }))
            },1000);
            return() => abortConst.abort();
        }, [url] );
    return {data,isPending,error}
}

export default useFetch;