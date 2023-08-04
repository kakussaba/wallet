import styled from 'styled-components/native';

type ContainerButtonProps = {
  color: string;
};

export const ContainerButton = styled.TouchableOpacity<ContainerButtonProps>`
  justify-content: center;
  align-items: center;
  align-self: center;
  background-color: ${props => props.color};
  height: 55px;
  width: 300px;
  border-radius: 12px;
  margin: 10px 14px;
`;
