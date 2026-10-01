import { Stack } from "expo-router";


export default function SettingsLayout() {
  return (
    <Stack
      screenOptions={{
        headerTintColor: "#0E4D92",
        headerStyle: { backgroundColor: "#FFFFFF" },
      }}>
      <Stack.Screen name="index" options={{ title: "Settings" }} />
      <Stack.Screen name="about" options={{ title: "About" }} />
    </Stack>
  );
}
