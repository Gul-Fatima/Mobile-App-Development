import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";


const APP_NAME = "Crib";
const DEVELOPER_NAME = "Your Name";

export default function AboutScreen() {
  return (
    <View className="flex-1 bg-gray-50 p-4">
      <View className="rounded-xl bg-white p-5">
        <Text className="text-2xl font-bold text-primary">{APP_NAME}</Text>

        <Text className="mt-2 text-gray-600">
          Find, save and list properties across Pakistan. Built with Expo Router and NativeWind
          for the mobile app development lab.
        </Text>

        <Text className="mt-5 text-gray-500">Developer</Text>
        <Text className="font-medium text-gray-900">Gul Fatima</Text>
      </View>

      <TouchableOpacity
        onPress={() => router.back()}
        className="mt-6 items-center rounded-xl bg-primary py-4">
        <Text className="font-bold text-white">Back to Settings</Text>
      </TouchableOpacity>
    </View>
  );
}
