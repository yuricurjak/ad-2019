import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  margin: 10px;
`;

export const ButtonForm = styled.a`
  max-width: auto;
  display: block;
  border: 4px solid;
  color: #222222;
  text-transform: uppercase;
  font-weight: bold;
  padding: 5px 0;
  text-align: center;
`;

export const Wrapper = styled.div`
  &:hover ${ButtonForm} {
    background-color: #3DADF2;
  };
  flex: 1;
`;