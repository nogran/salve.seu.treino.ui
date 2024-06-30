import {StyleSheet} from 'react-native';
import GlobalStyles from '../../styles/GlobalStyles';

const styles = StyleSheet.create({
  botaoCentralizado: {
    backgroundColor: GlobalStyles.colorActive.color,
    height: 60,
    width: 300,
    borderRadius: 10,
    margin: 10,
    alignSelf: 'center',
  },
  innerViewbotaoCentralizado: {
    flexDirection: 'row',
    fontSize: 50,
    margin: 10,
    marginLeft: 15,
    color: 'white',
  },
  textoBotaoCentralizado: {
    alignSelf: 'center',
    fontSize: 20,
    color: '#FFF',
    fontFamily: 'Montserrat-Bold',
  },
});

export default styles;