import React, {Component} from 'react';


export default class Field extends React.Component {
    render(){
        return(
            <div>
                <br/>
                {this.props.FieldName}
                <label>
                    <input  className="TextBox" type="text" value={this.props.value}
                            onChange={this.props.EditTextBox}
                            hidden={this.props.HiddenStatus}
                    />
                </label>
                <button type="button"
                        className="btn btn-primary"
                        onClick={this.props.ToggleStatus }
                        value="Edit">
                    Edit
                </button>

                <button type="button"
                        className="btn btn-primary"
                        onClick={this.props.click }
                        value="Submit"
                        disabled={this.props.HiddenStatus}>
                    Submit
                </button>

            </div>

        )
    }
}
