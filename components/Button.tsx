import { Pressable, Text } from "react-native";
interface ButtonProps {
  title?: string;
  onPress?: () => void;
  color?: string;
  className?: string;
}
export default function Button({ title, onPress, color }: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      className="bg-blue-200 rounded-full p-4 m-2 items-center text-white-100"
    >
      <Text className=" text-white-100">{title}</Text>
    </Pressable>
  );
}
