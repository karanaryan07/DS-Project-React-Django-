import React from 'react'
import axios from 'axios'
import Popup from './Modal.js'
import {Form , Card , Button} from 'react-bootstrap'
class Project extends React.Component{

    constructor(){
        super()
        this.state = {
            modelName : "",
            modelType : "",
            file_ : null,
            jsonData : {},
            visible : false,

        }
        this.handleChange = this.handleChange.bind(this)
        this.handleChangeF = this.handleChangeF.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleChangeF(event) {
        this.setState({
            file_ : event.target.files[0]
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({visible : true}) 
        console.log(this.state);
        let form_data = new FormData();   
        form_data.append('title', this.state.modelName);
        form_data.append('model_type', this.state.modelType);
        form_data.append('file_type', this.state.file_, this.state.file_.name);
        let url = 'http://127.0.0.1:8000/api/create';
        axios.post(url, form_data, {
        headers: {
            'content-type': 'multipart/form-data'
        }
        })
            .then(res => {
            console.log("recieved")
            console.log(res.data);
            this.setState({jsonData : res.data})
            })
            .catch(err => console.log(err))

        this.setState({modelName : "" , modelType : "" , file_ : null})
    }

    render()
    {
        let closePopup = () => this.setState({visible : false})
        return(
            <div>
                <Card bg  = "dark" text = "white" className = "form">
                    <Card.Header as = "h5">New Project Form</Card.Header>
                    <Card.Body>
                            <Form>
                                 <Form.Group className = "field" controlId="exampleForm.ControlInput1">
                                    <Form.Label className = "lb">Model Name</Form.Label>
                                    <Form.Control 
                                    className = "in" 
                                    type="text"
                                    name = "modelName"
                                    onChange = {this.handleChange} 
                                    value = {this.state.modelName}
                                    placeholder="Name" />
                                </Form.Group>
                                <Form.Group className = "field" controlId="exampleForm.ControlSelect1">
                                    <Form.Label className = "lb">Model Type</Form.Label>
                                    <Form.Control 
                                        className = "in"
                                        as="select"
                                        name = "modelType"
                                        onChange = {this.handleChange}
                                        value = {this.state.modelType}>
                                    <option defaultValue = "true" disabled>Select the type of Model</option>
                                    <option>Classification</option>
                                    <option>Regression</option>
                                    <option>Clustering</option>
                                    </Form.Control>
                                </Form.Group> 
                                <Form.Group className = "field-file" controlId = "exampleForm.ControlInput1">
                                    <Form.Label className = "lb">Dataset Input</Form.Label>
                                    <Form.Control 
                                    className = "in_"
                                    name = "file"
                                    onChange = {this.handleChangeF}
                                    type = "file"/>
                                </Form.Group>
                                <Button onClick = {this.handleSubmit} style = {{marginLeft : "48%"}}>Submit</Button>
                            </Form>
                    </Card.Body>
                </Card>
                {this.state.visible && <Popup show = {this.state.visible}  onHide = {closePopup}  data = {this.state.jsonData}/>}
            </div>
        )
    }
}


// function -> define new project funvtion ( register it to admin) -> python manage.py createsuperuser 

export default Project