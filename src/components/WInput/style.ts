import styled from 'styled-components/native';

type ContainerProps = {
  full: boolean;
};

export const Container = styled.View<ContainerProps>`
  width: ${props => (props.full ? '100%' : '45%')};
`;

export const MaskInputContainer = styled.TextInput`
  background-color: ${({theme}) => theme.colors.WHITE};
  height: 55px;
  border-radius: 6px;
  padding: ${({theme}) => theme.padding.MD};
  margin: ${({theme}) => theme.margin.SM} 0;
  font-weight: 400;
  font-family: 'PT Sans Caption';
  color: ${({theme}) => theme.colors.BLUE_DARK};
  font-size: ${({theme}) => theme.fontSize.SM};
`;
