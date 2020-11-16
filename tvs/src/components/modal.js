import React, { Component } from 'react';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.handleSave = this.handleSave.bind(this);
        this.state = {
            id:'',
            employee_name: '',
            employee_salary: '',
            employee_age:'',
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            id: nextProps.id,
            employee_name: nextProps.employee_name,
            employee_salary: nextProps.employee_salary,
            employee_age: nextProps.employee_age
        });
    }

    idHandler(e) {
        this.setState({ id: e.target.id });
    }

    employee_nameHandler(e) {
        this.setState({ employee_name: e.target.value });
    }
    employee_salaryHandler(e) {
        this.setState({ employee_salary: e.target.value });
    }
    employee_ageHandler(e) {
        this.setState({ employee_age: e.target.value });
    }

    handleSave() {
        const item = this.state;
        this.props.saveModalDetails(item)
    }

    render() {
        return (
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit details</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p><span className="modal-lable">Id:</span><input value={this.state.id} onChange={(e) => this.idHandler(e)} /></p>
                            <p><span className="modal-lable">Employee_name:</span><input value={this.state.employee_name} onChange={(e) => this.employee_nameHandler(e)} /></p>
                            
                            <p><span className="modal-lable">Employee_salary:</span><input value={this.state.employee_salary} onChange={(e) => this.employee_salaryHandler(e)} /></p>
                            <p><span className="modal-lable">Employee_age:</span><input value={this.state.employee_age} onChange={(e) => this.employee_ageHandler(e)} /></p>
                        
                        </div>
            
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;

