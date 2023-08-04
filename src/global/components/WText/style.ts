import styled from 'styled-components/native';

type TextProps = {
  color: string;
  fontSize: string;
};

export const Text = styled.Text<TextProps>`
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  font-weight: 400;
  font-family: 'PT Sans Caption';
`;
