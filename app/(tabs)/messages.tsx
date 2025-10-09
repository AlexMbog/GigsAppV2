import CustomHeader from "@/components/CustomHeader";
import SearchBar from "@/components/Search";
import { messages } from "@/constants";
import { HeaderProps } from "@/type";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function ({ color }: HeaderProps) {
  const router = useRouter();

  const handleMessage = (id: string) => {
    router.push(`/chat/${id}`);
    console.log("Message clicked:", id);
  };

  return (
    <SafeAreaView className="flex-1 bg-[#F8F4F9] mt-0">
      <View className="flex-row items-center justify-between px-4 border-b border-blue-500">
        <Ionicons name="arrow-back-circle-outline" size={28} color={color} />
        <CustomHeader title="Messages" color="#1A2B60" />
        <Feather name="more-vertical" size={24} color={color} />
      </View>
      <View className="flex-row items-center justify-between px-4 mt-2">
        <SearchBar />
        <AntDesign name="user-add" size={24} color={color} />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable onPress={() => handleMessage(item.id)}>
            <View className="flex-row px-4 py-2 m-2 ">
              <View className="rounded-full overflow-hidden">
                <Image source={item.image} className="w-16 h-16 rounded-full" />
              </View>

              <View className="ml-3 flex-1">
                <View className="flex-row justify-between">
                  <Text className="text-blue-200 font-semibold">
                    {item.name}
                  </Text>
                  <Text className="text-gray-400 text-xs self-start">
                    {item.time}
                  </Text>
                </View>
                <Text
                  className="text-gray-700 mt-1 flex-shrink"
                  numberOfLines={2}
                >
                  {item.lastMessage}
                </Text>
              </View>
            </View>
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
}
