import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import GlobalStyles from '../../styles/GlobalStyles';
import styles from './PremiumScreen.style';
import I18n from '../../util/i18n';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ButtonApp from '../../components/ButtonApp';

const imgFavorite = require('../../assets/images/favorite.png');

const comprar = () => {
  console.log('Comprar...');
};

const restaurar = () => {
  console.log('Restaurar...');
};

const PremiumScreen = ({navigation}) => {
  return (
    <ScrollView style={{backgroundColor: GlobalStyles.colorWhite.color}}>
      <View style={styles.container}>
        <View style={styles.viewCenter}>
          <Text style={GlobalStyles.title}>{I18n.t('premium_advantages')}</Text>
        </View>

        <View style={styles.viewPremium}>
          <Image style={styles.imagePremium} source={imgFavorite} />
          <Text style={styles.textPremium}> {I18n.t('no_ads')};</Text>
        </View>

        <View style={styles.viewPremium}>
          <Image style={styles.imagePremium} source={imgFavorite} />
          <Text style={styles.textPremium}> {I18n.t('just_one_fee')}.</Text>
        </View>

        <ButtonApp text="be_premium" icon="star" action={() => comprar()} />

        <ButtonApp
          text="restore_purchase"
          icon="user"
          action={() => restaurar()}
        />
      </View>
    </ScrollView>
  );
};

export default PremiumScreen;
