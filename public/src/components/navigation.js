import React, { Component } from 'react';

class Navigation extends Component {

    handleClick(type){
        this.props.handleClickLink(type)
    } 

    render() {
        return (
            <div id="navi-container">
                <div></div>
                <div id="navi">
                    <ul id="list">
                        <li onClick = {() =>{this.handleClick("tees")}}>tees</li>
                        <li onClick = {() =>{this.handleClick("hoodies")}}>hoodies</li>
                        <li onClick = {() =>{this.handleClick("custom_work")}}>custom work</li>
                        <li onClick = {() =>{this.handleClick("contact")}}>contact</li>
                        
                    </ul>
                </div>
                <div></div>
            </div>
        )
    }
};

export default Navigation;