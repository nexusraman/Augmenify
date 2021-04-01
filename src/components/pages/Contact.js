import '../../css/Contact.css';
import '../../css/font-awesome.css';
import React from 'react';
import axios from 'axios';

class Contact extends React.Component  {

    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          subject:'',
          phone: '',
          message: ''
        }
    }
    
    onNameChange(event) {
        this.setState({name: event.target.value})
    }
    onEmailChange (event) {
        this.setState({email: event.target.value})
    }
    onSubjectChange(event){
        this.setState({subject: event.target.value})
    }
    onPhoneChange(event){
        this.setState({phone: event.target.value})
    }
    onMsgChange(event){
        this.setState({message: event.target.value})
    }
    submitEmail(e){
        e.preventDefault();
        axios({
            method: "POST", 
            url:"/send", 
            data:  this.state
        }).then((response)=>{
            if (response.data.status === 'success'){
                alert("Message Sent."); 
                this.resetForm()
            }else if(response.data.status === 'fail'){
                alert("Message failed to send.")
            }
        })
    }
    resetForm(){
            this.setState({name: '', email: '',subject:'', phone:'', message: ''})
    }
    render(){
        return (
            <>
            <div className="wrapper">
            <div className="left">
                    <div class="detail">
                        <h2>UNIQUE Infoway</h2>
                        <p>104, Some street, NewYork, USA</p>
                   
                        <h2>call us</h2>
                        <p>+1 234 567890</p>
                    
                        <h2>Email us</h2>
                        <p>support@sitename.com</p>
                        <div>
                            <ul class="social_links row no-bullets">
                                <li class="twitter animated bounceIn wow delay-02s"><a className="list" href="javascript:void(0)"><i class="fa fa-twitter"></i></a></li>
                                <li class="facebook animated bounceIn wow delay-03s"><a className="list" href="javascript:void(0)"><i class="fa fa-facebook"></i></a></li>
                                <li class="pinterest animated bounceIn wow delay-04s"><a className="list" href="javascript:void(0)"><i class="fa fa-pinterest"></i></a></li>
                                <li class="gplus animated bounceIn wow delay-05s"><a className="list" href="javascript:void(0)"><i class="fa fa-google-plus"></i></a></li> 
                            </ul>
                        </div>
                    </div> 
                </div>
                <div className="right">
                    <h1>Contact Us</h1>
                    <p>Reach out us, We are waiting to interact with you.</p>
                    
                    <form id="contact-form" onSubmit={this.submitEmail.bind(this)} method="POST">
                    <div className="contactus">
                        <div className="input_wrapper input_wrapper_top">
                            <div className="input_item">
                                <input placeholder="Name" id="name" type="text" 
                                required value={this.state.name} onChange={this.onNameChange.bind(this)}/>
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="input_item">
                                <input placeholder="Email" id="email" type="text"  
                                required value={this.state.email} onChange={this.onEmailChange.bind(this)}/>
                                <i className="fas fa-at"></i>
                            </div>
                        </div>
                        <div className="input_wrapper input_wrapper_bottom">
                            <div className="input_item">
                                <input placeholder="Subject" id="subject" type="text" 
                                required value={this.state.subject} onChange={this.onSubjectChange.bind(this)}/>
                                <i className="fas fa-sticky-note"></i>
                            </div>
                            <div className="input_item">
                                <input placeholder="Phone" id="phone" type="text" 
                                required value={this.state.phone} onChange={this.onPhoneChange.bind(this)}/>
                                <i className="fas fa-phone"></i>
                            </div>
                        </div>
                        <div className="message_wrapper">
                            <textarea placeholder="Message" id="message" 
                            rows="1" required value={this.state.message} onChange={this.onMsgChange.bind(this)}/>
                            <i className="fas fa-envelope-open"></i>
                        </div>
                        <button type="submit" className="btn">Send
                        </button>
                    </div>
                    </form>
                </div>
                </div>
            </>
        );
    }
    
}

export default Contact
