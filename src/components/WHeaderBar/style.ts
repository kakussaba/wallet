import {Platform} from 'react-native';
import styled from 'styled-components/native';
import {css} from 'styled-components';

type ContainerProps = {
  backgroundColor?: string;
};

export const Container = styled.View<ContainerProps>`
  background-color: ${props => props.backgroundColor};
  height: ${Platform.OS === 'ios' ? '120px' : '60px'};
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 20px;
  ${Platform.OS === 'ios'
    ? css`
        box-shadow: 0px -5px 20px rgba(20, 41, 149, 1)
;
      `
    : css`
    shadow-color: '#142995';
    elevation: 20;`}
`;

export const ContainerIcon = styled.View`
  width: 60px;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
