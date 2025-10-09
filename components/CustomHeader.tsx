import { HeaderProps } from "@/type";

import { Text, View } from "react-native";
export default function CutomHeader({
  title,
  showBackButton,
  onBackPress,
  color,
  className,
}: HeaderProps) {
  return (
    <View className="px-4 py-3">
      <Text className="text-blue-100 font-bold text-[25px]">{title}</Text>
      
    </View>
  );
}
