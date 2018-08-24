import React from 'react';
import {Form,Button} from 'semantic-ui-react';
import InlineError from '../messages/InlineError';
import Validator from 'validator';

class LoginForm extends React.Component {
    state = {
        data: {
            email: "",
            password: ""
        },
        loading: false,
        errors: {}
    };
    onSubmit = () => {
        const errors = this.validate(this.state.data);
        this.setState({errors});
        console.log(this.state.errors);
    }
    onChange = e => 
        this.setState({
            data: {...this.state.data, [e.target.name]: e.target.value }
        });
    validate = data => {
        const errors = {};
        if(!Validator.isEmail(data.email)) errors.email = "The email is not valid" ;
        if (!data.password) errors.password = "the password is empty";
        
        return errors;
    }

    render(){
        const {data, errors} = this.state;

        return(

            <Form onSubmit={this.onSubmit}>
                <Form.Field error={!!errors.email}>
                    <label htmlFor="email" >Email</label>
                    <input type="email" name="email" id="email"
                        value={data.email}
                        onChange={this.onChange}
                    />
                </Form.Field>
                {errors.email && <InlineError text={errors.email}/>}
                <Form.Field error={!!errors.password}>
                    <label htmlFor="password" >Password</label>
                    <input type="password" name="password" id="password"
                        value={data.password}
                        onChange={this.onChange}
                    />
                </Form.Field>
                {errors.password && <InlineError text={errors.password}/>}
                <Button primary>Login</Button>
            </Form>
        );
    }
}

export default LoginForm;