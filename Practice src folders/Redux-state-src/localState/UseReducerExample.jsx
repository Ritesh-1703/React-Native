import React from 'react';
import { useReducer } from 'react';
function reducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return { count: state.count + 1 };
    case 'SUB':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <View>
      <Text>Count : {state.count}</Text>
      <Button title="Increase" onPress={() => dispatch({ type: 'ADD' })} />
      <Button title="Decrease" onPress={() => dispatch({ type: 'SUB' })} />
    </View>
  );
};

export default UseReducerExample;
