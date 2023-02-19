import React, {useState, useEffect} from 'react';
import * as S from './Display.styles';
import {
  IFirstDataSet,
  ISecondDataSet,
} from '../../helpers/dataService/DataServise.intefaces';
import DataService from '../../helpers/dataService/DataServiceClass';

const Display = () => {
  const [contact_data, setContactData] = useState<ISecondDataSet>();
  const [name_data, setNameData] = useState<IFirstDataSet>();
  const dataService = new DataService();

  async function createData() {
    await dataService.createSampleData();
    fetchData();
  }

  async function fetchData() {
    const nameData = await dataService.getNameData();
    const contactData = await dataService.getContactData();
    if (nameData && contactData) {
      setNameData({name: nameData.name, surname: nameData.surname});
      setContactData({email: contactData.email, cell_no: contactData.cell_no});
    } else {
      createData();
    }
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.DisplayScreenContainer>
      <S.DisplayTitle>THIS IS DISPLAY SCREEN</S.DisplayTitle>
      {name_data && contact_data ? (
        <>
          <S.DisplayText>First Name : {name_data?.name}</S.DisplayText>
          <S.DisplayText>Last Name : {name_data?.surname}</S.DisplayText>

          <S.DisplayText>Contact Details</S.DisplayText>
          <S.DisplayText>Email : {contact_data?.email}</S.DisplayText>
          <S.DisplayText>Cell : {contact_data?.cell_no}</S.DisplayText>
        </>
      ) : (
        <S.DisplayText>Data is loading .....</S.DisplayText>
      )}
    </S.DisplayScreenContainer>
  );
};
export default Display;
