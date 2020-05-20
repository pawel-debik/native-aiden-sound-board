import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import SoundButton from './SoundButton';
import Soundlist from './assets/soundlist.json';

export default function App() {

  // Start with buttonArraySmall (all the buttons), then allow array to be updated when user is using the filter
  const [bunchOfButtons, updateBunchOfButtons] = React.useState(Soundlist);
  
  const SoundBoardFilter = function(props){
    const [filter, setFilter] = React.useState('');

    const doFilter = function(e){
      const items = Soundlist.filter(item => item.button_label.indexOf({filter}.filter) !== -1);
      updateBunchOfButtons(items);
    }

    function updateFindText(e){
      // I guess TextInput pushes its value to the function I call at onChangeText 
      setFilter(e);
    }

    return(
      <View>
        <TextInput placeholder="Find sound" value={filter} onChangeText={updateFindText} />
        <Button title="Find" onPress = {doFilter} />
      </View>
    );
  }

  const ButtonList = function(props){
    return(
      <View>
        <View>
          <SoundBoardFilter />
        </View>
        <View style={styles.bunchOfButtons}>
          {bunchOfButtons.map((data, i) => {
              return (<SoundButton key={i} button_label = {data.button_label} sound = {data.url} />) 
          })}
        </View>
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
