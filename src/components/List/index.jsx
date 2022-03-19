import { useEffect, useState } from "react";

import { Container } from "../../styles/shared";
import * as Styled from "./styled";
import Pokemon from "../Pokemon";
import PokemonRow from "../PokemonRow";

import load from "../../assets/load.svg";
import row from "../../assets/row.svg";
import grid from "../../assets/grid.svg";

const List = () => {
  const [pokemons, setPokemons] = useState([]);
  const [nextPage, setNextPage] = useState();
  const [layout, setLayout] = useState("grid");
  const [isLoading, setIsLoading] = useState();

  const fetchData = async (url) => {
    setIsLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setPokemons([...pokemons, ...data.results]);
    setNextPage(data.next);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData("https://pokeapi.co/api/v2/pokemon?limit=150");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Styled.Options>
        <Styled.LayoutWrapper>
          <Styled.LayoutButton
            active={layout === "grid"}
            onClick={() => setLayout("grid")}
          >
            <Styled.LayoutImg src={grid} alt="Ver grid" />
          </Styled.LayoutButton>
          <Styled.LayoutButton
            active={layout === "table"}
            onClick={() => setLayout("table")}
          >
            <Styled.LayoutImg src={row} alt="Ver tabela" />
          </Styled.LayoutButton>
        </Styled.LayoutWrapper>
      </Styled.Options>

      <Styled.Grid layout={layout}>
        {pokemons.map((item, i) => {
          if (layout === "grid")
            return <Pokemon data={item} idx={i} key={`card_pokemon_${i}`} />;
          return <PokemonRow data={item} idx={i} key={`row_pokemon_${i}`} />;
        })}
      </Styled.Grid>
      <Styled.LoadWrapper>
        {nextPage && (
          <Styled.LoadMoreButton
            disabled={isLoading}
            onClick={() => fetchData(nextPage)}
          >
            {isLoading ? <img alt="Loading" src={load} /> : "Load More"}
          </Styled.LoadMoreButton>
        )}
      </Styled.LoadWrapper>
    </Container>
  );
};

export default List;
