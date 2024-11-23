import React from "react";
// import { useQuery } from "react-query";
// import axios from "axios";
import { useSuperHeroesData } from "./hooks/useSuperHeroesData";

const SuperHeroes = () => {
  const onSuccess = () => {
    console.log('Perform side effects after data fetching');
  }

  const onError = () => {
    console.log('Perform side effect after encountering error');
    
  }
  // const fetchSuperHeroes = () => {
  //   return axios.get("http://localhost:8000/users");
  // }

  const { isLoading, isError, error, data, refetch } = useSuperHeroesData(onSuccess,onError)

  if (isLoading) {
    return <h2>Loading....</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>
  }

  console.log({data});
  

  return (
    <>
      <h2>SuperHeroes</h2>
      <button onClick={refetch}>click</button>
      {data.map((value,index) => {
        return <div key={`${value.name} - ${index}`}>{value}</div>;
      })}
    </>
  );
};

export default SuperHeroes;
