import { FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

/** Sample data. Later labs replace this with rows from the database. */
const properties = [
  { id: "1", title: "Sea View Apartment", city: "Karachi", price: 8500000 },
  { id: "2", title: "Garden Villa", city: "Lahore", price: 25000000 },
  { id: "3", title: "City Studio", city: "Islamabad", price: 4200000 },
];

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="p-4">
        <Text className="text-2xl font-bold text-primary">Find your next home</Text>

        <TextInput
          placeholder="Search city"
          placeholderTextColor="#9CA3AF"
          className="mt-3 rounded-lg border border-gray-200 p-3"
        />

        <TouchableOpacity
          onPress={() => alert("Searching...")}
          className="mt-3 items-center rounded-xl bg-primary py-4">
          <Text className="font-bold text-white">Search</Text>
        </TouchableOpacity>

        {/* FlatList is virtualised: only the visible cards are created. */}
        <FlatList
          data={properties}
          keyExtractor={(item) => item.id}
          contentContainerClassName="pt-4"
          renderItem={({ item }) => (
            <View className="mb-3 rounded-xl bg-white p-4">
              <Text className="font-bold text-gray-900">{item.title}</Text>
              <Text className="text-gray-600">{item.city}</Text>
              <Text className="mt-1 text-accent">Rs {item.price}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
