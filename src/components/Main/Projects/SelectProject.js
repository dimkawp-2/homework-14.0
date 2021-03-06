import React, { Component } from 'react';
import './Select.css';

class SelectProject extends Component {
    onChange = (e) => {
        console.log(e.target.value);
        if (e.target.value === "Campaing") {
            this.props.SelectProjectSendData('campaing');
        }
        if (e.target.value === "Status") {
            this.props.SelectProjectSendData('status');
        }
    }
    render() {
        console.log("SelectComponents");
        return (
            <div>
                <span>Show projects:: </span>
                <select onChange={this.onChange}>
                    {
                        this.props.value.map((item, index) => {
                            return (
                                <option key={index} value={item}>
                                    {item}
                                </option>
                            );
                        })
                    }
                </select>
            </div>
        );
    }

}
export default SelectProject;