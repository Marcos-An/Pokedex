import styled from "styled-components";

export const Container = styled.View`
  height: 100%;
  background-color: #fff;
  color: black;
`;

export const TextInput = styled.TextInput`
  margin-top: 60px;
  width: 55%;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid gray;
`;

export const Image = styled.Image`
  width: 230px;
  height: 230px;
  position: absolute;
  transform: rotate(-45deg);
  top: -10px;
  right: -60px;
  opacity: 0.04;
`;
