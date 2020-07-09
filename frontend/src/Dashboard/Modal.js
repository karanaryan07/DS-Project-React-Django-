import React from 'react'
import {Modal , Button} from 'react-bootstrap'

class Popup extends React.Component{
    render(){
        return(
            <div>
                <Modal show={this.props.show} onHide={this.props.onHide} animation={false}>
                    <Modal.Header closeButton>
                    <Modal.Title>Data Info</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h6>Project Name : {this.props.data.title}</h6>
                        <br></br>
                        <h6>Model Type   : {this.props.data.model_type} </h6>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="primary" onClick={this.props.onHide}>
                        Proceed
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default Popup