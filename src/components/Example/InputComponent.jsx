import { Component } from "react";
import { nanoid } from "nanoid";


class InputComponent extends Component {
    state = {
        inputValue: ""
    }

    handleChange = evt => {
        this.setState({ inputValue: evt.target.value})
    }

    inputId = nanoid()

    render() {
        const { inputValue } = this.state
        console.log("Value:", inputValue)

        return (
            <label htmlFor={this.inputId}>Input
            <input id={this.inputId}  style={{ border: "1px black solid"}}  value={inputValue} onChange={this.handleChange} type="text" />
            </label>
        )
    }
}

export default InputComponent