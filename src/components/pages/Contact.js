import '../pages/Contact.css';
import React from 'react';
import axios from 'axios';
class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            phone: '',
            message: ''
        }
    }

    onNameChange(event) {
        this.setState({ name: event.target.value })
    }
    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }
    onSubjectChange(event) {
        this.setState({ subject: event.target.value })
    }
    onPhoneChange(event) {
        this.setState({ phone: event.target.value })
    }
    onMsgChange(event) {
        this.setState({ message: event.target.value })
    }
    submitEmail(e) {
        e.preventDefault();
        axios({
            method: "POST",
            url: "/send",
            data: this.state
        }).then((response) => {
            if (response.data.status === 'success') {
                alert("Message Sent.");
                this.resetForm()
            } else if (response.data.status === 'fail') {
                alert("Message failed to send.")
            }
        })
    }
    resetForm() {
        this.setState({ name: '', email: '', subject: '', phone: '', message: '' })
    }
    render() {
        return (
            <>

                <div >
                    <div className='main'>
                        <img className='ImageContainer' alt='contact' src={process.env.PUBLIC_URL + '/images/contact.jpeg'}></img>
                        <div className='centered'>Contact Us</div>
                    </div>
                    <h2 className='centered2'>Reach out us, We are waiting to interact with you.</h2>
                    <div className="wrapper">
                        <div className="left">

                            <div className="detail">
                                <p>Address</p>
                                <div>230, Ellisbridge Shopping Center, Ahmedabad, India</div>

                                <p>Call us</p>
                                <div style={{ color: 'lightseagreen' }}>+1-647-273-7867</div>

                                <p>Email us</p>
                                <div style={{ color: 'lightseagreen ' }}>sales@augmenify.com</div>
                                <div>
                                    <ul className="social_links row no-bullets">
                                        <li className="twitter animated bounceIn wow delay-02s"><a className="list" href="https://www.facebook.com/pages/Augmenify-Infotech-Pvt-Ltd/110210953868190"><i className="fa fa-twitter"></i></a></li>
                                        <li className="facebook animated bounceIn wow delay-03s"><a className="list" href="https://www.facebook.com/pages/Augmenify-Infotech-Pvt-Ltd/110210953868190"><i className="fa fa-facebook"></i></a></li>
                                        <li className="pinterest animated bounceIn wow delay-04s"><a className="list" href="https://www.facebook.com/pages/Augmenify-Infotech-Pvt-Ltd/110210953868190"><i className="fa fa-pinterest"></i></a></li>
                                        <li className="gplus animated bounceIn wow delay-05s"><a className="list" href="https://www.facebook.com/pages/Augmenify-Infotech-Pvt-Ltd/110210953868190"><i className="fa fa-google-plus"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <form id="contact-form" onSubmit={this.submitEmail.bind(this)} method="POST">
                                <div className="contactus">
                                    <div className="input_wrapper input_wrapper_top">
                                        <div className="input_item">
                                            <input placeholder="Name" id="name" type="text"
                                                required value={this.state.name} onChange={this.onNameChange.bind(this)} />
                                            <i className="fas fa-user"></i>
                                        </div>
                                        <div className="input_item">
                                            <input placeholder="Email" id="email" type="text"
                                                required value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                                            <i className="fas fa-at"></i>
                                        </div>
                                    </div>
                                    <div className="input_wrapper input_wrapper_bottom">
                                        <div className="input_item">
                                            <input placeholder="Subject" id="subject" type="text"
                                                required value={this.state.subject} onChange={this.onSubjectChange.bind(this)} />
                                            <i className="fas fa-sticky-note"></i>
                                        </div>
                                        <div className="input_item">
                                            <input placeholder="Phone" id="phone" type="text"
                                                required value={this.state.phone} onChange={this.onPhoneChange.bind(this)} />
                                            <i className="fas fa-phone"></i>
                                        </div>
                                    </div>
                                    <div className="message_wrapper">
                                        <textarea placeholder="Message" id="message"
                                            rows="1" required value={this.state.message} onChange={this.onMsgChange.bind(this)} />
                                        <i className="fas fa-envelope-open"></i>
                                    </div>
                                    <button type="submit" className="btn">Send
                        </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </>
        );
    }

}

export default Contact
