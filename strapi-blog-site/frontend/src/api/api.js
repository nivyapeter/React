import axios from "axios";

export const getDocuments = async (setData,setLoading,setError) => {
    axios
      .get("http://localhost:1337/api/documents", {
        headers: {
            'Content-Type': 'application/json'
        },
      })
      .then((res) => {
        setData(res.data.data);
        setLoading(false);  
        setError(false);
      });
  };