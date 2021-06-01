import React, { Component } from 'react'
import NavBar from './Navbar'
export default class RestaurantUpdate extends Component {

    constructor(props){
        super(props);
        this.state={name:null,email:null,rating:null,address:null,id:null}
    }
    componentDidMount()
    {
        fetch("http://localhost:3000/restaurant/"+this.props.match.params.id).then((response ) => {
            response.json().then((result)=>{
            console.log(result);
            this.setState({ 
                name:result.name,
                email:result.email,
                rating:result.rating,
                 id:result.id,
                 address:result.address
             });
          })
        })
    }
    update()
    {
         
    fetch("http://localhost:3000/restaurant/"+this.state.id, {
        method:"PUT",
        headers:{
            'content-Type':'application/json'
        },
        body:JSON.stringify(this.state)
    }).then((result)=>{
        result.json().then((resp)=>{
          alert("Record has been updated")
          window.location="/list";
        })
    })
    }
    render() {
        <NavBar/>
        console.log(this.state);
        return (
            <div className="back dark-mode" >

       <h1> Update Restraunt</h1>
        <div className="row ">
        
            <div className="col-sm-12 col-lg-12 col-lg-offset-4  col-sm-offset-4 mt-5 justify-content-center ">
           
          <input className="form-control"placeholder="Restraunt Name" value={this.state.name} onChange={(event) => {this.setState({ name: event.target.value });}} style={{ width: "500px" ,height:"40px" }}/><br/>
          </div>
          <div className="col-sm-12 col-lg-12 col-sm-offset-4  col-lg-offset-4 mt-5 justify-content-center">
           <input className="form-control" placeholder="Restraunt Email" value={this.state.email}  onChange={(event) => {this.setState({ email: event.target.value });}}style={{ width: "500px", height:"40px"   }} /><br/>
           </div>
           <div className="col-sm-12 col-lg-12 col-sm-offset-4  col-lg-offset-4 mt-5 justify-content-center">
           <input className="form-control" placeholder="Restraunt Ratings"value={this.state.rating} onChange={(event) => {this.setState({ rating: event.target.value });}}style={{ width: "500px", height:"40px"  }} /><br/>
           </div>
           <div className="col-sm-12 col-lg-12 col-sm-offset-4  col-lg-offset-4 mt-5 justify-content-center">
           <input  className="form-control" placeholder="Restraunt Address"value={this.state.address} onChange={(event) => {this.setState({ address: event.target.value });}}style={{ width: "500px", height:"40px"  }} /><br/>

           
           </div>
           <div className=" mt-5 ml-5 col-lg-11 col-lg-offset-5 justify-content-center ">
           <button className="btn btn-primary" onClick={()=>{this.update()}}>Update restraunt</button>
           </div>
        </div>


      </div>
        )
    }
}
