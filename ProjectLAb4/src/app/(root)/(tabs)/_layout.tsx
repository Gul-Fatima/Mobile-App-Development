import { NativeTabs } from "expo-router/unstable-native-tabs";

/**
 * Tab bar for the app. Each `name` must exactly match a file name in this
 * folder without the extension, so name="index" -> (tabs)/index.tsx.
 *
 * On SDK 57 the SDK 54 snippet `import { NativeTabs, Icon, Label } from ...`
 * no longer works: Icon/Label/Badge are only reachable as properties of
 * NativeTabs.Trigger.
 */
export default function TabsLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="index">
        {/* sf = SF Symbols (iOS). drawable = the Android system icon name. */}
        <NativeTabs.Trigger.Icon sf="house.fill" drawable="ic_menu_home" />
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="search">
        <NativeTabs.Trigger.Icon sf="magnifyingglass" drawable="ic_menu_search" />
        <NativeTabs.Trigger.Label>Search</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="saved">
        <NativeTabs.Trigger.Icon sf="heart.fill" drawable="ic_menu_save" />
        <NativeTabs.Trigger.Label>Saved</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="profile">
        <NativeTabs.Trigger.Icon sf="person.fill" drawable="ic_menu_myplaces" />
        <NativeTabs.Trigger.Label>Profile</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>

      {/* "settings" matches the settings/ folder, whose own _layout.tsx is a Stack. */}
      <NativeTabs.Trigger name="settings">
        <NativeTabs.Trigger.Icon sf="gear" drawable="ic_menu_preferences" />
        <NativeTabs.Trigger.Label>Settings</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
