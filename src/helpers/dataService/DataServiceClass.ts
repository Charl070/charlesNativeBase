import AsyncStorage from '@react-native-async-storage/async-storage';

type NameData = {
  name: string;
  surname: string;
};

type ContactData = {
  email: string;
  cell_no: string;
};

class DataService {
  private readonly nameKey = '@myapp:name';
  private readonly contactKey = '@myapp:contact';

  async createSampleData(): Promise<void> {
    const nameData: NameData = {name: 'Michael', surname: 'Baker'};
    const contactData: ContactData = {
      email: 'michael@test.com',
      cell_no: '0825558364',
    };
    await AsyncStorage.setItem(this.nameKey, JSON.stringify(nameData));
    await AsyncStorage.setItem(this.contactKey, JSON.stringify(contactData));
  }

  async getNameData(): Promise<NameData | null> {
    const data = await AsyncStorage.getItem(this.nameKey);
    return data ? JSON.parse(data) : null;
  }

  async getContactData(): Promise<ContactData | null> {
    const data = await AsyncStorage.getItem(this.contactKey);
    return data ? JSON.parse(data) : null;
  }

  async updateNameData(name: string, surname: string): Promise<void> {
    const data: NameData = {name, surname};
    await AsyncStorage.setItem(this.nameKey, JSON.stringify(data));
  }

  async updateContactData(email: string, cell_no: string): Promise<void> {
    const data: ContactData = {email, cell_no};
    await AsyncStorage.setItem(this.contactKey, JSON.stringify(data));
  }
}

export default DataService;
