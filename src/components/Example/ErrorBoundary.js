import { Component } from "react";


class ErrorBoundary extends Component {
    state = {
        hasError: false
    }

    componentDidCatch(error, info) {
        
        this.setState({ hasError: true })
    
        console.log("error: ", error, info)
    }

    handleError = () => {
        throw new Error()
    }



    render() {

        if (this.state.hasError) {
            return <div>Something went wrong, please try again later</div>
        }

        return <div>{this.props.children}
        <button onClick={this.handleError}>Error</button></div>
    }
}

export default ErrorBoundary