import { Button, Text, View } from "react-native";
import I18n from "../../util/i18n";

const WorkoutScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>{I18n.t('workout')}</Text>
            <Button
                title="Go to Muscle Groups"
                onPress={() => navigation.navigate('MuscleGroups')}
            />
        </View>
    );
}

export default WorkoutScreen;