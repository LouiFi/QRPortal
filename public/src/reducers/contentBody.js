import { UPDATEPRIMARYVERTICALARRAY, UPDATEDETAILS } from '../actions/types';

const initState = {
  details: null,
  primaryArray: {
    headers: ['ID', 'Name', 'Critical'],
    keys: ['id', 'name', 'critical'],
    data: [
      {
        id: 4,
        name: 'Java',
        critical: false
      },
      {
        id: 5,
        name: 'Python',
        critical: false
      },
      {
        id: -3,
        name: 'C++',
        critical: false
      },
      {
        id: -2,
        name: 'C',
        critical: true
      },
      {
        id: 1,
        name: 'PHP',
        critical: false
      },
    ]
  },
  secondaryArray: {
    headers: ['ID', 'Name', 'Critical'],
    keys: ['id', 'name', 'critical'],
    data: null
  }
};

const contentBodyReducer = (state = initState, action) => {
  switch (action.type) {
  case UPDATEPRIMARYVERTICALARRAY:
    return {
      ...state,
      primaryArray: action.payload
    };
  case UPDATEDETAILS: 
    return {
      ...state,
      details: action.payload
    };
  default:
    return state;
  }
};

export default contentBodyReducer;