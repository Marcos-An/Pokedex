import styled from "styled-components";

export const Container = styled.View`
  background-color: ${(props) => props.background};
  flex-grow: 1;
  width: 48%;
  padding: 15px;
  border-radius: 15px;
  margin: 5px;
  min-height: 130px;
  overflow: hidden;
`;

export const PokemonName = styled.Text`
  color: #fff;
  font-weight: 700;
  text-transform: capitalize;
  font-size: 15px;
`;

export const Image = styled.Image`
  width: 130px;
  height: 130px;
  position: absolute;
  right: -30px;
  bottom: -30px;
  transform: rotate(45deg);
  opacity: 0.1;
`;

export const Types = styled.View`
  margin-top: 10px;
`;

export const TypeContainer = styled.View``;
export const TypeName = styled.Text`
  background-color: rgba(255, 255, 255, 0.17);
  width: 47%;
  text-align: center;
  border-radius: 60px;
  padding: 2px;
  margin-bottom: 3px;
  color: white;
`;

export const PokemonSprite = styled.Image`
  width: 90px;
  height: 90px;
  position: absolute;
  right: 3px;
  bottom: 0px;
`;
