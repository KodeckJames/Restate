import { Text, View } from "react-native";
import { Link } from "expo-router";
import { useRouter } from "expo-router";


export default function Index() {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href="/sign-in">Sign In</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/explore">Explore</Link>
      <Link href="/properties/[id]">Property</Link>
    </View>
  );
}
