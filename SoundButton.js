import React from 'react'
import { View, Button, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';


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
    return( 
        <View style={styles.someButton}>
            <Button onPress={() => playNativeAudio(props)} title={props.button_label} /> 
        </View>
    );
};

const styles = StyleSheet.create({
    someButton: { 
        width: '30%', 
        margin: '1%', 
        height: '100%' 
    }
});

export default SoundButton