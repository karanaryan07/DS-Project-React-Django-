import React from 'react'
import {Route} from 'react-router-dom'
import Dash from './Dashboard/Dashboard.js'

const BaseRouter = () => (
    <div>
        <Route exact path = "/" component = {Dash}/>
    </div>

)

export default BaseRouter
