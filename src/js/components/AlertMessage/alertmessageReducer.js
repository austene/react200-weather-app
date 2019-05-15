const defaultState = {
  error: true
};


export default function AlertMessageReducer (state = defaultState, action) {
  const { type } = action;

  switch (type) {

    case 'DISMISS_ALERT': {
      return {
        ...state,
        error: false
      };
    }

    default: {
      return state;
    }
  }
}
