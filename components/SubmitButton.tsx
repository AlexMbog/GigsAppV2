import { CustomButtonProps } from "@/type";
import cn from "clsx";
import React from "react";
import { Pressable, Text } from "react-native";
export default function SubmitButton({
  title,
  onPress,
  className,
  disabled = false,
}: CustomButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      className={cn(
        `rounded-2xl px-8 py-3 m-2 bg-blue-300 items-center justify-center w-[346px] h-16`,
        disabled && "bg-gray-400",
        className
      )}
    >
      <Text
        className={cn(
          " text-white font-semibold text-base",
          disabled && "text-teal-100"
        )}
      >
        {title}
      </Text>
    </Pressable>
  );
}
