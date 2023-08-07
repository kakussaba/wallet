import styled from 'styled-components/native';

type ContainerProps = {
  color: string;
};

export const Container = styled.TouchableOpacity<ContainerProps>`
  justify-content: center;
  align-self: center;
  background-color: ${props => props.color};
  height: 55px;
  width: 100%;
  border-radius: 12px;
  margin: 10px 14px;
`;
