import * as React from "react";
import styled from "styled-components";

export function Header() {
  return (
    <HeaderWrapper>
      Car Vision
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  align-self: stretch;
  background-color: #107a92;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
  padding: 15px 15px; /* Padding ajustado para 15px no topo e na base */
  color: #fff;
  font: 600 24px Inter, sans-serif; /* Fonte ajustada para um tamanho menor */
  text-align: center;

  @media (max-width: 991px) {
    padding: 15px 20px; /* Padding ajustado para telas menores */
    font-size: 20px; /* Fonte ajustada para ser menor em dispositivos móveis */
  }
`;
