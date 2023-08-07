import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.BLUE_DARK};
`;

export const Body = styled.View`
  flex-direction: column;
  padding: 0 30px;
`;

export const CardsContainer = styled.View`
  margin-bottom: -40px;
`;
