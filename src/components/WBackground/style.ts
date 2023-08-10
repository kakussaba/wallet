import styled from 'styled-components/native';
import {css} from 'styled-components';

type BackgroundContainerProps = {
  position: string;
};

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.BLUE_DARK};
  justify-content: center;
  padding: ${({theme}) => theme.padding.LG};
`;

export const BackgroundContainer = styled.View<BackgroundContainerProps>`
  position: absolute;
  top: ${props => props.position === 'top' && 0};
  bottom: ${props => props.position === 'bottom' && 0};
  right: ${props => props.position === 'bottom' && 0};
  transform: ${props => props.position === 'bottom' && css `rotate(180deg)`};
  z-index: -1;
`;
