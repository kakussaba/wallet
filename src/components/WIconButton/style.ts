import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.TRANSPARENT};
  padding: ${({theme}) => theme.padding.MD};
`;
