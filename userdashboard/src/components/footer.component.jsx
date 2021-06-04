import React from 'react';
import '../css/footer.css';

export default function FooterComp(){
    return <React.Fragment>
        <div className="footer">
            <p style={{float:'left',marginTop:'40px'}}>CONNECT WITH US &nbsp;&nbsp;&nbsp;&nbsp;
                <span>
                <img style={{height:'20px', width:'20px'}} src={"./facebook.png"}/>&nbsp;&nbsp;
                <img style={{height:'20px', width:'20px'}} src={"./youtube.png"}/>&nbsp;&nbsp;
                <img style={{height:'20px', width:'20px'}} src={"./twitter.png"}/>&nbsp;&nbsp;
                <img style={{height:'20px', width:'20px'}} src={"./gmail.png"}/>
               </span> 
            </p>
           <p>
                <span class="thankyou-note" style={{padding:'10px',marginLeft:'200px'}}>
                    Thankyou for visiting!
                </span>
                <span style={{marginTop:'40px',marginLeft:'700px'}}>© Copyright 2021. All rights reserved.</span>
            </p>
            {/* <div>Icons made by 
                <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect"> Pixel perfect
                </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
            </div> */}
        </div>
    </React.Fragment>
}