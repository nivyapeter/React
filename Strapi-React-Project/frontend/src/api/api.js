import axios from "axios";

export const getReviewList = async (setData,setLoading,setError) => {
    axios
      .get("http://localhost:1337/api/restaurants?populate=*", {
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
  export const getRestDetails = async (setRestData,id) => {
    axios
      .get(`http://localhost:1337/api/restaurants/${id}`, {
        headers: {
            'Content-Type': 'application/json'
        },
      })
      .then((res) => {
        setRestData(res.data.data.attributes);
      });
  };