import { useEffect, useState } from "react";

import { getNumber } from "../../utils";
import * as Styled from "./styled";
import imgFallback from "../../assets/pokeball.gif";
import axios from "axios";

const Pokemon = ({ data }) => {
  const [types, setTypes] = useState([]);
  const [sprite, setSprite] = useState();
  const [id, setId] = useState();
  const [image, setImage] = useState(false);
  const { name } = data;

  useEffect(() => {
    if (!data) return;
    axios.get(data.url).then((response) => {
      setTypes(response.data.types);
      setId(response.data.id);
    });
  }, [data]);

  useEffect(() => {
    if (!id) return;
    setSprite(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    );
  }, [id]);

  useEffect(() => {
    if (!sprite) return;
    axios.get(sprite).then((response) => {
      setImage(response.status === 200);
    });
  }, [sprite]);

  const picture = image ? sprite : imgFallback;
  return (
    <Styled.Card>
      <Styled.CardFigure type={types?.[0]?.type?.name}>
        <Styled.CardNumber>#{getNumber(id)}</Styled.CardNumber>
        <Styled.CardImage alt={name} src={picture} />
      </Styled.CardFigure>

      <Styled.CardPillWrapper>
        {types?.map(({ type }, i) => (
          <Styled.CardPill
            type={type.name}
            key={`${name}_type_${i}`}
            to={`/type/${type?.name}`}
          >
            {type.name}
          </Styled.CardPill>
        ))}
      </Styled.CardPillWrapper>
      <Styled.CardTitle>{name}</Styled.CardTitle>
    </Styled.Card>
  );
};

export default Pokemon;
