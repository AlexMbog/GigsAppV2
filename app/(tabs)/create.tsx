import Button from "@/components/Button";
import CustomHeader from "@/components/CustomHeader";
import { postCategories } from "@/constants";
import { HeaderProps } from "@/type";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Create({ color = "#1A2B60" }: HeaderProps) {
  const [postText, setPostText] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [video, setVideo] = useState<string | null>(null);
  const [selected, setSelected] = useState<string>(postCategories[0]);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      quality: 1,
    });
    if (!result.canceled) {
      setImages([...images, ...result.assets.map((asset) => asset.uri)]);
    }
  };

  const pickVideo = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      quality: 1,
    });
    if (!result.canceled && result.assets.length > 0) {
      setVideo(result.assets[0].uri);
    }
  };

  const handlePost = () => {
    // Handle post submission logic here
    // postText, images, and video contain the data
  };

  return (
    <SafeAreaView className="flex-1 bg-[#F8F4F9] mt-0">
      <View className="flex-row items-center justify-between px-4 border-b border-blue-500">
        <Ionicons name="arrow-back-circle-outline" size={28} color={color} />
        <CustomHeader title="Create Post" color="#1A2B60" />
        <Feather name="more-vertical" size={24} color={color} />
      </View>

      <ScrollView className="pb-0" showsVerticalScrollIndicator={false}>
        <View className="">
          <View className="flex-row items-center justify-center">
            <Pressable className="bg-white  border-gray-100 rounded-2xl p-6 items-center mb-4 shadow-sm m-2 w-30 ">
              <Ionicons name="cloud-upload-outline" size={36} color="#6B21A8" />
              <Text className="mt-2 font-semibold text-gray-600">
                Upload Image
              </Text>
              {images.length > 0 && (
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  className="px-2"
                >
                  {images.map((uri, idx) => (
                    <Image
                      key={idx}
                      source={{ uri }}
                      className="w-24 h-24 rounded-xl mr-2"
                    />
                  ))}
                </ScrollView>
              )}
            </Pressable>
            <Pressable
              onPress={pickVideo}
              className="bg-white  border-gray-100 rounded-2xl p-6 items-center mb-4 shadow-sm m-2 w-30"
            >
              <Feather name="video" size={36} color="#6B21A8" />
              <Text className="mt-2 font-semibold text-gray-600">
                Upload Video
              </Text>
            </Pressable>

            {video && (
              <Text className="text-gray-500 ml-4">
                🎥 Video selected: {video.split("/").pop()}
              </Text>
            )}
          </View>
          <View className="ml-2 ">
            <Text className="text-gray-100">Choose Category</Text>
          </View>
          <FlatList
            horizontal
            data={postCategories}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => setSelected(item)}
                className={`px-4 py-2 ml-2 mb-6 border h-11 mt-2 rounded-full ${
                  selected === item ? "bg-blue-200" : "bg-gray-700"
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
          <TextInput
            placeholder="What's on your mind?"
            value={postText}
            onChangeText={setPostText}
            className="border border-gray-100 px-3 py-2 m-2 rounded-lg h-40 text-lg bg-white text-blue-100 text-left"
            multiline
            textAlignVertical="top"
          />

          <View className="flex-row items-center bg-white border  border-gray-100 rounded-xl px-3 py-2 m-2">
            <Feather name="shopping-bag" size={20} color="gray" />
            <TextInput placeholder="Add shop/store" className="flex-1 ml-2" />
            <Feather name="search" size={20} color="gray" />
          </View>
          <View className="flex-row items-center border bg-white  border-gray-100 rounded-xl px-3 py-2 m-2">
            <Feather name="calendar" size={20} color="gray" />
            <TextInput placeholder="Date needed" className="flex-1 ml-2" />
          </View>
          <View className="flex-row items-center border bg-white  border-gray-100 m-2 rounded-xl px-3 py-2">
            <MaterialCommunityIcons name="google-maps" size={24} color="gray" />
            <TextInput placeholder="location" className="flex-1 ml-2" />
          </View>

          <Button title="Submit Post" onPress={handlePost} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
