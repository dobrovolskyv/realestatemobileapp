import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useLocalSearchParams, usePathname, router } from 'expo-router'
import icons from '@/constants/icons'
import { useDebouncedCallback } from "use-debounce"


export default function Search() {
    const path = usePathname()
    const params = useLocalSearchParams<{ query?: string }>()
    const [search, setSearch] = useState(params.query || '')

    //делаем запрос с задеркой в зависимости от роутера
    const debouncedSearch = useDebouncedCallback((text: string) => {
        router.setParams({ query: text });
    }, 500)

    const handleSearch = (text: string) => {
        setSearch(text)
        debouncedSearch(text)
    }
    return (
        <View className='flex flex-row items-center justify-between w-full rounded-lg bg-slate-700 border border-primary-100 mt-5 py-2 px-4'>
            <View className='flex-1 flex flex-row items-center justify-start z-50 '>
                <Image source={icons.search} className='size-5' />
                <TextInput
                    value={search}
                    onChangeText={handleSearch}
                    placeholder='Search for a property'
                    className='text-2xl font-rubik text-black-300 ml-2 flex-1'
                />
            </View>
            <TouchableOpacity>
                <Image source={icons.filter} className='size-5' />
            </TouchableOpacity>
        </View>
    )
}

