import styled from 'styled-components/native';
import {css} from 'styled-components';
import {Platform} from 'react-native';

type ContainerProps = {
  color: string;
  unfocused?: boolean;
};

export const Container = styled.TouchableOpacity<ContainerProps>`
  background-color: ${props => props.color};
  border-radius: 16px;
  padding: 30px 20px 40px;
  opacity: ${props => (props.unfocused ? 0.7 : 1)};
  ${Platform.OS === 'ios'
    ? css`
        box-shadow: 0 0 10px rgba(20, 41, 149, 1);
      `
    : css`
        shadow-color: '#142995';
        elevation: 20;
      `}
`;

export const Header = styled.View`
  margin-bottom: 34px;
`;
