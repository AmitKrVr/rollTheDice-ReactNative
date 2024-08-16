# Roll the Dice

This is a simple and interactive React Native application that allows users to roll a dice. Each roll of the dice produces a random result, displays an animation, triggers haptic feedback, and plays a sound. The history of the dice rolls is displayed in a grid format.

## Features

- **Dice Rolling Animation**: The dice rotates and scales to create an engaging visual effect.
- **Haptic Feedback**: Provides tactile feedback when the dice is rolled.
- **Sound Effect**: Plays a sound each time the dice is rolled.
- **History Tracking**: Displays a grid of previous dice roll results.

## Installation

### Prerequisites

- **Node.js**: Ensure that you have Node.js installed. This project requires Node.js version `>=18`.
- **React Native CLI**: This project uses React Native CLI, not Expo.

### Steps

1. **Clone the repository**:

   ```sh
   git clone https://github.com/amitkrvr/rollTheDice-ReactNative.git
   cd rollTheDice
   ```

2. **Install dependencies**:

   ```sh
   npm install
   ```

3. **Link the native dependencies** (if necessary):

   ```sh
   npx react-native link
   ```

4. **Run the project**:
   - For Android:
     ```sh
     npm run android
     ```
   - For iOS:
     ```sh
     npm run ios
     ```

## Usage

1. **Roll the Dice**: Tap the "Roll Dice" button to roll the dice. The result will be displayed in the center of the screen with a rotation animation.
2. **View History**: The results of previous dice rolls will appear in a grid below the dice. The results are displayed as numbers with a background color.

## Project Structure

- **App.tsx**: Main component that contains the logic for rolling the dice, playing the sound, and displaying the history.
- **assets/**: Contains the images of the dice faces used in the app.
- **styles/**: Contains the styles for various components.

## Dependencies

- **react-native-haptic-feedback**: Used to trigger haptic feedback on supported devices.
- **react-native-sound**: Used to play sound effects.
- **react**: The core React library.
- **react-native**: The core React Native library.

## Development

### Scripts

- **`npm run android`**: Run the app on an Android device/emulator.
- **`npm run ios`**: Run the app on an iOS device/simulator.
- **`npm run start`**: Start the Metro bundler.
- **`npm run lint`**: Run ESLint to check for code quality issues.
- **`npm run test`**: Run the test suite using Jest.

### Customization

- **Adding/Changing Sound**: Replace the `sound.mp3` file in the assets directory with your custom sound file.
- **Customizing Dice Faces**: Replace the images in the `assets/` directory to change the appearance of the dice faces.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by various dice rolling apps.
- Thanks to the open-source community for the libraries and tools used in this project.
