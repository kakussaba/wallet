import React, {useState} from 'react';
import * as S from './style';
import {WInputProps} from './types';
import {WText} from '../WText';
import {useTheme} from 'styled-components/native';
import {
  maskCardNumber,
  maskDate,
  maskNumber,
} from '../../global/utils/formatting';

export const WInput: React.FC<WInputProps> = ({
  value,
  label,
  full = false,
  placeholder = '',
  onChangeText,
  onBlur,
  mask,
  maxLength,
  testID,
}) => {
  const {colors, fontSize} = useTheme();
  const [maskValue, setMaskValue] = useState<string>(value);

  return (
    <S.Container full={full}>
      <WText text={label} fontSize={fontSize.XS} color={colors.GREY} noTestID />
      <S.MaskInputContainer
        accessible
        accessibilityHint={label}
        testID={testID}
        value={maskValue}
        onChangeText={unmasked => {
          const masked =
            mask === 'card'
              ? maskCardNumber(unmasked)
              : mask === 'date'
              ? maskDate(unmasked)
              : mask === 'number'
              ? maskNumber(unmasked)
              : unmasked;
          setMaskValue(masked);
          onChangeText(masked);
        }}
        onBlur={onBlur}
        placeholder={placeholder}
        maxLength={maxLength}
      />
    </S.Container>
  );
};
