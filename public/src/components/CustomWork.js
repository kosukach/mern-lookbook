import React, { Component } from 'react';
import $ from "jquery";
class CustomWork extends Component {
    render() {
        return (
            <div id="custom_work" className="articles">
                <div id="custom_work-grid" className="display display-grid">
                    <div id="custom_work-0" className="clo" onClick= {() => this.props.handleClickImage(0, "custom_work")}></div>
                    <div id="custom_work-1" className="clo" onClick= {() => this.props.handleClickImage(1, "custom_work")}></div>
                    <div id="custom_work-2" className="clo" onClick= {() => this.props.handleClickImage(2, "custom_work")}></div>
                    <div id="custom_work-3" className="clo" onClick= {() => this.props.handleClickImage(3, "custom_work")}></div>
                    <div id="custom_work-4" className="clo" onClick= {() => this.props.handleClickImage(4, "custom_work")}></div>
                    <div id="custom_work-5" className="clo" onClick= {() => this.props.handleClickImage(5, "custom_work")}></div>
                    <div id="custom_work-6" className="clo" onClick= {() => this.props.handleClickImage(6, "custom_work")}></div>
                    <div id="custom_work-7" className="clo" onClick= {() => this.props.handleClickImage(7, "custom_work")}></div>
                    <div id="custom_work-8" className="clo" onClick= {() => this.props.handleClickImage(8, "custom_work")}></div>
                    <div id="custom_work-9" className="clo" onClick= {() => this.props.handleClickImage(9, "custom_work")}></div>
                    <div id="custom_work-10" className="clo" onClick= {() => this.props.handleClickImage(10, "custom_work")}></div>
                    <div id="custom_work-11" className="clo" onClick= {() => this.props.handleClickImage(11, "custom_work")}></div>
                    <div id="custom_work-12" className="clo" onClick= {() => this.props.handleClickImage(12, "custom_work")}></div>
                    <div id="custom_work-13" className="clo" onClick= {() => this.props.handleClickImage(13, "custom_work")}></div>
                    <div id="custom_work-14" className="clo" onClick= {() => this.props.handleClickImage(14, "custom_work")}></div>
                    <div id="custom_work-15" className="clo" onClick= {() => this.props.handleClickImage(15, "custom_work")}></div>
                    
                </div>
                <div className="display display-item" id="custom_work-item-0"></div>
                <div className="display display-item" id="custom_work-item-2"></div>
                <div className="display display-item" id="custom_work-item-3"></div>
                <div className="display display-item" id="custom_work-item-4"></div>
                <div className="display display-item" id="custom_work-item-5"></div>
                <div className="display display-item" id="custom_work-item-6"></div>
                <div className="display display-item" id="custom_work-item-7"></div>
                <div className="display display-item" id="custom_work-item-8"></div>
                <div className="display display-item" id="custom_work-item-9"></div>
                <div className="display display-item" id="custom_work-item-10"></div>
                <div className="display display-item" id="custom_work-item-11"></div>
                <div className="display display-item" id="custom_work-item-12"></div>
                <div className="display display-item" id="custom_work-item-13"></div>
                <div className="display display-item" id="custom_work-item-14"></div>
                <div className="display display-item" id="custom_work-item-15"></div>
            </div>
        )
    }
};
export default CustomWork;