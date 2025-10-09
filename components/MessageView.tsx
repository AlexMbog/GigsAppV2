import { HeaderProps } from "@/type";
import { Feather, Ionicons } from "@expo/vector-icons";
import { FlatList, Image, Text, View } from "react-native";
import CustomHeader from "./CustomHeader";

interface MessageViewProps extends HeaderProps {
  id?: string | number;
  name?: string;
  image?: any;
  messages?: {
    id: string | number;
    text: string;
    sender: string;
    timestamp: string;
  }[];
}

export default function MessageView({
  color = "#1A2B60",
  title = "Chat",
  image,
  messages = [],
}: MessageViewProps) {
  return (
    <View className="flex-1 bg-[#F8F4F9]">
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 border-b border-blue-500 py-2">
        <Ionicons name="arrow-back-circle-outline" size={28} color={color} />
        <View className="flex-row items-center">
          {image && (
            <Image source={image} className="w-10 h-10 rounded-full mr-2" />
          )}
          <CustomHeader title={title} color={color} />
        </View>
        <Feather name="more-vertical" size={24} color={color} />
      </View>

      {/* Messages */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            className={`p-3 m-2 rounded-2xl max-w-[80%] ${
              item.sender === "me"
                ? "bg-blue-500 self-end"
                : "bg-gray-200 self-start"
            }`}
          >
            <Text
              className={`${
                item.sender === "me" ? "text-blue-200" : "text-gray-800"
              }`}
            >
              {item.text}
            </Text>
            <Text className="text-xs text-gray-500 mt-1">{item.timestamp}</Text>
          </View>
        )}
        contentContainerClassName="p-2"
      />
    </View>
  );
}
