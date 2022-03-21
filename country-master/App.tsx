import React, { Component } from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Country from './Components/CountryPage/CountryPage'
import Search from './Components/SearchPage/Index'
import { SafeAreaProvider } from 'react-native-safe-area-context'

class App extends Component {
    render(): React.ReactNode {
        return (
            <SafeAreaProvider>
                <Router>
                    <Scene key="root">
                        <Scene
                            key="search"
                            component={Search}
                            title="Search"
                            initial
                        />

                        <Scene
                            key="country"
                            component={Country}
                            title="Country"
                        />
                    </Scene>
                </Router>
            </SafeAreaProvider>
        )
    }
}

export default App
