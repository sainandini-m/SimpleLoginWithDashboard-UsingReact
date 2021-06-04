import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/login.css';
import { useHistory } from "react-router-dom";
import PasswordStrengthBar from 'react-password-strength-bar';

export default function FormComp(){

    const validEmailRegex = RegExp(
            /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );

    const initialFormData = Object.freeze({
        name:"Admin",
        email : "admin.admin@gmail.com",
        password:"AdminAdmin@1998"
      });

    const [formData, updateFormData] = React.useState(initialFormData);
    const [errorEmail, updateErrors2] = React.useState('');
    const [errorPassword, updateErrors3] = React.useState('');
    const [ePassword, updateErrors4] = React.useState('');


    const validateForm = errors => {
        let valid = true;
        Object.values(errors).forEach(val => val.length > 0 && (valid = false));
        return valid;
      };
      
    const handleChange = (e) => {
        
        const { name, value } = e.target;
        switch (name) {
            case 'email': 
            updateErrors2( 
                  validEmailRegex.test(value)
                    ? ''
                    : 'Email is not valid! Use the correct format : example@domainname'
                )
                break;
            case 'password': 
                updateErrors3(value)
                updateErrors4(value.length>8 && value.includes('@') && value.includes('1998')?'':'Password not valid')
                break;
                  
            default:
    
          }

        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
          });    
        };

        const history = useHistory();

        const handleSubmit=(e)=> {
            if(validateForm(errorEmail && ePassword)) {
                localStorage.setItem('name', formData.name);
                console.info('Valid Form')
                console.log((formData));
                history.push("/home");     
            }
            else{
                console.error('Invalid Form')
            }
            }   

    const isEnabled=validateForm(errorEmail || ePassword)?true:false;

    return <React.Fragment>
        <div className="main">
           <div className="wrapper rounded bg-dark">
        <div className="h3">Login</div>
        <hr/>
      <form onSubmit={handleSubmit} className="form">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3"> 
                <label htmlFor="email">Email:</label> 
                <input id="email" autoComplete="off" onChange={handleChange}  name="email" type="text" className="form-control" required/> 
                <span className='error'>  {errorEmail}</span>
            </div>
          
            <div className="col-md-6 mt-md-0 mt-3"> 
                <label htmlFor="password">Password</label> 
                <input id="password" autoComplete="off" onChange={handleChange} name="password" type="password" className="form-control" required/> 
                <PasswordStrengthBar password={errorPassword} />
                <span className='error'>  {ePassword}</span>
                <p className='error1'>
                Password should contain :<br/>
                min 8 characters <br/>
                min one uppercase letter<br/>
                Symbols (#,!,$)<br/>
                Numbers
                </p>
            </div>
        </div>
      
        <div className="row">
                <div className="col-md-6 mt-md-0 mt-3"> 
                    <div className="col">
                    <button type="submit" disabled={!isEnabled} className="col btn btn-ultra-voilet btn-rounded">Login</button>
                    </div>
                </div>
                <div className="col-md-6 mt-md-0 mt-3"> 
                    <div className="col">
                    <button type="reset"  className="col btn btn-ultra-voilet btn-rounded">Reset</button>
                    </div>
                </div>
            </div>
    </form>
</div>
</div>
     </React.Fragment>
}