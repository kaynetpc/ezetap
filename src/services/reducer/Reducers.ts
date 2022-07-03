export interface IReducersState {
    addFormHeroModal: boolean;
    totalData: number;
    currentDataListCount: number;
}

const initialState: IReducersState = {
  addFormHeroModal: false,
  currentDataListCount: 0,
  totalData: 0,
};

export type ICase = 'addFormHeroModal' | 'totalData' | 'currentDataListCount';
export const Reducers = (state = initialState, action: any): IReducersState => {
  switch (action.type as ICase) {
    case 'addFormHeroModal':
      return {...state, addFormHeroModal: action.data};
    case 'totalData':
      return {...state, totalData: action.data};
    case 'currentDataListCount':
      return {...state, currentDataListCount: action.data};
    default:
      return state;
  }
};
