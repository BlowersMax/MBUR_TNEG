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
            setClean('Mr. Pants')
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
                <p>This website is used to find out which designs users prefer to use more. When you are ready click the
                    button below. The questions may consist of rating questions, select questions, or free
                    response. Thank you for your time. </p>
                <button className='cbutton'>I'm Ready to Continue &rarr;</button>
            </div>
        </div>
    )
}

export default Onboarding