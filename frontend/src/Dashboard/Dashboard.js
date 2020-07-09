import React from 'react'
import './Table.css'
import Pie from './Pie.js'
import Column from './Column.js'
import DashTable from './Table.js'
import details from './TableData.js'
import Project from './ProjectForm.js'
import {Card , Table , Container , Row , Col , Button} from 'react-bootstrap'

class Dash extends React.Component{

    constructor()
    {
      super()
      this.state = {
        items : details,
        cond : false
      }
      this.handleChange = this.handleChange.bind(this)
  
    }
  
    handleChange()
    {
      this.setState({cond : true})
    }
    
    render()
    {
        const TableComponent = this.state.items.map(item => <DashTable key = {item.id} item = {item}/>)
        return(
                <div>
                <Container >
                    <Row>
                        <Col sm = {6} md = {6}>
                            <Card>
                            <Card.Header as="h5">Project Distribution</Card.Header>
                            <Card.Body>
                                <Pie />
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col sm = {6} md = {6}>
                        <Card>
                            <Card.Header as="h5">Project Models</Card.Header>
                            <Card.Body>
                                <Column />
                            </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Card style = {{marginBottom : "4%"}} className = "card">
                            <Card.Header as="h5">Featured Projects</Card.Header>
                            <Card.Body>
                            <Table striped bordered hover variant="dark" responsive = "l">
                                <thead>
                                        <tr>
                                            <th className="th">Sr.NO</th>
                                            <th className="th">Project Name</th>
                                            <th className="th">Dataset Count</th>
                                            <th className="th">Model Type</th>
                                        </tr>
                                    </thead>       
                            </Table>
                            {TableComponent} 
                            </Card.Body>
                            <Card.Footer style = {{display : "flex"}}>
                            <h4>Ready to start a new project</h4>
                            <Button className = "button" onClick = {this.handleChange}>Create</Button>
                            </Card.Footer>
                        </Card>
                        </Col>
                        </Row>
                    </Container>

                    <div className = "form">
                    {this.state.cond && <Project />}
                    </div>
                </div>      
                
        )
    }
}

export default Dash