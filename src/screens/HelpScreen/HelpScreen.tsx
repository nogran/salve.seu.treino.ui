import { Button, ScrollView, Text, View } from "react-native";
import I18n from "../../util/i18n";
import GlobalStyles from "../../styles/GlobalStyles";
import styles from "../PremiumScreen/PremiumScreen.style";

const SettingsScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={{ backgroundColor: GlobalStyles.colorWhite.color }}>
                <View style={styles.container}>
                    <Text style={GlobalStyles.title}>{I18n.t('about')}</Text>
                    <Text style={GlobalStyles.paragraph}>{I18n.t('about_text_1')}</Text>
                    <Text style={GlobalStyles.title}>{I18n.t('help')}</Text>
                    <Text style={GlobalStyles.subtitle}>{I18n.t('home_screen')}</Text>
                    <Text style={GlobalStyles.paragraph}>
                        {I18n.t('about_home_screen')}
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
}

export default SettingsScreen;