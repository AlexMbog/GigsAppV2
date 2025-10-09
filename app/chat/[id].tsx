import { HeaderProps } from "@/type";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";

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
  name,
  image,
  messages = [],
}: MessageViewProps) {
  return (
    <View className="flex-1 bg-[#F8F4F9]">
      <View className="flex-row items-center justify-between px-4 border-b border-blue-500 py-2">
        <Ionicons name="arrow-back-circle-outline" size={28} color={color} />
      </View>
    </View>
  );
}
