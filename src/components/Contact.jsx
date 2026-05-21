const contactChannel = {
  address: ["6720 Szeged, Kalamári utca 50."],
  phone: ["+36 12 345 6789"],
  email: ["hungaropalinka@palinka-mail.com"],
};

function Contact() {
  return (
    <div className="contact" id="contact">
      <div>
        <h2 className="welcome-msg" id="welcome-msg">
          You can reach us on the following channels
        </h2>
      </div>
      <div className="contact-type" id="contact-type">
        <h3>
          <a
            className="contact-address"
            id="contact-address"
            href="https://www.google.com/maps/search/6800+H%C3%B3dmez%C5%91v%C3%A1s%C3%A1rhely,+Kalam%C3%A1ri+utca+50./@46.4210836,20.315913,14z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDUxMS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            {contactChannel.address}
          </a>
        </h3>
        <h3>
          <a className="contact-tel" id="contact-tel" href="tel:+36123456789">
            {contactChannel.phone}
          </a>
        </h3>
        <h3>
          <a
            className="contact-email"
            id="contact-email"
            href="mailto:hungaropalinka@palinka-mail.com"
          >
            {contactChannel.email}
          </a>
        </h3>
      </div>
    </div>
  );
}
export default Contact;
