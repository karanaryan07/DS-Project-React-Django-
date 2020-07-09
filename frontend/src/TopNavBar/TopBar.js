import React from 'react'
import  {Nav , Button} from 'react-bootstrap';
import './Nav.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class TopNavbar extends React.Component{

    render()
    {
        return(

            <nav className = "nav">
                <div className = "logo">
                    <h4 className = "logo-title">DS TOOL</h4>
                </div>

                <div className = "nav-links"> 
                        
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">Profile</Nav.Link>
                        <Nav.Link href="#">Payment</Nav.Link>
                        
                </div>

                <div>
                    <Button className = "button">Logout</Button>
                </div>
            </nav>

        )
    }
}

export default TopNavbar