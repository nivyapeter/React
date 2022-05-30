import React, { useEffect, useState } from "react";
import { getReviewList } from "../api/api";
import useFetch from "../hooks/useFetch";

function Restaurants() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getReviewList(setData, setLoading);
  }, []);
  if (loading) return <p>Loading .....</p>;

  return (
    <div>
      <h1 classNameName="text-center text-4xl text-black">Restaurants</h1>
      <div className="flex items-center justify-between flex-wrap min-h-[40vh">
      {data?.map(({ attributes, id }) => {
        console.log(attributes);
        return (
          <div>
          <div key={id} className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={attributes.Image} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{attributes.Name}</div>
              <p className="text-gray-700 text-base">{attributes.description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"></span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"></span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"></span>
            </div>
          </div>
          </div>
        );
      })}
      </div>
    </div>
  );
}

export default Restaurants;
