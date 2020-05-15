import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Audio } from 'expo-av';

export default function App() {
  const [label, changeLabel] = React.useState();
  const [titleClass, changeTitleClass] = React.useState('soundboard__active-sound');

  // Make array so that we can map this array to a new one when user uses filter
  const buttonArraySmall = [
    {'url': './assets/sounds/breh.mp3', 'button_label': 'Breh'}, 
    {'url': './assets/sounds/dubstep1.mp3', 'button_label': 'Dubstep'}, 
    {'url': './assets/sounds/easy.mp3', 'button_label': 'Easy!'},
    {'url': './assets/sounds/huhwhatthe.mp3', 'button_label': 'Huh? What the...'},
    {'url': './assets/sounds/marioded.mp3', 'button_label': 'Mario Game Over'},
    {'url': './assets/sounds/afewmomentslater1.mp3', 'button_label': 'A few moments later'},
    {'url': './assets/sounds/doit1.mp3', 'button_label': 'Do it!'},
    {'url': './assets/sounds/whyareyourunning.mp3', 'button_label': 'Why you runnin?'},
    {'url': './assets/sounds/wtbleep.mp3', 'button_label': 'What the !!!'},
    {'url': './assets/sounds/yaaaa1.mp3', 'button_label': 'Yaaa!'},
    {'url': './assets/sounds/yay1.mp3', 'button_label': 'Happy kids'},
    {'url': './assets/sounds/youbetterstop.mp3', 'button_label': 'You better stop!'},
    {'url': './assets/sounds/zombie1.mp3', 'button_label': 'Zombie'},
    {'url': './assets/sounds/saywhat.mp3', 'button_label': 'Say what?'},
    {'url': './assets/sounds/scream1.mp3', 'button_label': 'Scream'},
    {'url': './assets/sounds/scream2.mp3', 'button_label': 'Scream 2'},
    {'url': './assets/sounds/scream3.mp3', 'button_label': 'Scream 3'},
    {'url': './assets/sounds/applause1.mp3', 'button_label': 'Applause'},
    {'url': './assets/sounds/fatality.mp3', 'button_label': 'Fatality'},
    {'url': './assets/sounds/toasty.mp3', 'button_label': 'Toasty'},
    {'url': './assets/sounds/hadouken.mp3', 'button_label': 'Hadouken'},
    {'url': './assets/sounds/burp1.mp3', 'button_label': 'Burp'},
    {'url': './assets/sounds/fart1.mp3', 'button_label': 'Fart'},
    {'url': './assets/sounds/sorrybro.mp3', 'button_label': 'Sorry bro'},
    {'url': './assets/sounds/shotsfired.mp3', 'button_label': 'Shots fired!'},
    {'url': './assets/sounds/fbi.mp3', 'button_label': 'FBI. Open up!'},
    {'url': './assets/sounds/brz1.mp3', 'button_label': 'Explosion'},
    {'url': './assets/sounds/shing1.mp3', 'button_label': 'Shing'},
    {'url': './assets/sounds/no1.mp3', 'button_label': 'No!'},
    {'url': './assets/sounds/nononono.mp3', 'button_label': 'No no no no'},
    {'url': './assets/sounds/laugh1.mp3', 'button_label': 'Laugh 1'},
    {'url': './assets/sounds/laugh2.mp3', 'button_label': 'Laugh 2'},
    {'url': './assets/sounds/laughaudience.mp3', 'button_label': 'Laugh audience'},
    {'url': './assets/sounds/ohno1.mp3', 'button_label': 'Oh no'},
    {'url': './assets/sounds/ohno2.mp3', 'button_label': 'Oh no'},
    {'url': './assets/sounds/heywhathappened.mp3', 'button_label': 'What happened?'},
    {'url': './assets/sounds/crickets.mp3', 'button_label': 'Crickets'},
    {'url': './assets/sounds/ibelieve1.mp3', 'button_label': 'I believe I can'},
    {'url': './assets/sounds/imtrying1.mp3', 'button_label': 'Im trying'},
    {'url': './assets/sounds/explosion1.mp3', 'button_label': 'Explosion'},
    {'url': './assets/sounds/9000.mp3', 'button_label': 'Its over 9000!'},
    {'url': './assets/sounds/nani1.mp3', 'button_label': 'Nani??'},
    {'url': './assets/sounds/headshot1.wav', 'button_label': 'Head shot'},
    {'url': './assets/sounds/modem.mp3', 'button_label': 'Modem'},
    {'url': './assets/sounds/notfunny.mp3', 'button_label': 'Badam. Tsss.'},
    {'url': './assets/sounds/error1.mp3', 'button_label': 'Windows error'},
    {'url': './assets/sounds/ratata1.mp3', 'button_label': 'Ratatata'}
  ];

  // Start with buttonArraySmall (all the buttons), then allow array to be updated when user is using the filter
  const [bunchOfButtons, updateBunchOfButtons] = React.useState(buttonArraySmall);

  // Urm, I would pass props.sound to the require function instead of doing a huge if else loop. But I guess that's just not how it works?
  const playNativeAudio = async function(props){
    const soundObject = new Audio.Sound();
    try {
      if(props.button_label == 'Breh'){
        await soundObject.loadAsync(require('./assets/sounds/breh.mp3'));
    } else if(props.button_label == 'Dubstep'){
        await soundObject.loadAsync(require('./assets/sounds/dubstep1.mp3'));
    } else if(props.button_label == 'Easy!'){
        await soundObject.loadAsync(require('./assets/sounds/easy.mp3'));
    } else if(props.button_label == 'Huh? What the...'){
        await soundObject.loadAsync(require('./assets/sounds/huhwhatthe.mp3'));
    } else if(props.button_label == 'Mario Game Over'){
        await soundObject.loadAsync(require('./assets/sounds/marioded.mp3'));
    } else if(props.button_label == 'A few moments later'){
        await soundObject.loadAsync(require('./assets/sounds/afewmomentslater1.mp3'));
    } else if(props.button_label == 'Do it!'){
        await soundObject.loadAsync(require('./assets/sounds/doit1.mp3'));
    } else if(props.button_label == 'Why you runnin?'){
        await soundObject.loadAsync(require('./assets/sounds/whyareyourunning.mp3'));
    } else if(props.button_label == 'What the !!!'){
        await soundObject.loadAsync(require('./assets/sounds/wtbleep.mp3'));
    } else if(props.button_label == 'Yaaa!'){
        await soundObject.loadAsync(require('./assets/sounds/yaaaa1.mp3'));
    } else if(props.button_label == 'Happy kids'){
        await soundObject.loadAsync(require('./assets/sounds/yay1.mp3'));
    } else if(props.button_label == 'You better stop!'){
        await soundObject.loadAsync(require('./assets/sounds/youbetterstop.mp3'));
    } else if(props.button_label == 'Zombie'){
        await soundObject.loadAsync(require('./assets/sounds/zombie1.mp3'));
    } else if(props.button_label == 'Say what?'){
        await soundObject.loadAsync(require('./assets/sounds/saywhat.mp3'));
    } else if(props.button_label == 'Scream'){
        await soundObject.loadAsync(require('./assets/sounds/scream1.mp3'));
    } else if(props.button_label == 'Scream 2'){
        await soundObject.loadAsync(require('./assets/sounds/scream2.mp3'));
    } else if(props.button_label == 'Scream 3'){
        await soundObject.loadAsync(require('./assets/sounds/scream3.mp3'));
    } else if(props.button_label == 'Applause'){
        await soundObject.loadAsync(require('./assets/sounds/applause1.mp3'));
    } else if(props.button_label == 'Fatality'){
        await soundObject.loadAsync(require('./assets/sounds/fatality.mp3'));
    } else if(props.button_label == 'Toasty'){
        await soundObject.loadAsync(require('./assets/sounds/toasty.mp3'));
    } else if(props.button_label == 'Hadouken'){
        await soundObject.loadAsync(require('./assets/sounds/hadouken.mp3'));
    } else if(props.button_label == 'Burp'){
        await soundObject.loadAsync(require('./assets/sounds/burp1.mp3'));
    } else if(props.button_label == 'Fart'){
        await soundObject.loadAsync(require('./assets/sounds/fart1.mp3'));
    } else if(props.button_label == 'Sorry bro'){
        await soundObject.loadAsync(require('./assets/sounds/sorrybro.mp3'));
    } else if(props.button_label == 'Shots fired!'){
        await soundObject.loadAsync(require('./assets/sounds/shotsfired.mp3'));
    } else if(props.button_label == 'FBI. Open up!'){
        await soundObject.loadAsync(require('./assets/sounds/fbi.mp3'));
    } else if(props.button_label == 'Explosion'){
        await soundObject.loadAsync(require('./assets/sounds/brz1.mp3'));
    } else if(props.button_label == 'Shing'){
        await soundObject.loadAsync(require('./assets/sounds/shing1.mp3'));
    } else if(props.button_label == 'No!'){
        await soundObject.loadAsync(require('./assets/sounds/no1.mp3'));
    } else if(props.button_label == 'No no no no'){
        await soundObject.loadAsync(require('./assets/sounds/nononono.mp3'));
    } else if(props.button_label == 'Laugh 1'){
        await soundObject.loadAsync(require('./assets/sounds/laugh1.mp3'));
    } else if(props.button_label == 'Laugh 2'){
        await soundObject.loadAsync(require('./assets/sounds/laugh2.mp3'));
    } else if(props.button_label == 'Laugh audience'){
        await soundObject.loadAsync(require('./assets/sounds/laughaudience.mp3'));
    } else if(props.button_label == 'Oh no'){
        await soundObject.loadAsync(require('./assets/sounds/ohno1.mp3'));
    } else if(props.button_label == 'Oh no'){
        await soundObject.loadAsync(require('./assets/sounds/ohno2.mp3'));
    } else if(props.button_label == 'What happened?'){
        await soundObject.loadAsync(require('./assets/sounds/heywhathappened.mp3'));
    } else if(props.button_label == 'Crickets'){
        await soundObject.loadAsync(require('./assets/sounds/crickets.mp3'));
    } else if(props.button_label == 'I believe I can'){
        await soundObject.loadAsync(require('./assets/sounds/ibelieve1.mp3'));
    } else if(props.button_label == 'Im trying'){
        await soundObject.loadAsync(require('./assets/sounds/imtrying1.mp3'));
    } else if(props.button_label == 'Explosion'){
        await soundObject.loadAsync(require('./assets/sounds/explosion1.mp3'));
    } else if(props.button_label == 'Its over 9000!'){
        await soundObject.loadAsync(require('./assets/sounds/9000.mp3'));
    } else if(props.button_label == 'Nani??'){
        await soundObject.loadAsync(require('./assets/sounds/nani1.mp3'));
    } else if(props.button_label == 'Head shot'){
        await soundObject.loadAsync(require('./assets/sounds/headshot1.wav'));
    } else if(props.button_label == 'Modem'){
        await soundObject.loadAsync(require('./assets/sounds/modem.mp3'));
    } else if(props.button_label == 'Badam. Tsss.'){
        await soundObject.loadAsync(require('./assets/sounds/notfunny.mp3'));
    } else if(props.button_label == 'Windows error'){
        await soundObject.loadAsync(require('./assets/sounds/error1.mp3'));
    } else if(props.button_label == 'Ratatata'){
        await soundObject.loadAsync(require('./assets/sounds/ratata1.mp3'));
    }
      console.log(props.button_label);
      await soundObject.playAsync();
    } catch (error) {
      // An error occurred!
    }
  }
  
  const SoundButton = function(props) {
    return( <Button onPress={() => playNativeAudio(props)} title={props.button_label} /> );
  };

  const ButtonList = function(props){
    return(
      <View>
      {bunchOfButtons.map((data, i) => {
        return (<SoundButton key={i} style="neu button" button_label = {data.button_label} sound = {data.url} />) 
      })}
      </View>
    )
  }


  return(
    <View>
      <Button
        title="Play a sound 1"
        onPress={ () => {
                  const soundObject = new Audio.Sound();
                  try {
                    soundObject.loadAsync(require('./assets/sounds/breh.mp3'));
                    soundObject.playAsync();
                  } catch (error) {
                    console.log(error);
                  }  
                }}
      />
      <Button
        title="Play a sound 2"
        onPress={playNativeAudio}
      />
      <Button
        title="Play a sound 3"
        onPress={ async function(){ 
          const soundObject = new Audio.Sound();
          try {
            await soundObject.loadAsync(require('./assets/sounds/breh.mp3'));
            await soundObject.playAsync();
            // Your sound is playing!
          } catch (error) {
            // An error occurred!
          }
        }}
      />
      <ButtonList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});