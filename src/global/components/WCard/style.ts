import styled from 'styled-components/native';

type ContainerProps = {
  color: string;
  unfocused?: boolean;
};

export const Container = styled.TouchableOpacity<ContainerProps>`
  background-color: ${props => props.color};
  border-radius: 16px;
  padding: 30px 20px 40px;
  margin-top: 30px;
  margin-bottom: 30px;
  opacity: ${props => (props.unfocused ? 0.7 : 1)};
`;

export const Header = styled.View`
  margin-bottom: 34px;
`;
