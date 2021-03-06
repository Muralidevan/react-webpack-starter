import './styles.css'
import IMAGE from './dark_knight.jpg'
import LOGO from './logo.svg'
import Counter from './Counter'

export const App = () => {
    return (
        <>
            <h1>
                {' '}
                Typescript webpack starter mode-hello{process.env.NODE_ENV}{' '}
                name-
                {process.env.name}
            </h1>
            <img src={IMAGE} alt="dark knight" width="300" height="200" />
            <img src={LOGO} alt="react logo" width="300" />
            <Counter />
        </>
    )
}
