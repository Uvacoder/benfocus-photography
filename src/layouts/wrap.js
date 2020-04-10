/** @jsx jsx */

import { Link } from 'gatsby'
import { css, jsx } from '@emotion/core'

import '../assets/css/style.css'

import SiteButton from '../components/site_button'

const MiniService = () => {
  ;<div className="col-4"></div>
}

export default () => {
  const websiteTitle = 'Ben Focus'
  const headerBackground = ''

  return (
    <div>
      <header
        css={css`
          position: relative;
          background-image: url(${headerBackground});
        `}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-3">
              <Link to="/">
                <img src={Logo} alt={websiteTitle} />
              </Link>
            </div>
            <div className="col-9">
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/work">Work</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/services">Services</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div css={css``}>
          <div css={css``}>Areial Photography Services</div>
          <div css={css``}>
            Extreme Aerial Photography and Video Artistry for Lifestyle, Action
            and Commerce.
          </div>
          <SiteButton to="/services" label="More Info" />
        </div>
      </header>
      <div>
        <div className="row">
          <MiniService className="col-4">
            The best part about Ben Focus is the perspective! Its only when
            your're flying above is that you realize how incredible the Earth
            really is.
          </MiniService>
        </div>
      </div>
    </div>
  )
}
