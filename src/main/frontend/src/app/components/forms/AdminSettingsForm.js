import React, { Component } from "react";
import Form from "../functional/forms/Form";
import FormEntity from "../functional/forms/FormEntity";
import Settings from "../globalState/settingsContext/Settings";

class AdminSettingsForm extends Component {
    state = {
        homeIntroduction: ""
    }

    componentDidMount() {
        if (this.props.settings) {
            this.setState({
                homeIntroduction: this.props.settings.homeIntroduction
            });
        }
    }

	handleChange = (name, value) => {
		this.setState({name: value});
	}

	handleSave = () => {
        let settings = this.props.settings;
        settings.homeIntroduction = this.state.homeIntroduction;
        this.props.onChange(settings);
	}

    render() {
        return (
            <Form>
                <div className="admin-settings-form">
                    <FormEntity name="home_Introduction" defaultValue={this.state.homeIntroduction} handleChange={this.handleChange}/>
                    <button className="form-button" onClick={this.handleSave}>Save</button>
                </div>
            </Form>
        );
    }
}

export default AdminSettingsForm