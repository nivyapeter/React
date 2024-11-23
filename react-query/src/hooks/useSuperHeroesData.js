import axios from "axios";
import { useQuery } from "react-query"

const fetchSuperHeroes = () => {
    return axios.get("http://localhost:8000/users");
}

export const useSuperHeroesData = (onSuccess,onError) => {
    return useQuery('super-heroes', fetchSuperHeroes, {
        onSuccess,
        onError,
        select: (data) => {
          const superHeroes = data?.data.map((hero) => hero.name);
          return superHeroes
        }
    })
}