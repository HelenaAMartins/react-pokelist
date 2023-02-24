import axios from "axios";
import { useEffect, useState } from "react";
import imgFallback from "../../assets/pokeball.gif";
import { getNumber } from "../../utils";
import * as Styled from "./styled";

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
    <Styled.Row>
      <Styled.RowFigure type={types?.[0]?.type?.name}>
        <Styled.RowImage alt={name} src={picture} />
      </Styled.RowFigure>
      <Styled.RowInfo>
        <Styled.RowNumber>#{getNumber(id)}</Styled.RowNumber>
        <Styled.RowTitle>{name}</Styled.RowTitle>
      </Styled.RowInfo>
      <Styled.RowPillWrapper>
        {types?.map(({ type }, i) => (
          <Styled.RowPill
            type={type.name}
            key={`${name}_type_${i}`}
            to={`/type/${type?.name}`}
          >
            {type.name}
          </Styled.RowPill>
        ))}
      </Styled.RowPillWrapper>
    </Styled.Row>
  );
};

export default Pokemon;
