import { View, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import React, { ComponentPropsWithoutRef, useState } from "react";
import { icons } from "@/constants";
import { router, usePathname } from "expo-router";

interface SearchInputProps {
  initialQuery?: string;
}

const SearchInput = ({ initialQuery }: SearchInputProps) => {

  const pathname = usePathname();
  const [query, setQuery] = useState(initialQuery || '');

  return (
    <View className="border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary flex-row items-center space-x-4">
      <TextInput
        className="flex-1 w-full text-white font-pregular text-base mt-0.5"
        value={query}
        placeholder="Search for a video topic"
        placeholderTextColor="#CDCDE0"
        onChangeText={(e) => setQuery(e)}
      />
      <TouchableOpacity onPress={()=> {
        if(!query) return Alert.alert('Missing query', "Please input something to search results across database")
        if(pathname.startsWith('/search')) router.setParams({ query })
        else router.push(`/search/${query}`)
      }}>
        <Image
          source={Image.resolveAssetSource(icons.search)}
          className="w-5 h-5"
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
