import VideoItem from "@/components/VideoComponent";
import { videos, videos2, videos3 } from "@/constants";
import { VideoProps } from "@/type";
import React, { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  ListRenderItemInfo,
  NativeScrollEvent,
  NativeSyntheticEvent,
  View,
} from "react-native";
const { height } = Dimensions.get("window");
const VIDEO_FEED: VideoProps[] = [...videos, ...videos2, ...videos3];
export default function discover() {
  const listRef = useRef<FlatList<VideoProps>>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const onMomentumScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetY = e.nativeEvent.contentOffset.y;
    const index = Math.round(offsetY / height);
    const clamped = Math.max(0, Math.min(VIDEO_FEED.length - 1, index));
    setActiveIndex(clamped);

    // keep snapping properly
    listRef.current?.scrollToIndex({ index: clamped, animated: true });
  };

  return (
    <View className="flex-1 bg-white-200">
      <FlatList
        ref={listRef}
        data={VIDEO_FEED}
        keyExtractor={(_, i) => i.toString()}
        ListHeaderComponent={<View></View>}
        renderItem={({ item, index }: ListRenderItemInfo<VideoProps>) => {
          return (
            <VideoItem
              item={item}
              isActive={index === activeIndex}
              muted={true}
            />
          );
        }}
        pagingEnabled={false}
        onMomentumScrollEnd={onMomentumScrollEnd}
        showsVerticalScrollIndicator={false}
        decelerationRate="fast"
        getItemLayout={(_, index) => ({
          length: height,
          offset: height * index,
          index,
        })}
        overScrollMode="never"
        windowSize={5}
        initialNumToRender={2}
        maxToRenderPerBatch={3}
        removeClippedSubviews={false}
      />
    </View>
  );
}
