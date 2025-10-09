import { categories } from "@/constants";
import { useState } from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";
export default function CategoryTabs() {
  const [selected, setSelected] = useState("All");

  return (
    <FlatList
      horizontal
      data={categories}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => setSelected(item)}
          className={`px-4 py-2 ml-3 mb-6 border h-11 mt-2 rounded-full ${
            selected === item ? "bg-blue-100" : "bg-gray-700"
          }`}
        >
          <Text
            className={`font-medium ${
              selected === item ? "text-white-100 " : "text-blue-200"
            }`}
          >
            {item}
          </Text>
        </TouchableOpacity>
      )}
      showsHorizontalScrollIndicator={false}
    />
  );
}
