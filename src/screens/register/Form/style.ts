import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: ${({theme}) => theme.margin.SM};
`;
