import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.BLUE_DARK};
  justify-content: center;
  align-items: center;
`;

export const ContainerTitle = styled.View`
  margin-bottom: ${({theme}) => theme.margin.SM};
`;
