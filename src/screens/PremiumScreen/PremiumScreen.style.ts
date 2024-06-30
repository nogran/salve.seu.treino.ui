import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  viewCenter: {
    alignItems: 'center',
    marginBottom: 30,
  },
  viewPremium: {
    flexDirection: 'row',
    marginLeft: 30,
    marginRight: 40,
    marginBottom: 20,
  },
  imagePremium: {
    width: 30,
    height: 30,
  },
  textPremium: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  },
});

export default styles;
