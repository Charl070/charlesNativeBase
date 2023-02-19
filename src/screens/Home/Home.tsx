import React, {useEffect} from 'react';
import * as S from './Home.styles';
import {useGenerateWords} from './hooks/generate.reports.hook';
import {StyledScrollView, StyledSafeAreaView} from '../common.styles';
const Home = () => {
  const {words, generateWords} = useGenerateWords();

  useEffect(() => {
    generateWords();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledSafeAreaView>
      <StyledScrollView contentInsetAdjustmentBehavior="automatic">
        <S.HomeScreenContainer>
          <S.HomeTitle>THIS IS HOME SCREEN</S.HomeTitle>
          <S.WordsWrapper>
            {words.map((word: string, index: number) => (
              <S.HomeText key={index}>{word}</S.HomeText>
            ))}
          </S.WordsWrapper>
        </S.HomeScreenContainer>
      </StyledScrollView>
    </StyledSafeAreaView>
  );
};
export default Home;
