import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  fullName: faker.name.findName(),
  email: faker.internet.email(),
  gender: faker.random.arrayElement(["male", "female"]),
  phoneNumber:faker.phone.phoneNumber("7# ### ###"),
  role: sample([
    'Doctor', 
    'Pharmacien',
  ]),
}));

export default users;
