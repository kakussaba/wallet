import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 0.5;
  justify-content: space-evenly;
  align-items: center;
  padding: ${({theme}) => theme.padding.MD};
`;
