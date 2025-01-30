import { Text, View, Image } from 'react-native'
import { Link } from 'expo-router'
import { useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images'
import icons from '@/constants/icons'
import Search from '@/components/Search'

export default function Index() {
  const router = useRouter()
  return (
    <SafeAreaView className="bg-white h-full">
      <View className=" px-5">
        <View className="flex flex-row items-center justify-between mt-5">
          <View className=" flex flex-row items-center">
            <Image source={images.avatar} className="size-12 rounded-full" />
            <View className="flex flex-col items-start ml-2 justify-center">
              <Text className=" text-xs font-rubik text-black-100">
                Good Morning
              </Text>
              <Text className=" text-base font-rubikMedium text-black-300">
                JJ
              </Text>
            </View>
          </View>
          <Image source={icons.bell} className="size-6" />
        </View>
      </View>
      <Search />
    </SafeAreaView>
  )
}
