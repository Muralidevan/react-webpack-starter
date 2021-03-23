import './styles.css'
import IMAGE from './dark_knight.jpg'
import LOGO from './logo.svg'

export const App = () =>{
    return (
        <>
    <h1> Typescript webpack starter</h1>
    <img src={IMAGE} alt="dark knight" width="300" height="200"/>
    <img src={LOGO} alt="react logo" width="300"/>

    </>

    )
    
}