import React, { useState } from 'react'
import emailjs from "emailjs-com";

import "./ContactForm.css"


function ContactForm() {
    const styles = {
        formControl: {
          background: "#F2F2F2",
          border: "1px solid white",
          color: "white"
        },
      };


  const [form, setForm] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_s7bqtul",
        "template_p0gthlj",
        event.target,
        "user_3HcYoVvlGR750T1iaPkne"
      )
      .then(
        (result) => {
          //   console.log(result.text);
          setForm({
            user_name: "",
            user_email: "",
            message: "",
          });
        },
        (error) => {
          //   console.log(error.text);
        }
      );
  };

    return (
        <div style={{ color: "white" }} className="contact-card">
        <section className="form-group">
          <h1 className="contact-h1">Get In Touch</h1>
          <h2 className="contact-h2">awsiegfried@gmail.com</h2>
          <article className="card-body">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="user_name"
                  value={form.user_name}
                  className="form-control"
                  placeholder="NAME"
                  onChange={(e) =>
                    setForm({ ...form, user_name: e.target.value })
                  }
                  style={styles.formControl}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="user_email"
                  value={form.user_email}
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="EMAIL"
                  onChange={(e) =>
                    setForm({ ...form, user_email: e.target.value })
                  }
                  style={styles.formControl}
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  value={form.message}
                  className="form-control"
                  rows="3"
                  placeholder="MESSAGE"
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  style={styles.formControl}
                />
              </div>
              <button type="submit" value="send" className="btn-lg repo">
                <h3
                  className="font-weight-bold contact-h3"
                  style={{ marginBottom: "-.5px", textShadow: "none", fontSize: "20px" }}
                >
                  SEND
                </h3>
              </button>
            </form>
          </article>
        </section>
      </div>
    )
}

export default ContactForm
