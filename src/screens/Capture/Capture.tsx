import React, {useEffect, useState} from 'react';
import * as S from './Capture.styles';
import DataService from '../../helpers/dataService/DataServiceClass';

const Capture = () => {
  const dataService = new DataService();

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [cell_no, setCellNo] = useState('');

  async function fetchData() {
    const nameData = await dataService.getNameData();
    const contactData = await dataService.getContactData();
    if (nameData && contactData) {
      setName(nameData.name);
      setCellNo(contactData.cell_no);
      setEmail(contactData.email);
      setSurname(nameData.surname);
    }
  }

  const handleSubmitForm = () => {
    dataService.updateNameData(name, surname).then(() => {});
    dataService.updateContactData(email, cell_no).then(() => {});
  };

  useEffect(() => {
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.CaptureScreenContainer>
      <S.CaptureText>THIS IS CAPTURE SCREEN</S.CaptureText>

      <S.LabelText>Name:</S.LabelText>
      <S.ContactInput value={name} onChangeText={setName} />
      <S.LabelText>Surname:</S.LabelText>
      <S.ContactInput value={surname} onChangeText={setSurname} />
      <S.LabelText>Email:</S.LabelText>
      <S.ContactInput value={email} onChangeText={setEmail} />
      <S.LabelText>Cell No:</S.LabelText>
      <S.ContactInput value={cell_no} onChangeText={setCellNo} />
      <S.CaptureButton title="Update" onPress={handleSubmitForm} />
    </S.CaptureScreenContainer>
  );
};
export default Capture;
