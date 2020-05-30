import React, { Component } from 'react';
import $ from "jquery";
import axios from "axios";
class Hoodies extends Component {
    constructor(props){
        super(props);
        this.state = {
                
        };
    }
    componentDidMount(){
        axios.get("http://localhost:8080/hoodies")
            .then(items => {console.log(items); return items})
            .then(items => {
                this.setState({items: items.data});
            });
    }
    render() {
        return (
            <div id="hoodies" className="articles">
                <div id="hoodies-grid" className="display display-grid">
                {
                        [(()=>{
                            if(this.state.items){
                                
                                let divs = [];
                                for(let i = 0; i < this.state.items.length; i++){
                                    
                                    divs.push(<div 
                                    key = {`hoodies-${i}`}
                                    id={`hoodies-${i}`} 
                                    className="clo"
                                    onClick= {() => this.props.handleClickImage(i, "hoodies")}>
                                        <img  
                                            src={`../../dist/images/hoodies/${this.state.items[i].closeupImageName}`}
                                            
                                        ></img>
                                    </div>)
                                }
                                return divs;
                            }
                        })()]  
                    }
                    
                </div>
                {
                    [(()=>{
                        if(this.state.items){
                            let divs = [];
                            for(let i = 0; i < this.state.items.length; i++){
                                    
                                divs.push(<div 
                                key = {`hoodies-item-${i}`}
                                id= {`hoodies-item-${i}`}
                                className="display display-item">
                                    <div className="item">
                                        <div className="image-container">
                                            <img 
                                                    
                                                src={`C:/Users/User/Documents/kuz-app/webpack-react-kuz/dist/images/hoodies/${this.state.items[i].imageName}`}
                                            ></img>
                                        </div>
                                        <div className="title-container">
                                            <h1>{this.state.items[i].name}</h1>
                                        </div>
                                        <div className="sizes-container">
                                            <div className="sizes-h3">
                                                <h3>Available Sizes</h3>
                                            </div>
                                                
                                            {[
                                                    (()=>{
                                                        let sizes = []
                                                        
                                                        for(const prop in this.state.items[i].availableSizes){
                                                            sizes.push(
                                                                    <div id={`hoodies-${prop}-${i}`} className={`sizes-badge ${prop}`}>
                                                                        <h3 style={{color: this.state.items[i].availableSizes[prop] ? "white": "black"}}>{`${prop}`}</h3>
                                                                    </div>
                                                            )
                                                        }
                                                        return sizes;
                                                    })()
                                                ]}
                                            </div>
                                            <div className="button-container">
                                                <button className="back-button" onClick={()=> this.props.handleBack(i, "hoodies")}>
                                                    <h2>
                                                        Back
                                                    </h2>
                                                </button>
                                                <button className="back-button" onClick={()=> this.props.handleOrder("contact")}>
                                                    <h2>
                                                        Order
                                                    </h2>
                                                </button>
                                            </div>
                                        </div>
                                    </div>)
                                }
                                return divs;
                            }
                        })()]  
                    }
            </div>
        )
    }
};
export default Hoodies;