import React from 'react'
import {Table} from 'react-bootstrap'
import './Table.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class DashTable extends React.Component{

    render()
    {
        return(
            
            <Table striped bordered hover responsive>
                <tbody>
                    <tr>
                        <td className = "td">{this.props.item.id}</td>
                        <td className = "td">{this.props.item.name}</td>
                        <td className = "td">{this.props.item.count}</td>
                        <td className = "td">{this.props.item.model}</td>
                    </tr>
                </tbody>
            </Table>
            
        )
    }
}

export default DashTable