import { images } from "@/constants";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
export default function SearchBar() {
  return (
    <View className="w-[300px] h-12 flex-row items-center  bg-[#F3F4F7] rounded-lg border   mt-2">
      <TextInput
        className="flex-1 text-base font-medium text-[#0D1530]"
        placeholder="search"
        placeholderTextColor="#0D1530"
      />
      <TouchableOpacity
        className="pr-5"
        onPress={() => console.log("Search pressed")}
      >
        <Image
          source={images.search}
          className=" w-6 h-6 ml-2"
          resizeMode="contain"
          tintColor="#0D1530"
        />
      </TouchableOpacity>
    </View>
  );
}
