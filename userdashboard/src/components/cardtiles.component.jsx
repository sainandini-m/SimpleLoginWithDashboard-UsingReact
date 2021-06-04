import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/cardtiles.css';

export default function CardComp(props){
    return <React.Fragment>
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-4">
                        <div className="image-flip" >
                            <div className="mainflip flip-0">
                                <div className="frontside">
                                    <div className="card">
                                        <div className="card-body text-center">
                                            <div className="top-half">
                                                <h4 className="card-title"><b>{props.data.name}</b></h4>
                                                <p className="card-text"><span><img style={{height:'15px', width:'15px'}} src={"./arroba.png"}/>  {props.data.username}</span></p>
                                            </div>
                                            <hr/>
                                            <div className="company"> <p className="card-title" style={{fontSize: '14px'}}>  Works For</p> 
                                                <p className="card-text" ><strong style={{fontSize:'15px'}}><img style={{height:'15px', width:'15px'}} src={"./office-building.png"}/>&nbsp;{props.data.company.name}</strong></p> 
                                                <p className="card-text" style={{fontStyle: 'italic'}}><q>{props.data.company.catchPhrase}</q></p> 
                                                <p className="card-text"><span style={{fontSize:'10px'}}> <b>Services Offered</b> - {props.data.company.bs}</span> </p> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="backside">
                                    <div className="card">
                                        <div className="card-body">
                                            <img style={{height:'50px', width:'50px', marginBottom:'5px'}}  className="center" src={"./id-card.png"}/>
                                            <h4 className="card-title"> Contact Info </h4>
                                            <hr/>
                                            <p className="card-text"><span><img style={{height:'20px', width:'20px'}} src={"./phone-call.png"}/> &nbsp;&nbsp;  {props.data.phone}</span></p>
                                            <p className="card-text"><span><img style={{height:'20px', width:'20px'}} src={"./email.png"}/>  &nbsp;&nbsp;  {props.data.email}</span></p>
                                            <p className="card-text"><span><img style={{height:'20px', width:'20px'}} src={"./click.png"}/>  &nbsp;&nbsp;  {props.data.website}</span></p>
                                            <p className="card-text"><span><img style={{height:'20px', width:'20px'}} src={"./pin.png"}/>   &nbsp;&nbsp; {props.data.address.city} - {props.data.address.zipcode}</span>
                                            </p>
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </React.Fragment>
}