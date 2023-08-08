import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.BLUE_DARK};
`;

export const Body = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
`;

export const CardsContainer = styled.View`
  flex: 0.6;
  padding: 0 30px;
  z-index: 1;
`;

export const ButtonsContainer = styled.View`
  flex: 0.4;
  padding: 0 30px;
`;
