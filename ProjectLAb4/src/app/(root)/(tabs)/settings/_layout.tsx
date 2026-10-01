import { Stack } from "expo-router";

/**
 * Exercise 2 — the Settings tab is a nested Stack.
 *
 * The tab bar lives in (tabs)/_layout.tsx. Putting a Stack *inside* the tab
 * means Settings and About share that one tab, and About can be pushed on top
 * of Settings with a normal back gesture — the pattern the lab describes for
 * detail screens.
 */
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
