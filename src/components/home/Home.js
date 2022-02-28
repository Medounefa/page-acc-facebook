import React from 'react'
import Heading from '../heading/Heading'
import Profile from '../profile/Profile'
import Formulaire from '../formulaire/Formulaire'

function Home() {
    return (
        <div>
            <div className="row">
               <div className="col-sm-4">
                 <Heading />
               </div>
            </div>
            <div className="row">
               <div className="col-sm-3">
                   <Profile />
               </div>
               <div className="col-sm-3">
                   <Formulaire />
               </div>
            </div>
               
        </div>
    )
}

export default Home
