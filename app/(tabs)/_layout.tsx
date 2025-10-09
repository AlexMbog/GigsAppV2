import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import { Platform } from "react-native";
export default function Tabslayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: "",
          height: 80,
        },
        headerTintColor: "#C1CFDA",
        headerTitleAlign: "center",
        tabBarStyle: {
          backgroundColor: "white",
          borderTopWidth: 0,
          height: 90,
          borderRadius: 2,
        },
        tabBarActiveTintColor: "#1A2B60",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          title: "discover",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="search-outline"
              size={24}
              color={color}
              className="absolute"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <AntDesign name="plus-circle" size={24} color={color} />
          ),
          tabBarStyle: Platform.select({
            ios: {
              position: "absolute",
            },
            default: {},
          }),
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: "messages",
          headerShown : false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="envelope-o" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "profile",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
