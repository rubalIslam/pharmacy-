import React from "react"
import { StyleSheet, Image, SafeAreaView, View, Text } from "react-native"

const Header = () => {
    return(
        <SafeAreaView style={styles.header}>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        flexDirection: 'row',
        alignContent: "center",
        justifyContent: "center",
        backgroundColor:"black",
        padding: 0,
        height: 26
    }
})

export default Header;