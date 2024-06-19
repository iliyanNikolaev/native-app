import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useWarmUpBrowser } from '@/hooks/useWarmUpBrowser';
import * as WebBrowser from "expo-web-browser";
import React from 'react'
import { useOAuth } from '@clerk/clerk-expo';
import { Colors } from '@/constants/Colors';

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  useWarmUpBrowser();

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Text style={styles.txt}>Let's get started</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    btn: {
        backgroundColor: Colors.PRIMARY,
        padding: 12,
        borderRadius: 12
    },
    txt: {
        color: 'white', 
        fontSize: 24
    }
});
