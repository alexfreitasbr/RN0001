import { styles } from "./styles";

import {  Button } from "react-native";

export default function ButtomUI({label, action}) {
    return(
        <Button title={label} onPress={action} />
    )
}