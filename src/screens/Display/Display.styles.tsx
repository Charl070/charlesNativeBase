import styled from 'styled-components/native';
import {colors} from '../../constants/colors';
export const DisplayScreenContainer = styled.View`
  display: flex;
  flex-direction: column;
`;

export const DisplayTitle = styled.Text`
  font-size: 20px;
  color: ${colors.green};
`;
export const DisplayText = styled.Text`
  font-size: 12px;
  color: ${colors.grey};
`;
