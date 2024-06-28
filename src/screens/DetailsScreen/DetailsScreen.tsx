import React from "react";
import { Text, View } from "react-native";
import I18n from "../../util/i18n";

const DetailsScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>{I18n.t('details')}</Text>
        </View>
    );
}

export default DetailsScreen;