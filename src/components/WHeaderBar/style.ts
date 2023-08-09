import styled from 'styled-components/native';

type ContainerProps = {
  backgroundColor?: string;
};

export const Container = styled.View<ContainerProps>`
  background-color: ${props => props.backgroundColor};
  height: 100px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 40px 16px 0;
  shadow-color: ${({theme}) => theme.colors.BLUE_DARK};
  shadow-offset: -5px 0;
  shadow-opacity: 0.4;
`;

export const ContainerIcon = styled.View`
  width: 60px;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
