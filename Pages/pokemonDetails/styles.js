import styled from "styled-components";

export const Container = styled.View`
  background-color: ${(props) => props.background};
  flex-grow: 1;
  border-radius: 15px;
  overflow: hidden;
`;

export const Content = styled.View`
  background-color: #fff;
  position: absolute;
  padding-top: 40px;
  bottom: 0px;
  height: 50%;
  width: 100%;
`;
export const Images = styled.Image`
  position: absolute;
  transform: rotate(45deg);
  width: 230px;
  height: 230px;
  bottom: -20px;
  right: -10px;
  opacity: 0.2;
`;

export const ContentTop = styled.View`
  position: absolute;
  width: 100%;
  padding: 25px;
  height: 56%;
  z-index: 3;
`;

export const Types = styled.View`
  margin-top: 10px;
  flex-direction: row;
`;

export const TypeContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.2);
  padding: 6px;
  margin-right: 10px;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 10px;
`;
export const TypeName = styled.Text`
  text-transform: capitalize;
  text-align: center;
  color: white;
`;
export const PokemonSprite = styled.Image`
  align-self: center;
  margin-top: 15%;
`;

export const PokemonName = styled.Text`
  color: #fff;
  font-weight: 700;
  margin-top: 10px;
  text-transform: capitalize;
  font-size: 37px;
`;
export const PokemonId = styled.Text`
  color: #fff;
  font-weight: 700;
  text-transform: capitalize;
  font-size: 25px;
`;
