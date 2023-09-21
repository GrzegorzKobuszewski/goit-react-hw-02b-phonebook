import { Component } from "react";
import { styled } from "styled-components";

const StyledButton = styled.button`
    width: 100px;
    padding: 8px;
    background-color: azure;
    color: green;
    border-radius: 4px;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
`

class Counter extends Component {
    static defaultProps = {
        step: 1,
        initialValue: 0
    }

    state = {
        value: this.props.initialValue
    }

    handleIncrement = () => {
        this.setState((state, props) => ({
            value: state.value + props.step
        }))
    }

    handleDecrement = () => {
        this.setState((state, props) => ({
            value: state.value - props.step
        }))
    }

    countTotal = () => {
        const { good, neutral, bad } = this.state

        return good + neutral + bad
    }

    render() {
        const { step } = this.props

        const total = this.countTotal()
        const showFeedback = total > 0

        return <Container>
            
            <span>{total}</span>
            <StyledButton onClick={this.handleIncrement} type="button">Increment by {step}</StyledButton>
            <StyledButton onClick={this.handleDecrement} type="button">Decrement by {step}</StyledButton>
        </Container>
    }

}


export default Counter