import {IFormSchema} from '../../../dependencies/form/Form.types';
export const RegisterSchema = (arg: {id: any, name: string}[] ): IFormSchema[] => [

  {
    name: 'fullName',
    type: 'input',
    control: {
      placeholder: 'Supply Full Name',
      label: 'Full Name',
    },
  },
  {
    name: 'password',
    type: 'input',
    values: arg,
    control: {
      type: 'input',
      label: 'New Password',
      placeholder: 'enter new password',
      renderKey: 'name',
      valueKey: 'id',
    },
  },
];
