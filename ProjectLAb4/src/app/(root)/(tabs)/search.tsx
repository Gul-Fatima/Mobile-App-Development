
import { Alert, FlatList, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const products = [
  { id: "1", name: "Laptop", category: "Electronics", price: 120000 },
  { id: "2", name: "Headphones", category: "Accessories", price: 5000 },
  { id: "3", name: "Smartphone", category: "Electronics", price: 80000 },
  { id: "4", name: "T-Shirt", category: "Clothing", price: 1500 },
  { id: "5", name: "Backpack", category: "Bags", price: 3000 },
  { id: "6", name: "Wristwatch", category: "Accessories", price: 4500 },
  { id: "7", name: "Keyboard", category: "Electronics", price: 2500 },
  { id: "8", name: "Shoes", category: "Footwear", price: 6000 },
];

export default function SearchScreen() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50 p-4">
      <Text className="text-2xl font-bold mb-4">Products</Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="bg-white p-4 mb-3 rounded-xl shadow"
            onPress={() =>
              Alert.alert(item.name, `Price: Rs. ${item.price}`)
            }
          >
            <Text className="text-lg font-bold">{item.name}</Text>
            <Text className="text-gray-500">{item.category}</Text>
            <Text className="text-primary font-bold mt-2">
              Rs. {item.price}
            </Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}