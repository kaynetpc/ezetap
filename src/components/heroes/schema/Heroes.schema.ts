import {IFormSchema} from '../../../dependencies/form/Form.types';
export const HeroesSchema = (arg: {id: any, name: string}[] ): IFormSchema[] => [
  {
    name: 'avatarUrl',
    type: 'input',
    control: {
      placeholder: 'Supply Avatar Url',
      label: 'Avatar Url',
    },
  },
  {
    name: 'fullName',
    type: 'input',
    control: {
      placeholder: 'Supply Full Name',
      label: 'Full Name',
    },
  },
  {
    name: 'typeId',
    type: 'select',
    values: arg,
    control: {
      type: 'select',
      label: 'Type',
      placeholder: 'Type',
      renderKey: 'name',
      valueKey: 'id',
    },
  },
  {
    name: 'description',
    type: 'textarea',
    control: {
      placeholder: 'Description',
      label: 'Description',
    },
  },
];
