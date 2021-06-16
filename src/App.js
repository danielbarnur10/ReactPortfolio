import React from 'react'
import {Contact} from './Components/Contact'
import {Intro} from './Components/Intro'
import {MyWork} from './Components/MyWork'
import {Skills} from './Components/Skills'
import {WhatIdo} from './Components/WhatIdo'
import {WhoAmI} from './Components/WhoAmI'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'


export const App = () => {
    return (
        // <NavLink>
        //     <Intro to = "#intro"/>
        //     <WhatIDo/>
        //     <WhoAmI/>
        //     <MyWork/>
        //     <Skills/>
        //     <Contact/>

        // </NavLink>
       <div>
           <Contact />
       </div>
    )
}
