import React, {useState} from 'react';
import * as S from './style';
import {WInputProps} from './types';
import {WText} from '../WText';
import {useTheme} from 'styled-components/native';

export const WInput: React.FC<WInputProps> = ({
  label,
  mask,
  full = false,
  placeholder = '',
}) => {
  const {colors, fontSize} = useTheme();
  const [value, setValue] = useState<string>();

  return (
    <S.Container full={full}>
      <WText text={label} fontSize={fontSize.XS} color={colors.GREY} />
      <S.MaskInputContainer
        value={value}
        onChangeText={unmasked => {
          setValue(unmasked);
        }}
        mask={mask}
        placeholderFillCharacter={placeholder}
      />
    </S.Container>
  );
};
