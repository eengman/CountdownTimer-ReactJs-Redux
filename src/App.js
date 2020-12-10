import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';
import { Form, FormControl, Button, Image } from 'react-bootstrap';
import logo from './Progresspic8-21-20.PNG';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            deadline: 'December 25, 2020',
            newDeadline: ''
        }
    }

    changeDeadline() {
        this.setState({ deadline: this.state.newDeadline })
    }


    render() {
        return (


            <div className="App">
                <Image src={logo} fluid />
                <div className="App-title">Countdown to {this.state.deadline}
                </div>
                <div>
                    <Clock deadline={this.state.deadline} />
                    <Form inline className="Form-input">
                        <FormControl className="Deadline-input" placeholder='Ex: Month Day, Year'
                            onChange={event => this.setState({ newDeadline: event.target.value })}
                        />
                        <Button onClick={() => this.changeDeadline()}>Submit</Button>

                    </Form>

                    <Form.Group>
                        <Form.Control size="lg" type="text" placeholder="Large text" />
                    </Form.Group>
                </div>
            </div>
        )
    }

}

export default App;