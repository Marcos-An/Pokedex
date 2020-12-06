import styled from "styled-components";

export const Container = styled.View`
  background-color: #fff;
  padding: 25px;
  height: 100%;
`;

export const ViewLabel = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
`;
export const Status = styled.View`
  width: ${(props) => `${props.width}px`};
  background-color: ${(props) => (props.width > 60 ? "#5cd0b0" : "#f16a6b")};
  height: 10px;
  margin-top: 8px;
  border-radius: 10px;
`;
export const Label = styled.Text`
  font-weight: 500;
  width: 50%;
  color: #b3b3b3;
`;

export const Value = styled.Text`
  text-transform: capitalize;
  width: 15%;
`;
