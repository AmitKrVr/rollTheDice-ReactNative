import React, { useState, useRef } from 'react';
import {
    Image,
    ImageSourcePropType,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Animated,
    FlatList,
} from 'react-native';
import ReactNativeHapticFeedback from "react-native-haptic-feedback";
import Sound from 'react-native-sound';

import DiceOne from "../assets/dice-1.png";
import DiceTwo from "../assets/dice-2.png";
import DiceThree from "../assets/dice-3.png";
import DiceFour from "../assets/dice-4.png";
import DiceFive from "../assets/dice-5.png";
import DiceSix from "../assets/dice-6.png";

const diceImages = [DiceOne, DiceTwo, DiceThree, DiceFour, DiceFive, DiceSix];

const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
};

type DiceProps = {
    imageUrl: ImageSourcePropType;
    animatedValue: Animated.Value;
};

const Dice = ({ imageUrl, animatedValue }: DiceProps): JSX.Element => {
    const rotation = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', `${Math.floor(Math.random() * 360) + 360}deg`],
    });

    const scale = animatedValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [1, 1.2, 1],
    });

    return (
        <Animated.View style={{
            transform: [
                { rotate: rotation },
                { scale: scale }
            ]
        }}>
            <Image style={styles.diceImage} source={imageUrl} />
        </Animated.View>
    );
};

const App = () => {
    const [diceImage, setDiceImage] = useState(DiceOne);
    const [history, setHistory] = useState<number[]>([]);
    const animatedValue = useRef(new Animated.Value(0)).current;

    const playSound = () => {
        const diceSound = new Sound('sound.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('Failed to load the sound', error);
                return;
            }
            diceSound.play(() => diceSound.release());
        });
    };

    const rollTheDiceOnTap = () => {
        // Trigger haptic feedback
        ReactNativeHapticFeedback.trigger("impactLight", options);
        playSound();

        Animated.timing(animatedValue, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start(() => {
            animatedValue.setValue(0);
            const randomNumber = Math.floor(Math.random() * 6) + 1;
            setDiceImage(diceImages[randomNumber - 1]);
            setHistory([randomNumber, ...history]);
        });
    };

    return (
        <View style={styles.container}>
            <Dice imageUrl={diceImage} animatedValue={animatedValue} />

            <TouchableOpacity
                onPress={rollTheDiceOnTap}
                style={styles.diceContainer}
            >
                <Text style={styles.rollDiceBtnText}>Roll Dice</Text>
            </TouchableOpacity>

            <FlatList
                data={history}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.historyItem}>
                        <Text style={styles.historyText}>{item}</Text>
                    </View>
                )}
                contentContainerStyle={styles.historyContainer}
                numColumns={10}


            />
        </View>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EAF0F1',
        paddingTop: 50,

    },
    diceContainer: {
        marginTop: 60,
        backgroundColor: "#4834DF",
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 40,
    },
    diceImage: {
        width: 200,
        height: 200,
    },
    rollDiceBtnText: {
        fontSize: 16,
        color: '#FFFFFF',
        fontWeight: '700',
        textTransform: 'uppercase',
    },
    historyContainer: {
        marginTop: 30,
        paddingHorizontal: 15,
    },
    historyItem: {
        margin: 2,
    },
    historyText: {
        fontSize: 18,
        backgroundColor: '#192A56',
        color: '#FFFFFF',
        paddingHorizontal: 10,
        paddingVertical: 5,
        textAlign: 'center',
        borderRadius: 5,
    },
});
