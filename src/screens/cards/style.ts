import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.BLUE_DARK};
`;

export const Body = styled.View`
  flex-direction: column;
  justify-content: space-between;
`;

export const CardsContainer = styled.View`
  padding: 0 30px;
  z-index: 1;
`;

export const ButtonsContainer = styled.View`
  padding: 0 30px;
`;
