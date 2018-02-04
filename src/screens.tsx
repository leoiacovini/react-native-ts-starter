import { Navigation } from 'react-native-navigation'
import { withProvider } from './redux'
import { Home } from './modules/sample/screens/Home'

const Screens = [
    Home
]

const registerScreen = (screenName: string, Component: React.ComponentClass): void => {
    Navigation.registerComponent(screenName, () => withProvider(Component))
}

const registerAll = () => {
    Screens.forEach(({ name, component }) => {
        registerScreen(name, component)
    })
}

registerAll()

export default Navigation.startSingleScreenApp({
    screen: Home
})
