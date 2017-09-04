import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  console.log('action recived', action);
  switch (action.type) {
    case FETCH_WEATHER:
      // return a new instance of state (using concat or spread op), not a mutated instance (like if using push)

      // return state.concat ([ action.payload.data ]);
      return [ action.payload.data, ...state ];

  }

  return state;
}
