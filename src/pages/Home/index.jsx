import { useEffect, useState } from "react";
import Header from "../../components/Header";
import List from "../../components/List";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [nextPage, setNextPage] = useState();
  const [isLoading, setIsLoading] = useState();

  const fetchData = async (url) => {
    setIsLoading(true);
    const response = await fetch(url);
    const data = await response.json();

    setPokemons([...pokemons, ...data?.results]);

    setNextPage(data?.next);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData("https://pokeapi.co/api/v2/pokemon?limit=150");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

export default Home;
