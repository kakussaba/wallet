import styled from 'styled-components/native';
import MaskInput from 'react-native-mask-input';

type MaskInputProps = {
  full: boolean;
};

export const Container = styled.View<MaskInputProps>`
  width: ${props => (props.full ? '100%' : '45%')};
`;

export const ContainerMaskInput = styled(MaskInput)`
  background-color: ${({theme}) => theme.colors.WHITE};
  height: 45px;
  border-radius: 6px;
  padding: ${({theme}) => theme.padding.MD};
  margin: ${({theme}) => theme.margin.SM} 0;
`;
