import styled from 'styled-components/native';
import {colors} from '../../constants/colors';
export const HomeScreenContainer = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const WordsWrapper = styled.View`
  width: 90%;
  padding: 5%;
`;

export const HomeTitle = styled.Text`
  font-size: 20px;
  color: ${colors.green};
`;
export const HomeText = styled.Text`
  font-size: 12px;
  color: ${colors.grey};
`;
