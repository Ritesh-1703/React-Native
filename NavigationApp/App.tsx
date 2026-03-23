import React from 'react';
import { View, Text, Button } from 'react-native';
import useStore from './src/zustand/useStore';

export default function App() {
  const { count, increase, decrease } = useStore();

  return (
    <View>
      <Text>{count}</Text>

      <Button title="+" onPress={increase} />
      <Button title="-" onPress={decrease} />
    </View>
  );
}
// import React from 'react';
// import { Provider, useSelector, useDispatch } from 'react-redux';
// import { View, Text, Button } from 'react-native';
// import store from './src/redux/store';
// import { increment, decrement } from './src/redux/counterSlice';
// import { RootState } from './src/redux/store';
// function Counter() {
//   const count = useSelector((state: RootState) => state.count);
//   const dispatch = useDispatch();

//   return (
//     <View>
//       <Text>{count}</Text>

//       <Button title="+" onPress={() => dispatch(increment())} />
//       <Button title="-" onPress={() => dispatch(decrement())} />
//     </View>
//   );
// }

// export default function App() {
//   return (
//     <Provider store={store}>
//       <Counter />
//     </Provider>
//   );
// }

// import React, { useContext } from 'react';
// import { View, Text, Button } from 'react-native';
// import { ThemeProvider, ThemeContext } from './src/context/ThemeContext';

// function Screen() {
//   const { dark, setDark } = useContext(ThemeContext);

//   return (
//     <View style={{ backgroundColor: dark ? 'black' : 'white' }}>
//       <Text style={{ color: dark ? 'white' : 'black' }}>Theme</Text>

//       <Button title="Toggle" onPress={() => setDark(!dark)} />
//     </View>
//   );
// }

// export default function App() {
//   return (
//     <ThemeProvider>
//       <Screen />
//     </ThemeProvider>
//   );
// }
