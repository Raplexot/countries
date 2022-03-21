import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import React from 'react'
import { Countries } from '../types'

export default function Country(country: Countries) {
    return (
        <View>
            <TouchableOpacity onPress={() => Actions.pop()}>
                <Text style={{ fontSize: 20, marginLeft: 10 }}>Back</Text>
            </TouchableOpacity>
            <View style={styles.container}>
                <Text style={styles.text}>
                    {country.flag}
                    {country.altSpellings[1]}
                </Text>
                <Text style={styles.text}>Capital:{country.capital}</Text>
                <Text style={styles.text}>Population:{country.population}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    text: {
        fontSize: 30,
    },
})
