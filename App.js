import React, { Component } from 'react';
import { AppRegistry, Image, Text, View } from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <View style={{alignItems: "center"}}>
        <Text>Hello {this.props.name}!</Text>
      </View>
    )
  }
}

export default class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    }
    return (
      <View style={{alignItems: 'center', top: 50}}>
        <Greeting name='Evan' />
        <Greeting name='Bananas' />
        <Image source={pic} style={{width: 193, height: 110}}/>
      </View>
    )
  }
}
AppRegistry.registerComponent('FindMyRun', () => Bananas)
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
