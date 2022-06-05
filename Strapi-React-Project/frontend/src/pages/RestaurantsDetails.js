import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getRestDetails } from "../api/api";

function RestaurantsDetails() {
  const[restData,setRestData] = useState();
  const{id} = useParams()

useEffect(()=> {
  getRestDetails(setRestData,id)
},[])
  return (
    <div className="flex justify-between flex-wrap flex-row pt-8 gap-y-12">
    {restData?.map(({ attributes, id }) => {
      return (
        <div>
          <div
            key={id}
            className="max-w-xs rounded overflow-hidden shadow-lg"
          >
            {/* <img
              className="w-full "
              src={`http://localhost:1337${attributes.Image.data.attributes.url}`}
            /> */}
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                {attributes.Name}
              </div>
              <p className="text-gray-700 text-base">
                {attributes.description}
              </p>
            </div>
          </div>
        </div>
      );
    })}
  </div>
  );
}

export default RestaurantsDetails;
