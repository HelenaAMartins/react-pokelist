import { useState } from "react";

import { Container } from "../../styles/shared";
import Pokemon from "../Pokemon";
import PokemonRow from "../PokemonRow";
import * as Styled from "./styled";

import { ArrowDown } from "../../icons";

const List = ({ pokemons, nextPage, isLoading, fetchData }) => {
  const [layout, setLayout] = useState("grid");
  const options = ["Grid", "Table"];
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => {
    setLayout(value.toLowerCase());
    setIsOpen(false);
  };

  return (
    <Container>
      <Styled.Options>
        <Styled.DropDownContainer>
          <Styled.DropDownHeader onClick={toggling}>
            View options <ArrowDown />
          </Styled.DropDownHeader>
          {isOpen && (
            <Styled.DropDownListContainer>
              <Styled.DropDownList>
                {options.map((option, index) => (
                  <Styled.ListItem
                    onClick={() => onOptionClicked(option)}
                    key={`options-${index}`}
                  >
                    {option}
                  </Styled.ListItem>
                ))}
              </Styled.DropDownList>
            </Styled.DropDownListContainer>
          )}
        </Styled.DropDownContainer>
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
            {isLoading ? "Loading..." : "Load More"}
          </Styled.LoadMoreButton>
        )}
      </Styled.LoadWrapper>
    </Container>
  );
};

export default List;
