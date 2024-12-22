import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { Link } from "expo-router";
import images from '@/constants/images';
import icons from '@/constants/icons';
import Search from '@/components/Search';
import { Card, FeaturedCard } from '@/components/Cards';
import Filters from '@/components/Filters';


export default function HomeScreen() {
    return (
        <SafeAreaView className='bg-white h-full'>
            <View className="px-5">
                <View className='flex flex-row items-center justify-between mt-5'>
                    <View className='flex flex-row items-center'>
                        <Image source={images.avatar} className='size-14 rounded-full' />
                        <View className='flex flex-col items-start ml-2 justify-center'>
                            <Text className='text-xs font-rubik text-black-100'>Good Morning</Text>
                            <Text>My lord</Text>
                        </View>
                    </View>
                    <Image source={icons.bell} className='size-5' />
                </View>

                <Search />

                <View className='my-5'>
                    <View className='flex flex-row items-center justify-between'>
                        <Text className='text-xl font-rubik-bold text-black-300'>
                            Featured
                        </Text>
                        <TouchableOpacity>
                            <Text className='text-base font-rubik text-primary-300'>View all</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View className="mt-5">
                    <View className="flex flex-row items-center justify-between">
                        <Text className="text-xl font-rubik-bold text-black-300">
                            Our Recommendation
                        </Text>
                        <TouchableOpacity>
                            <Text className="text-base font-rubik-bold text-primary-300">
                                See all
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <Filters />
                </View>
            </View>


        </SafeAreaView>
    );
}


