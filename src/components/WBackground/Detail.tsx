import React from 'react';
import * as S from './style';
import Background from '../../assets/icons/background.svg';

type DetailProps = {
  position: string;
  big: boolean;
};

export const Detail: React.FC<DetailProps> = ({position, big = false}) => {
  const width = big ? 324 : 273;
  const height = big ? 306 : 203;

  return (
    <S.BackgroundContainer position={position}>
      <Background width={width} height={height} />
    </S.BackgroundContainer>
  );
};
