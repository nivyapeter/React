import React from "react";
import { Link } from "react-router-dom";
// import { getDocuments } from "../api/api";
import data from "../Data/data";

function Documents({id}) {
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(true);

  // useEffect(() => {
  //   getDocuments(setData, setLoading, setError);
  // }, []);
  // if (error) return <p>error.....</p>;
  // if (loading) return <p>Loading .....</p>;
  return (
    <div>
      <h1 className="text-4xl text-black text-center mt-8">Technical Documents</h1>
      <div className="flex justify-center flex-wrap flex-row pt-8 gap-8">
        {data?.map((data) => {

          return (
            <div>
              <div
                className="max-w-xs rounded overflow-hidden shadow-lg"
              >
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    {data.title}
                  </div>
                  <p className="text-gray-700 text-base">
                    {data.description.substring(0, 150)}...
                  </p>
                </div>
                <div className="px-6 pt-2 pb-4">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-base">
                    <Link
                      className="text-white border-0"
                      to={`/details/${data.id}`}
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