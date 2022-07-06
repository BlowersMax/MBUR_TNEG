import './Onboarding.sass'
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

const Onboarding = () => {
    const [cleanestName, setClean] = useState("")
    const location = useLocation()
    const cleanData = JSON.stringify(location.state)
    const halfName = JSON.stringify(location.state.values.fN)
    const halfLName = JSON.stringify(location.state.values.lN)
    const cleanName = JSON.parse(halfName)
    const cleanLastN = JSON.parse(halfLName)

    useEffect(() => {
        console.log(cleanData)
        if (cleanName === 'Jody' && cleanLastN === 'Bartz') {
            setClean("Doctah Jody")
        } else if (cleanName === 'Sam' && cleanLastN === "Alexander") {
            setClean('SAMAMAMMAMAMAMMAMAMAM')
        } else if (cleanName === 'Sean' && cleanLastN === "Pantellere") {
            setClean('Boss Man')
        } else if (cleanName === 'Max' && cleanLastN === 'Blowers') {
            console.log('%c Welcome, Max.', 'background: #FF495C; color: #38023b; padding: 10px ')
            setClean('Mr. Blowers')
        } else if (cleanestName != 'Jody') {
            setClean(cleanName)
        }
    }, [])

    return (
        <div className='onboardingContainer'>
            <div>
                <h1>It's a pleasure to meet you, {cleanestName}.</h1>
                <p>Now, let's get to work. Today you will be reviewing various different concepts for Totally Not El
                    Grupo Youth Cycling. These designs may feature different font faces, new colors, but will definitely
                    feature a fresh take and will "level up" the current website. You will be asked to provide feedback
                    on the different designs (what you liked & didn't). Thank you for your time!</p>
            </div>
        </div>
    )
}

export default Onboarding