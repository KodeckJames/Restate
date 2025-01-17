import { Text, View } from 'react-native'
import { Link } from 'expo-router'
import { useRouter } from 'expo-router'

export default function Index() {
  const router = useRouter()
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text className="text-red-500 text-2xl font-bold">Hello</Text>
    </View>
  )
}
