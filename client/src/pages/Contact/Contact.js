import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import emailjs from "emailjs-com";

//Styles
import "./Contact.css";

//Background
import { Projects as background } from "../../assets/backgrounds/allbackgrounds";

//Componenets
import { Title } from "../../components/allComponents";

function Contact() {
  const styles = {
    background: {
      backgroundImage: `url("${background}")`,
      padding: "0",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      backgroundRepeat: "no-repeat",
      // marginBottom: "0"
    },
    p: {
      marginBottom: ".5rem",
    },
    shadow: {
      textShadow: "5px 5px 25px black",
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
    <div className="contact-container" style={styles.background}>
      <div className="contact-links">
        <Title />
      </div>
      <div style={{ color: "white" }} className="contact-card">
        
        <section className="form-group">
          <h1
            class="display-4 font-weight-bold text-white text-center"
            style={styles.shadow}
          >
            Get In Touch
          </h1>
          <article class="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="hidden" name="contact_number" />

                <input
                  type="text"
                  name="user_name"
                  value={form.user_name}
                  class="form-control"
                  placeholder="Name"
                  onChange={(e) =>
                    setForm({ ...form, user_name: e.target.value })
                  }
                />
              </div>
              <div className="form-group">

                <input
                  type="email"
                  name="user_email"
                  value={form.user_email}
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  onChange={(e) =>
                    setForm({ ...form, user_email: e.target.value })
                  }
                />
              </div>
              <div className="form-group">

                <textarea
                  name="message"
                  value={form.message}
                  className="form-control"
                  rows="3"
                  placeholder="Message"
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                />
              </div>
              <button
                type="submit"
                value="send"
                className="btn btn-lg text-white repo"
              >
                <h3
                  className="font-weight-bold"
                  style={{ marginBottom: "-.5px", textShadow: "none" }}
                >
                  Submit
                </h3>
              </button>
            </form>
          </article>
        </section>
      </div>
    </div>
  );
}

export default Contact;
