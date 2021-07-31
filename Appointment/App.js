import React from 'react';
import {Dimensions, ScrollView} from 'react-native';

import {WebView} from 'react-native-webview';

const App = () => {
  const {width, height} = Dimensions.get('screen');
  return (
    <ScrollView style={{flex: 1, backgroundColor: 'red'}}>
      <WebView
        style={{width, height}}
        source={{uri: 'calendly.com/vaidehi-pandya007'}}
      />
    </ScrollView>
  );
};

export default App;
