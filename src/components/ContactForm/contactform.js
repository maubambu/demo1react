import React, { Component } from 'react';
import Title from './title/title';
import Button from './button/button';
import './contactform.css';

export default class ContactForm extends Component{
    constructor() {
        super();
        this.state = {
            name: "Mauricio",
            lastname: "Montes de Oca",
            email: "mauricio.maigre@gmail.com"
        }
    }

    changeNameToJuan() {
        this.setState({ name: "Juan" });
    }

    handleChange(input, event) {
        if (!this.state[input]) return false;
        let newState = {};
        newState[input] = event.target.value;
        this.setState(newState)
    }

    render() {
        return (
            <div className="contact-form">
                <Title></Title>
                <input value={this.state.name} onChange={ (e) => this.handleChange("name", e) } type="text" placeholder="Ingresa tu nombre"></input>
                <input onChange={ (e) => this.handleChange("lastname", e) } type="text" placeholder="Ingresa tu apellido"></input>
                <input onChange={ (e) => this.handleChange("email", e)} type="email" placeholder="Ingresa tu correo electrónico"></input>
                <button onClick={this.changeNameToJuan.bind(this)}></button>

            </div>
        )
    }
}
