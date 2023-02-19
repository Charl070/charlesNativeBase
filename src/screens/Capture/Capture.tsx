import React from 'react';
import * as S from './Capture.styles';
import DataService from '../../helpers/dataService/DataServiceClass';
const Capture = () => {
  const dataService = new DataService();

  async function updateNameData() {
    await dataService.updateNameData('Charles', 'Kombo');
  }
  async function updateContactData() {
    await dataService.updateContactData('charles@example.com', '0714293780');
  }
  return (
    <S.CaptureScreenContainer>
      <S.CaptureText>THIS IS CAPTURE SCREEN</S.CaptureText>
    </S.CaptureScreenContainer>
  );
};
export default Capture;
