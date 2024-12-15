import {Text, View } from "react-native"

import { colors } from "@/styles/theme"
import { s } from "./styles"

export function Step(){
    return(
        <View style={s.container}>
            <View style={s.details}>
            <Text style={s.title}>Titulo</Text>
            <Text style={s.description}>Descrição ...</Text>
            </View>
        </View>
    )
}
