import { View, Text } from 'react-native'
import React from 'react'

const HeaderFilter = () => {
  return (
    <View>
         <View className=" justify-between">
        <View className="mt-8 pt-4 px-4 border-b-white-200 bg-white-200 ">
          <Text className="text-blue-100 font-bold text-[24px]">Discover</Text>
        </View>
      </View>
      <View className="flex-row items-center justify-center gap-3">
        <SearchBar />
        <SimpleLineIcons
          name="equalizer"
          size={24}
          color="black"
          className="rotate-90"
        />
      </View>
      <Filter />
    </View>
  )
}

export default HeaderFilter