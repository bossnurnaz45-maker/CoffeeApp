import { StyleSheet, Text, ImageBackground, View, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function OnboardingScreen() {
  const handlePress = () => {
    console.log('Get started pressed!');
   
  };

  return (
    <View style={styles.wrapper}>
      <ImageBackground
        source={require('../../assets/imgBack.png')}
        style={styles.background}
        resizeMode='cover'>
        <SafeAreaView style={styles.container} edges={['top', 'bottom', 'left', 'right']}>
          <Image
            source={require('../../assets/coffeePic.png')}
            style={styles.coffeeImage}
            resizeMode='contain'
          />
          <Text style={styles.textTitle}>Coffee so good,
            your taste buds
            will love it
          </Text>

          <Text style={styles.textDescription}>
            The best grain, the finest roas, the most powerful flavor.
          </Text>

          <TouchableOpacity
            style={styles.btn}
            onPress={handlePress}
            activeOpacity={0.8}>
            <Text style={styles.btntext}>Get started</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#B08149',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
    width: 170,
    height: 91
  },
  coffeeImage: {
    width: 453,
    height: 302,
    marginBottom: 20
  },
  textDescription: {
    fontWeight: '500',
    fontSize: 14,
    textAlign: 'center',
    color: '#FFFFFF',
    width: 210
  },
  btn: {
    width: 235,
    height: 54,
    backgroundColor: '#00512c',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 62
  },
  btntext: {
    fontWeight: '600',
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center'
  }
});

