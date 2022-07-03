import {IHero} from '../components/heroes/interface/hero.types';


// Global API's
export const GRAPHQL_API = 'http://localhost:3000/graphql';
export const baseURL = 'http://localhost:3000';


// Global query
export const GET_HEROES = (page: number, perPage: number) => `
query heroes {
    heroes (first: ${perPage}, skip: ${page}) {
      data {
        id,
        fullName,
        description,
        avatarUrl,
        type {
            id, name
          }
      },
      totalCount
    }
}
`;
export const GET_TYPES = (page: number, perPage: number) => `
query types {
  type {
    id,
    name
  }
}
`;


// Default values
export const perPage = 5;
export const paragraphLen = 80;

export const MSG = {
  fieldRequiredMSG: (name: string) => `${name} is required!`,
  confirmMSG: 'Save now ?',
  confirmDeleteMSG: 'About to Delete Item?',
};


// Dummy data

export const tempHero: IHero = {
  avatarUrl: '',
  description: 'Allow long words to be able to break and wrap onto the next line',
  fullName: 'Kayode Akinumi',
  id: 'ljhj;',
  type: {id: 'kjjhvb', name: 'Developer'},
};


