import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, TextInput, ScrollView } from 'react-native';
import SoundButton from './SoundButton';
import Soundlist from './assets/soundlist.json';
import InsetShadow from 'react-native-inset-shadow';

export default function App() {

  // Start with buttonArraySmall (all the buttons), then allow array to be updated when user is using the filter
  const [bunchOfButtons, updateBunchOfButtons] = React.useState(Soundlist);
  
  const SoundBoardFilter = function(props){
    const [filter, setFilter] = React.useState('');

    function doFilter(){
      const items = Soundlist.filter(item => item.button_label.indexOf({filter}.filter) !== -1);
      updateBunchOfButtons(items);
    }

    function updateFindText(e){
      // I guess TextInput pushes its value to the function I call at onChangeText 
      setFilter(e);
    }

    return(
      <View style={{flexDirection: 'row', height: 60, marginVertical: 30, marginHorizontal: 10}}>
        <View style={styles.searchFieldWrapper}>
            <InsetShadow shadowColor="rgba(163,177,198,1)" >
              <TextInput style={styles.filterSearchfield} placeholder="Find sound" value={filter} onChangeText={updateFindText} />
            </InsetShadow>
        </View>
        <View style={styles.buttonFind}>
            <View style={styles.topShadow}>
              <View style={styles.bottomShadow}>
                <TouchableWithoutFeedback onPress = {doFilter}>
                  <Text style={{padding: 10}}>Find</Text>
                </TouchableWithoutFeedback>
              </View>      
            </View>      
          </View>      
        </View>
    );
  }

  const ButtonList = function(props){
    return(
      <View>
        <View style={styles.bunchOfButtons}>
          {bunchOfButtons.map((data, i) => {
              return (<SoundButton key={i} button_label = {data.button_label} sound = {data.url} />) 
          })}
        </View>
      </View>
    )
  }

  return(
    <View style={styles.container}>
      <SoundBoardFilter style={styles.soundboardFilter}/>
      <ScrollView style={{height: '80%'}}>
       <ButtonList />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  bunchOfButtons : { flexDirection: 'row',alignItems: "center",  flexWrap: 'wrap' },
  container : { height: '100%', backgroundColor: 'rgb(237, 239, 245)' },
  soundboardFilter: { margin: 10},
  buttonFind: {
    marginStart: 50, 
    backgroundColor: 'rgb(237, 239, 245)'
},
topShadow: {
    shadowOffset: {
        width: -3,
        height: -3
    },
    shadowOpacity: 1,
    shadowRadius: 9,
    shadowColor: '#fff'
},
bottomShadow: {
    shadowOffset: {
        width: 3,
        height: 3
    },
    shadowOpacity: 1,
    shadowRadius: 9,
    shadowColor: 'rgba(163,177,198,0.3)'
},
searchFieldWrapper: {
  width: 200,
},
filterSearchfield: {
  borderRadius: 6,
  padding: 10,
  margin: '1%'
}
});
