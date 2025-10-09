import { VideoProps } from "@/type";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useVideoPlayer, VideoView } from "expo-video";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width, height } = Dimensions.get("window");

type VideoItemProps = {
  item: VideoProps;
  isActive: boolean;
  muted?: boolean;
};

export default function VideoItem({
  item,
  isActive,
  muted = true,
}: VideoItemProps) {
  const player = useVideoPlayer(item.videoUrl, (player) => {
    player.loop = true;
  });
  const [isMuted, setIsMuted] = useState(muted);

  useEffect(() => {
    if (!player) return;
    if (isActive) player.play();
    else player.pause();
  }, [isActive, player]);

  const toggleMute = () => {
    setIsMuted((m) => !m);
    if (player) player.volume = isMuted ? 1 : 0;
  };

  return (
    <Pressable style={{ width, height, backgroundColor: "black" }}>
      <VideoView
        style={{ width: "100%", height: "100%" }}
        player={player}
        contentFit="cover"
      />

      {/* Right Action Bar */}
      <View className="absolute right-3 bottom-14 items-center space-y-6">
        <View className="items-center mb-4">
          <Ionicons
            name="heart-outline"
            size={28}
            color="#fff"
            className="rounded-lg p-2 bg-blue-200"
          />
          <Text className="text-white text-xs mt-1">2.3k</Text>
        </View>
        <View className="items-center mb-4">
          <Feather
            name="message-circle"
            size={26}
            color="#fff"
            className="rounded-lg p-2 bg-blue-200"
          />
          <Text className="text-white text-xs mt-1">1.2k</Text>
        </View>
        <View className="items-center">
          <EvilIcons
            name="share-google"
            size={32}
            color="#fff"
            className="rounded-lg p-2 bg-blue-200"
          />
          <Text className="text-white text-xs mt-1">500</Text>
        </View>
      </View>

      {/* Left Info */}
      <View className="absolute left-3 bottom-20">
        <Text className="text-white text-lg font-semibold">{item.title}</Text>
        <Text className="text-white">{item.caption}</Text>
        <View className="flex-row items-center mt-1">
          <EvilIcons name="location" size={20} color="white" />
          <Text className="text-white ml-1">{item.location}</Text>
        </View>
        <View>
          <Image source={item.image} className="w-10 h-10 rounded-full mt-2" />
          <Text className="text-white ml-1">{item.name}</Text>
        </View>
      </View>

      {/* Mute Button */}
      <TouchableOpacity
        onPress={toggleMute}
        className="absolute right-4 top-16 bg-black/50 p-2 rounded-full"
      >
        <Ionicons
          name={isMuted ? "volume-mute" : "volume-high"}
          size={22}
          color="#fff"
        />
      </TouchableOpacity>
    </Pressable>
  );
}
