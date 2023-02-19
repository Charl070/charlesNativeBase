import styled from 'styled-components/native';
import {colors} from '../../constants/colors';
export const CaptureScreenContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: "center",
  justify-content: "center",
`;
export const CaptureText = styled.Text`
  font-size: 20;
`;
export const LabelText = styled.Text`
font-size: 20,
margin-bottom: 5,
`;
export const CaptureButton = styled.Button`
font-size: 20,
margin-bottom: 5,
`;
export const ContactInput = styled.TextInput`
    font-size: 16,
    padding: 5,
    margin-bottom: 10,
    border-width: 1,
    border-color: ${colors.grey},
    border-radius: 5,
    width: 250,
`;
