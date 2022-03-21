import React, { useCallback, useEffect, useState } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
} from 'react-native'
import { Header as HeaderRNE } from 'react-native-elements'
import { debounce, isArray } from 'lodash'
import { Actions } from 'react-native-router-flux'
import { Countries } from '../types'

const Header: React.FunctionComponent = () => {
    const [searchString, setSearchString] = useState<string>('')
    const [countries, setCountries] = useState<Countries[]>([])

    const onChangeSearch = (e: string) => {
        setSearchString(e)
    }
    const debouncedSearch = useCallback(debounce(onChangeSearch, 500), [])
    const Search = (e: string) => {
        debouncedSearch(e)
    }
    useEffect(() => {
        async function fetchData() {
            if (searchString == '') {
                const data = await fetch(
                    `https://restcountries.com/v3/all`
                ).then((res) => res.json())
                setCountries(data)
            } else {
                const data = await fetch(
                    `https://restcountries.com/v3/name/${searchString}`
                ).then((res) => res.json())
                setCountries(isArray(data) ? data : [])
            }
        }
        fetchData()
    }, [searchString])

    return (
        <HeaderRNE
            centerComponent={
                <View>
                    <TextInput
                        onChangeText={(e) => Search(e)}
                        style={styles.area}
                    />
                    <FlatList
                        data={countries}
                        keyExtractor={(item) => item.flag}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() => {
                                    Actions.push('country', item)
                                }}
                            >
                                <Text style={styles.text}>
                                    {item.flag}
                                    {item.name.common}
                                </Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            }
        />
    )
}

const styles = StyleSheet.create({
    area: {
        minWidth: 150,
        height: 40,
        fontSize: 16,
        backgroundColor: 'white',
        textAlign: 'center',
        borderWidth: 3,
    },
    text: {
        backgroundColor: 'white',
        width: '100%',
        fontSize: 20,
        textAlign: 'center',
    },
})

export default Header
