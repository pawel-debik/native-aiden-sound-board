import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import SoundButton from './SoundButton';
import Soundlist from './assets/soundlist.json';

export default function App() {

  // Start with buttonArraySmall (all the buttons), then allow array to be updated when user is using the filter
  const [bunchOfButtons, updateBunchOfButtons] = React.useState(Soundlist);

  const ButtonList = function(props){
    return(
      <View style={styles.bunchOfButtons}>
        {bunchOfButtons.map((data, i) => {
            return (<SoundButton key={i} button_label = {data.button_label} sound = {data.url} />) 
        })}
      </View>
    )
  }

  return(
    <View>
      <ButtonList />
    </View>
  );
}

const styles = StyleSheet.create({
  bunchOfButtons : {flexDirection: 'row', height:60, alignItems: "center",  flexWrap: 'wrap'}
});
