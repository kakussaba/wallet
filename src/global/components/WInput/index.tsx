import React, {useState} from 'react';
import * as S from './style';
import {WInputProps} from './types';
import {WText} from '../WText';
import {useTheme} from 'styled-components/native';

export const WInput: React.FC<WInputProps> = ({
  value,
  label,
  mask,
  type = 'default',
  testID,
  full = false,
  placeholder = '',
  onChangeText,
  onBlur,
}) => {
  const {colors, fontSize} = useTheme();
  const [maskValue, setMaskValue] = useState<string>(value);

  return (
    <S.Container full={full}>
      <WText text={label} fontSize={fontSize.XS} color={colors.GREY} />
      <S.MaskInputContainer
        testID={testID}
        value={maskValue}
        onChangeText={unmasked => {
          setMaskValue(unmasked);
          onChangeText(unmasked);
        }}
        mask={mask}
        placeholderFillCharacter={placeholder}
        onBlur={onBlur}
        keyboardType={type}
      />
    </S.Container>
  );
};
