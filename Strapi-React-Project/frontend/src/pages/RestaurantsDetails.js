import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getRestDetails } from "../api/api";

function RestaurantsDetails() {
  const[restData,setRestData] = useState([]);
  const{id} = useParams()

useEffect(()=> {
  getRestDetails(setRestData,id)
},[])
console.log(restData);
  return (
    <div className="flex justify-between flex-wrap flex-row pt-8 gap-y-12">
            {/* <img
              className="w-full "
              src={`http://localhost:1337${attributes.Image.data.attributes.url}`}
            /> */}
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                {restData.Name}
              </div>
              <p className="text-gray-700 text-base">
                {restData.description}
              </p>
            </div>
  </div>
  );
}

export default RestaurantsDetails;
