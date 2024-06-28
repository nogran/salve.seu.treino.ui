import React from "react";
import { Button, Text, View } from "react-native";
import I18n from "../../util/i18n";

const ExerciseScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>{I18n.t('exercise')}</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}

export default ExerciseScreen;