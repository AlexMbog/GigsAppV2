import CustomHeader from "@/components/CustomHeader";
import { gigs, musicians } from "@/constants";
import { HeaderProps } from "@/type";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import React from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App({ color = "#1A2B60" }: HeaderProps) {
  const router = useRouter();

  const handleMessage = (id: string) => {
    router.push("/(tabs)/messages");
  };
  return (
    <SafeAreaView className="flex-1 bg-[#F8F4F9] mt-0">
      <View className="flex-row items-center justify-between px-2 border-b border-blue-500  ">
        <CustomHeader title="Gigs" color="#1A2B60" />
        <View className="flex-row  gap-4 border-blue-500 rounded-lg p-1">
          <Pressable>
            <Ionicons name="search-outline" size={28} color={color} />
          </Pressable>
          <Pressable onPress={() => handleMessage("header")}>
            <Feather name="message-circle" size={26} color={color} />
          </Pressable>
        </View>
      </View>
      <View className="mt-2">
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={musicians}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => {
            return (
              <View className="ml-2">
                <Pressable className="items-center mr-2 ">
                  <Image
                    source={item.image}
                    className="w-20 h-20 rounded-full"
                  />
                  <Text className="text-blue-100 ">{item.name}</Text>
                </Pressable>
              </View>
            );
          }}
        />
      </View>
      <View className="">
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={gigs}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => {
            return (
              <View className="flex-1 border border-blue-500 m-2 rounded-t-xl mt-2 ">
                <View className="p-2 flex-row ">
                  <Image
                    source={item.image}
                    className="w-10 h-10 rounded-full"
                  />
                  <View className="flex-1 flex-row justify-between px-2 pt-2">
                    <Text>{item.name}</Text>
                    <Feather name="more-vertical" size={24} color="blue" />
                  </View>
                </View>
                <View className="flex-1 flex-row justify-between px-2 ">
                  <Text className="text-gray-100">{item.location}</Text>

                  <Text className="text-gray-100">{item.time}</Text>
                </View>
                <Pressable className="flex-1  bg-gray-800 overflow-hidden">
                  <Image source={item.image} className="w-full h-[450px] " />
                </Pressable>
                <View className="flex-1">
                  <View className="flex-1 flex-row  ml-2 justify-between">
                    <View>
                      <Ionicons
                        name="heart-outline"
                        size={24}
                        color="gray"
                        className="rounded-lg p-2"
                      />
                    </View>

                    <View>
                      <Feather
                        name="message-circle"
                        size={24}
                        color="gray"
                        className="rounded-lg p-2"
                      />
                    </View>
                    <View className="">
                      <EvilIcons
                        name="share-google"
                        size={32}
                        color="gray"
                        className="rounded-lg p-2"
                      />
                    </View>
                    <View className="">
                      <MaterialIcons
                        name="save-alt"
                        size={24}
                        color="gray"
                        className="rounded-lg p-2"
                      />
                    </View>
                  </View>
                  <View className="ml-4">
                    <Text className="text-blue-100  mt-2 font-semibold">
                      {item.title}
                    </Text>
                    <Text className="text-blue-100 ">{item.subtitle}</Text>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}
