import { Redirect } from "expo-router";

/**
 * Entry route ("/"). For now it sends everyone straight to the tabs.
 * A later lab swaps this for an auth check: signed in -> tabs, else -> sign-in.
 *
 * The href names the route group explicitly so it resolves to the Home tab
 * inside (tabs) rather than back to this file.
 */
export default function Index() {
  return <Redirect href="/(root)/(tabs)" />;
}
