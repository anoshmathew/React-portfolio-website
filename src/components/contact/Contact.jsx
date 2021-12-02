import emailjs from "emailjs-com"
import { TextareaAutosize } from "@material-ui/core"
import "./contact.scss"
import { useState } from "react"

export default function Contact() {

    function sendEmail (e) {
        e.preventDefault();

    emailjs.sendForm('service_upx1hvv', 'template_4pmv48m', e.target, 'user_FiugXeIJEYQmWBaG7Gaa3')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    }

    const [message,setMessage] = useState(false)
    const handleSubmit = (e)=>{
        e.preventDefault();
        setMessage(true)
    }

    return (
        <div className="contact" id="contact">
             <div className="left">
                 <img src="assets/shake.svg" alt=""/>
             </div>
             <div className="right">
                 <h2>
                     Contact.
                 </h2>
                 <form onSubmit={handleSubmit,sendEmail}>
                    <input type="text" placeholder="Email" name="email"/>
                    <textarea placeholder="Message" name="message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks, I'll reply ASAP :)</span>}
                 </form>
             </div>
        </div>
    )
}

