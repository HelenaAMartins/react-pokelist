import { useEffect, useState } from "react";

import { getNumber } from "../../utils";
import * as Styled from "./styled";
import imgFallback from "../../assets/imgFallback.png";

const Pokemon = ({ data, idx }) => {
  const [types, setTypes] = useState([]);
  const [image, setImage] = useState(false);
  const { url, name } = data;

  const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
    idx + 1
  }.png`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setTypes(data.types);
    };

    const fetchImage = async () => {
      const response = await fetch(sprite);
      setImage(response.status === 200);
    };
    fetchData();
    fetchImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  const picture = image ? sprite : imgFallback;

  return (
    <Styled.Card>
      <Styled.CardHeader>
        <Styled.CardNumber>#{getNumber(idx)}</Styled.CardNumber>
      </Styled.CardHeader>
      <Styled.CardFigure>
        <Styled.CardImage alt={name} src={picture} />
      </Styled.CardFigure>
      <Styled.CardTitle>{name}</Styled.CardTitle>
      <Styled.CardPillWrapper>
        {types.map(({ type }, i) => (
          <Styled.CardPill type={type.name} key={`${name}_type_${i}`}>
            {type.name}
          </Styled.CardPill>
        ))}
      </Styled.CardPillWrapper>
    </Styled.Card>
  );
};

export default Pokemon;
