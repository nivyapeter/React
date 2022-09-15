import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
// import { getRestDetails } from "../api/api";
import data from "../Data/data";

function DocumentDetails() {
  console.log(data);
  //   const[restData,setRestData] = useState();
  const { id } = useParams();

  // useEffect(()=> {
  //   getRestDetails(setRestData,id)
  // },[])
  return (
    <div className="flex justify-between flex-wrap flex-row pt-8 gap-y-12">
      {data?.map((data,id) => {
        console.log(data)
        return (
          <div>
            <div className="max-w-xs rounded overflow-hidden shadow-lg" key={id}
            >
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{data.title}</div>
                <p className="text-gray-700 text-base">{data.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DocumentDetails;
