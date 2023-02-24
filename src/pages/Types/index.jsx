import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import List from "../../components/List";
import Header from "../../components/Header";

const Types = () => {
  const [pokemons, setPokemons] = useState([]);
  const [nextPage, setNextPage] = useState();
  const [isLoading, setIsLoading] = useState();
  const { type } = useParams();

  const fetchData = async (url) => {
    setIsLoading(true);

    //

    // setNextPage(data?.next);
    setIsLoading(false);
  };

  useEffect(() => {
    if (!type) return;
    axios.get(`https://pokeapi.co/api/v2/type/${type}`).then((response) => {
      const list = response?.data?.pokemon?.map((item) => {
        return { ...item.pokemon };
      });
      setPokemons(list);
    });
    // fetchData(`https://pokeapi.co/api/v2/type/${type}`);
  }, [type]);

  return (
    <>
      <Header />
      <List
        pokemons={pokemons}
        nextPage={nextPage}
        isLoading={isLoading}
        fetchData={fetchData}
      />
    </>
  );
};

export default Types;
