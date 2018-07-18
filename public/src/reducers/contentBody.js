import { UPDATEVERTICALARRAY } from '../actions/types';

const initState = {
  array: [
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
  ],
};

const contentBodyReducer = (state = initState, action) => {
  switch (action.type) {
  case UPDATEVERTICALARRAY: 
    return {
      ...state,
      array: action.payload
    };
  default:
    return state;
  }
};

export default contentBodyReducer;