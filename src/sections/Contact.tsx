import "../styles/Contact.scss";

export default function Contact() {
  return (
    <div id="contact" className="section">
      <span className="header">
        Contact <span className="highlighted">Me!</span>
      </span>
      <form id="contact-form" className="form">
        <div className="line">
          <input
            className="field"
            name="name"
            type="text"
            placeholder="Full Name"
          />
          <input
            className="field"
            name="email"
            type="email"
            placeholder="Email Address"
          />
        </div>
        <div className="line">
          <input
            name="phone"
            className="field"
            type="tel"
            placeholder="Mobile Number"
          />
          <input
            name="subject"
            className="field"
            type="text"
            placeholder="Email Subject"
          />
        </div>
        <div className="line">
          <textarea
            name="message"
            className="field"
            placeholder="Your Message"
            rows={4}
          ></textarea>
        </div>
        <button className="btn btn-outline" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
