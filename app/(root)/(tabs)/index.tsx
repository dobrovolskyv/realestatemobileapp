import {View, Text} from 'react-native';
import {Link} from "expo-router";


export default function HomeScreen() {
    return (
        <View>
            <Text className="font-bold my-10 font-rubik text-3xl">Welcome back</Text>
            <Link href={"/sign-in"}>Sign in</Link>
            <Link href={"/explore"}>Explore</Link>
            <Link href={"/profile"}>Profile</Link>
            <Link href={"/properties/1"}>Property</Link>

        </View>
    );
}


