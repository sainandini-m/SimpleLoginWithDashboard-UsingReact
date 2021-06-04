import React, { useEffect,useState } from 'react';
import axios from 'axios';
import CardComp from './cardtiles.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/dashboard.css'
import FooterComp from './footer.component';


export default function DashboardComp(){

    const [data, setData] = useState([]);
 
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users`)
          .then(res => {
            const data = res.data;
            setData(data);
            console.log(data);
          }).catch((error)=>{
            console.log(error+"Data Not Found")
          })
    },[])
       
    return <React.Fragment>
        <div id="dashboard">
            <section id="team" class="pb-5">
             <div class="container">
                {
                data.map(data => {
                    return <ul  style={{listStyleType:'none'}} key={data.id}>
                        <li key={data.id}><CardComp data={data}/></li>
                    </ul>
                }
                )}
            </div>
            </section>
            <div className="footer">
            <FooterComp/>
            </div> 
        </div>
    </React.Fragment>
}