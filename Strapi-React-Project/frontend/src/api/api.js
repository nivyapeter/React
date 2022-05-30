import axios from "axios";

export const getReviewList = async (setData,setLoading) => {
    axios
      .get("http://localhost:1337/api/restaurants", {
        headers: {
            'Content-Type': 'application/json'
        },
      })
      .then((res) => {
        setData(res.data.data);
        setLoading(false);  
      });
  };