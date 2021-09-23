import React, { Component } from 'react';
//import Modal from './modal.js';


class List extends Component {
  constructor(props) {
    super(props);


    

    //this.replaceModalData = this.replaceModalData.bind(this);
    //this.saveModalDetails = this.saveModalDetails.bind(this);
    this.state = {
      requiredItem: 0,
      
      contractList:[],
        
      Detail:""
      
        
      
    
      }
      
        }
 
   
  
  
  
  
  // replaceModalData(id) {
  //   this.setState({
  //     requiredItem: id
  //   });
  // }

  // saveModalDetails(item) {
  //   const requiredItem = this.state.requiredItem;
  //   let tempdata= this.state.data;
  //   tempdata[requiredItem] = item;
  //   this.setState({data: tempdata });
  // }

  

  render() {    
     
   
   
    const data=this.state.contractList.map((item, id) => {
      return (
      
        <div>
    
        <thead>
       <tr>
                                    <td>Id</td>
                                    
                                    <td>customercode12</td>
                                  
                                    <td>customername</td>
                                
                                    <td>costcenter</td>
                                
                                </tr>
       </thead>
          

          
        
        
        <tr key={id}>
           <td>{item.id}</td>
          
          <td>{item.customername}</td>
          
          <td>{item.customercode}</td>
        
          <td>{item.costcenter}</td> 
            
          
            
              
            
          
        <td>{item.data}</td>
          
        
         
        
          </tr>
      </div>
      
      )
    });
    
  //   const requiredItem = this.state.requiredItem;
  //  let modalData = this.state.data[requiredItem];
    return (
      <div>
        {/* <div style={{ textAlign: "center" }}>
          <h1>Tvs logisitics</h1>
          <h6>Employee details</h6>
        </div> */}
        <table className="table table-striped">
       {/* <thead>
       <tr>
                                    <td>ID</td>
                                    <td></td>
                                    <td>Employee_NAME</td>
                                    <td></td>
                                    <td>Employee _salary</td>
                                    <td></td>
                                    <td>Employee_age</td>
                                
                                </tr>
       </thead> */}
           <tbody>
            {data}
          </tbody> 
        </table>
        {/* <Modal
          id={modalData.id}
          employee_name={modalData.employee_name}
          employee_salary={modalData.employee_salary}
          employee_age={modalData.employee_age}
          saveModalDetails={this.saveModalDetails}
        /> */}
      </div>
    );
  }
}

export default List;
