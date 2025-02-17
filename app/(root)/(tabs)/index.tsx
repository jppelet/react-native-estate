import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function Index() {
    const id = 1;
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text className="font-bold my-10 font-rubik text-3xl">
                Welcome do ReState
            </Text>
            <Link href="/sign-in">Sign In</Link>
            <Link href="/explore">Explore</Link>
            <Link href="/profile">Profile</Link>
            <Link href="/properties/1">Property</Link>
        </View>
    );
}
