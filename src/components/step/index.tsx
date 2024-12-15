import {Text, View } from "react-native"

import { colors } from "@/styles/theme"
import { s } from "./styles"

export function Step(props){
    return(
        <View style={s.container}>
            <View style={s.details}>
            <Text style={s.title}>{props.title}</Text>
            <Text style={s.description}>{props.description}</Text>
            </View>
        </View>
    )
}
