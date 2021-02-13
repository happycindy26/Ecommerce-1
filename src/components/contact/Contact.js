import React from 'react';
//import GoogleMap from '../googlemap/GoogleMap';
import './Contact.css';

const Contact = ({}) => {
        return (
            <div className="Contact my-5">
                <div >
                    <h3>Contact Us</h3>
                    <p>Phone: 03 93808059</p>
                    <p>Address: 15 Irene Ave, North Coburg VIC 3058</p>
                    <div>
                    GoogleMap 
                    
                    </div>
                </div>
            
                <div>
                    <h3>Send an Enquiry</h3>
                    <form className="form">
                        
                        <label></label>
                        <div class="mb-3">
                            <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Name" />
                        </div>
                        <div class="mb-3">
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Phone" />
                        </div>
                        <div class="mb-3">
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email" />
                        </div>
                        <div className="mb-3 textarea">
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="10" cols="20" placeholder="Textarea"></textarea>
                        </div>
                        <button type="submit" className="btn btn-outline-dark px-5 mt-3" >Send</button>
                    </form>
                </div>
            </div>
           
        )
    }


export default Contact;