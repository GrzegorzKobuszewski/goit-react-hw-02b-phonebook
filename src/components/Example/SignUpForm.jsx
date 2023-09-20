import { Component } from "react";
import styles from './SignUpForm.module.css';

const Gender = {
    FEMALE: 'female',
    MALE: 'male'
}

const INITAL_STATE = {
    login: "",
    email: "",
    password: "",
    agreed: false,
    gender: null,
    age: "18-25",
}

const AGE_OPTIONS = [
    { value: "", label: "..."},
    { value: "18_25", label: "18-25 lat"},
    { value: "26_45", label: "26-45 lat"},
    { value: "46", label: "46+ lat"}
]

class SignUpForm extends Component {
    state = {...INITAL_STATE}

    // constructor() {
    //     super()
    //     console.log('constructor')
    // }

    componentDidMount() {
        console.log('did mount')

        //HTTP Request

        // this.setState({ ...INITAL_STATE, login: "xD"})
    }

    componentDidUpdate() {
        console.log('updated')
        const { password } = this.state

        if (password.length < 5) {
            console.log("haslow za krotkie")
            //http request do szukania towaru
        }

        throw new Error('Data error')
        
    }

    componentWillUnmount() {
        console.log('unmount')
    }



    // static getDerivedStateFromProps(nextProps, prevState) {
    //     console.log('state from props')
    // }



    handleChange = e => {
        const { name, value, type, checked } = e.target
        this.setState({ [name]: type ==='checkbox' ? checked : value})
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(`signed up as: ${this.state.login}`)

        this.props.onSubmit({ ...this.state })
        this.handleReset()
    }

    handleReset = () => {
        this.setState({ ...INITAL_STATE })
    }

    handleError = () => {
        throw new Error("Error!")
    }

    render() {
        const { login, email, password, agreed, gender, age } = this.state


        return (
            <form onSubmit={this.handleSubmit}>
                <div className={styles.container}>
                <label>
                    Name
                    <input name="login" onChange={this.handleChange} type="text" placeholder="Enter name" value={login} />
                </label>
                <label>
                    Email
                    <input name="email" onChange={this.handleChange} type="email" placeholder="Enter email" value={email} />
                </label>
                <button onClick={this.handleError}>Error</button>
                <label>
                    Password
                    <input name="password" onChange={this.handleChange} type="password" placeholder="Enter password" value={password} />
                </label>

                <label>
                    Choose your age
                    <select name="age" value={age} onChange={this.handleChange}>
                        {AGE_OPTIONS.map(({label, value}) => <option key={value} value={value} disabled={!value}>{label}</option>)}
                    </select>
                </label>

                <label>
                    Agree to terms
                    <input name="agreed" type="checkbox" value={agreed} onChange={this.handleChange}/>
                </label>

                <section>
                    <h2>Gender: </h2>
                    <label>
                        Female
                        <input onChange={this.handleChange} name="gender" type="radio" value={Gender.FEMALE} checked={gender === Gender.FEMALE} />
                    </label>
                    <label>
                        Male
                        <input onChange={this.handleChange} name="gender" type="radio" value={Gender.MALE} checked={gender === Gender.MALE} />
                    </label>
                </section>

                <button disabled={!agreed || !age} type="submit">Sign up as {login}</button>
                </div>
            </form>
        )
    }
}

export default SignUpForm