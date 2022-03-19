import { useEffect, useState } from "react";

import { getNumber } from "../../utils";
import * as Styled from "./styled";

const Pokemon = ({ data, idx }) => {
  const [types, setTypes] = useState([]);
  const { url, name } = data;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setTypes(data.types);
    };
    fetchData();
  }, [url]);

  
  return (
    <Styled.Row>
      <Styled.RowFigure>
        <Styled.RowImage
          alt={name}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            idx + 1
          }.png`}
          />
      </Styled.RowFigure>
      <Styled.RowInfo>
          <Styled.RowNumber>#{getNumber(idx)}</Styled.RowNumber>
      <Styled.RowTitle>{name}</Styled.RowTitle>
      </Styled.RowInfo>
      <Styled.RowPillWrapper>
        {types.map(({ type }, i) => (
          <Styled.RowPill type={type.name} key={`${name}_type_${i}`}>
            {type.name}
          </Styled.RowPill>
        ))}
      </Styled.RowPillWrapper>
    </Styled.Row>
  );
};

export default Pokemon;
