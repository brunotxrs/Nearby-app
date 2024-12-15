import { TouchableOpacity, TouchableOpacityProps, Text, TextProps } from "react-native"

import { s } from "./styles";
import { colors } from "@/styles/theme";

function Button({ children }: TouchableOpacityProps){
    // TouchableOpacity ele faz o que coloca dentro dele uma area de toque ele faz o efeito de opacidade
    return( <TouchableOpacity style={s.container} activeOpacity={0.6}>{children}</TouchableOpacity>

    )
}
function Title({children}: TextProps){
    return(<Text style={s.title}>{children}</Text>)
}


Button.Title = Title

export  { Button }