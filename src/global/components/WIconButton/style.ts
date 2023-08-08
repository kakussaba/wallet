import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

type ContainerProps = {
  backgroundColor?: string;
};

export const Container = styled(Icon.Button)<ContainerProps>`
  background-color: ${props => props.backgroundColor};
`;
