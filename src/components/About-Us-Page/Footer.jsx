const Footer = () => {
    const year = new Date().getFullYear();

  return (
      <section className="footer">
          <div className="footer_links">
              <h3> Privacy Policy </h3>
              <h3> FAQ  </h3>
              <h3>  Contact Us  </h3>
              <h3> Help  </h3>
          </div>

          <div className="footer_bottom">
              <p>Brandwave - a Techyjaunt group Project for the Capstone Project, Group K</p>

              <p> &copy; {year} Brandwave All Rights Reserved</p>
          </div>
    </section>
  )
}

export default Footer;