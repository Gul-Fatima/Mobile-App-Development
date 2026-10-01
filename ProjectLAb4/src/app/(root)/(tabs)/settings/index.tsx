import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function SettingsScreen() {
  return (
    <View className="flex-1 gap-3 bg-gray-50 p-4">
      <Link href="/settings/about" asChild>
        <TouchableOpacity className="flex-row items-center justify-between rounded-xl bg-white p-4">
          <Text className="font-medium text-gray-900">About this app</Text>
          <Text className="text-lg text-gray-400">›</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
