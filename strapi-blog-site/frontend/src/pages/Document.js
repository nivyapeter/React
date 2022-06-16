import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDocuments } from "../api/api";


function Documents() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    getDocuments(setData, setLoading, setError);
  }, []);
  if (error) return <p>error.....</p>;
  if (loading) return <p>Loading .....</p>;
  console.log(data);

  return (
    <div>
      <h1 className="text-4xl text-black text-center">Documents</h1>
      <div className="flex justify-between flex-wrap flex-row pt-8 gap-y-12">
        {data?.map(({ attributes, id }) => {

          return (
            <div>
              <div
                key={id}
                className="max-w-xs rounded overflow-hidden shadow-lg"
              >
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    {attributes.title}
                  </div>
                  <p className="text-gray-700 text-base">
                    {attributes.description.substring(0, 150)}...
                  </p>
                </div>
                <div className="px-6 pt-2 pb-4">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-base">
                    <Link
                      className="text-white border-0"
                      to={`/details/${id}`}
                    >
                      Read More
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Documents;