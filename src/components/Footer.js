import { Link } from 'gatsby'
import React from 'react'

const Footer = props => (
  <footer id="footer">
    <section>
      <h2>Aliquam sed mauris</h2>
      <p>
        Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat
        magna adipiscing tempus etiam dolore veroeros. eget dapibus mauris. Cras
        aliquet, nisl ut viverra sollicitudin, ligula erat egestas velit, vitae
        tincidunt odio.
      </p>
      <ul className="actions">
        <li>
          <Link to="/generic" className="button">
            Learn More
          </Link>
        </li>
      </ul>
    </section>
    <section>
      <h2>Etiam feugiat</h2>
      <dl className="alt">
        <dt>Address</dt>
        <dd>Berlin, Germany</dd>
        <dt>Email</dt>
        <dd>
          <a href="https://codebushi.com">information@untitled.tld</a>
        </dd>
      </dl>
      <ul className="icons">
        <li>
          <a href="https://www.linkedin.com/in/jan-voelker-webdev/" className="icon fa-linkedin alt">
            <span className="label">LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/jan-webdev"
            className="icon fa-github alt"
          >
            <span className="label">GitHub</span>
          </a>
        </li>
      </ul>
    </section>
    <p className="copyright">
      &copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.
    </p>
  </footer>
)

export default Footer
