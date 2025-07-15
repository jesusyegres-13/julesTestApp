import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  TextInput,
  Button,
  Text,
  Provider as PaperProvider,
  DefaultTheme,
} from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#87CEEB',
    accent: '#FFD700',
    background: '#F5F5DC',
    text: '#333333',
    placeholder: '#a9a9a9',
  },
  fonts: {
    ...DefaultTheme.fonts,
    regular: {
      fontFamily: 'Nunito-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Nunito-SemiBold',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Nunito-Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Nunito-ExtraLight',
      fontWeight: 'normal',
    },
  },
};

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDoctor, setIsDoctor] = useState(false);

  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={styles.container}>
        <View style={styles.topSection}>
          <Text style={styles.title}>GentleSteps</Text>
          <Text style={styles.subtitle}>Play. Heal. Grow.</Text>
        </View>
        <View style={styles.form}>
          <TextInput
            label="Email or Username"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            mode="outlined"
            theme={{ roundness: 25 }}
          />
          <TextInput
            label="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
            mode="outlined"
            theme={{ roundness: 25 }}
          />
          <Button
            mode="contained"
            onPress={() => console.log('Logged in')}
            style={styles.button}
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonLabel}
            icon="arrow-right"
          >
            Login
          </Button>
        </View>
        <View style={styles.bottomSection}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
          <View style={styles.toggleContainer}>
            <Button
              mode={isDoctor ? 'outlined' : 'contained'}
              onPress={() => setIsDoctor(false)}
              style={[styles.toggleButton, !isDoctor && styles.activeToggle]}
              labelStyle={[
                styles.toggleLabel,
                !isDoctor && styles.activeToggleLabel,
              ]}
            >
              Parent
            </Button>
            <Button
              mode={!isDoctor ? 'outlined' : 'contained'}
              onPress={() => setIsDoctor(true)}
              style={[styles.toggleButton, isDoctor && styles.activeToggle]}
              labelStyle={[
                styles.toggleLabel,
                isDoctor && styles.activeToggleLabel,
              ]}
            >
              Doctor
            </Button>
          </View>
          <Text style={styles.createAccount}>Create Account</Text>
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  topSection: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 48,
    fontFamily: 'PlayfairDisplay-Bold',
    color: theme.colors.primary,
  },
  subtitle: {
    fontSize: 18,
    fontFamily: 'Nunito-Regular',
    color: theme.colors.text,
    marginTop: 10,
  },
  form: {
    width: '100%',
  },
  input: {
    marginBottom: 15,
    backgroundColor: '#FFFFFF',
  },
  button: {
    marginTop: 10,
    borderRadius: 25,
    elevation: 2,
  },
  buttonContent: {
    height: 50,
  },
  buttonLabel: {
    fontSize: 18,
    fontFamily: 'Nunito-SemiBold',
  },
  bottomSection: {
    alignItems: 'center',
    marginTop: 20,
  },
  forgotPassword: {
    color: theme.colors.accent,
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
    marginBottom: 20,
  },
  toggleContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  toggleButton: {
    borderRadius: 20,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  activeToggle: {
    backgroundColor: theme.colors.primary,
  },
  toggleLabel: {
    color: theme.colors.primary,
    fontFamily: 'Nunito-SemiBold',
  },
  activeToggleLabel: {
    color: '#FFFFFF',
  },
  createAccount: {
    color: theme.colors.text,
    fontFamily: 'Nunito-Regular',
    fontSize: 16,
  },
});

export default LoginScreen;
