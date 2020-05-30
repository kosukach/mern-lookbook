import React, { Component } from 'react';
import $ from "jquery";
import axios from "axios"
class Tees extends Component {
    constructor(props){
        super(props);
        this.state = {
                
        };
    }
    componentDidMount(){
        axios.get("http://localhost:8080/tees")
            .then(items => {
                this.setState({items: items.data});
            });
    }
    render() {
        return (
            <div id="tees" className="articles">
                
                <div id="tees-grid" className="display display-grid">
                    {
                        [(()=>{
                            if(this.state.items){
                                let divs = [];
                                for(let i = 0; i < this.state.items.length; i++){
                                    
                                    divs.push(<div 
                                    key = {`tees-${i}`}
                                    id={`tees-${i}`} 
                                    className="clo"
                                    onClick= {() => this.props.handleClickImage(i, "tees")}>
                                        <img 
                                            className="grid-image" 
                                            src={`C:/Users/User/Documents/kuz-app/webpack-react-kuz/dist/images/tees/${this.state.items[i].closeupImageName}`}
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
                                    key = {`tees-item-${i}`}
                                    id= {`tees-item-${i}`}
                                    className="display display-item">
                                        <div className="item">
                                            <div className="image-container">
                                                <img 
                                                    
                                                    src={`C:/Users/User/Documents/kuz-app/webpack-react-kuz/dist/images/tees/${this.state.items[i].imageName}`}
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
                                                                    <div id={`tees-${prop}-${i}`} className={`sizes-badge ${prop}`}>
                                                                        <h3 style={{color: this.state.items[i].availableSizes[prop] ? "white": "black"}}>{`${prop}`}</h3>
                                                                    </div>
                                                            )
                                                        }
                                                        return sizes;
                                                    })()
                                                ]}
                                                
                                            </div>
                                            <div className="button-container">
                                                <button className="back-button" onClick={()=> this.props.handleBack(i, "tees")}>
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
                
                <div className="display display-item" id="tees-item-0">

                </div>
                
            </div>
        )
    }
};
export default Tees;