import { CustomInputProps } from "@/type";
import React from "react";
import { Text, TextInput, View } from "react-native";

export default function CustomInput({
  placeholder = "Enter text",
  value,
  label,
  onChangeText,
  secureTextEntry = false,
  keyboardType = "default",
  leftIcon,
}: CustomInputProps) {
  return (
    <View className="w-full">
      {/* Only render label if provided */}
      {label && (
        <Text className="ml-2 mb-2 text-base font-semibold">{label}</Text>
      )}
      <View className="flex-row items-center border rounded-lg px-3 py-2 bg-blue-400 m-2">
        <TextInput
          style={{ flex: 1 }}
          autoCapitalize="none"
          autoCorrect={false}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          placeholder={placeholder}
          placeholderTextColor="#FFF"
        />
      </View>
    </View>
  );
}
