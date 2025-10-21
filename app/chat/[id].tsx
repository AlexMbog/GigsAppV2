import { Entypo, Feather, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
interface MessageViewProps {
  color: string;
  name: string | undefined;
  messages: any[];
}

export default function MessageView({
  color = "#1A2B60",
  name,

  messages = [],
}: MessageViewProps) {
  console.log("Name:", name);
  console.log("Messages:", messages);

  useRouter;
  const router = useRouter();
  return (
    <View className="flex-1 bg-[#F8F4F9]">
      <View className="flex-row px-4 border-b border-blue-500 mt-8 items-center justify-between py-2">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back-circle-outline" size={28} color={color} />
        </TouchableOpacity>
        <View>
          <Text>Title</Text>
        </View>
        <Feather name="more-vertical" size={24} color={color} />
      </View>
      <ScrollView className="p-4">
        {messages.length > 0 ? (
          messages.map((msg) => (
            <View key={msg.id} className="mb-3">
              <Text className="text-gray-800">{msg.text}</Text>
              <Text className="text-xs text-gray-400">{msg.timestamp}</Text>
            </View>
          ))
        ) : (
          <Text className="text-center text-gray-500 mt-5">
            No messages yet.
          </Text>
        )}
      </ScrollView>
      <View className="flex-row p-2 border-t border-blue-500 items-center mb-10">
        <View className="flex-row flex-1 items-center border border-blue-500 rounded-lg p-1 mr-4 bg-blue-500 justify-center">
          <Feather
            name="plus"
            size={20}
            color="#fff"
            className="bg-blue-300 rounded p-2"
          />
          <TextInput
            style={{ flex: 1 }}
            autoCapitalize="none"
            autoCorrect={false}
            placeholderTextColor="#FFF"
            className="rounded-lg flex-1"
          />
          <Entypo name="emoji-happy" size={20} color="#3F62CA" />
        </View>
        <Ionicons name="send-outline" size={28} color="#3F62CA" />
      </View>
    </View>
  );
}
