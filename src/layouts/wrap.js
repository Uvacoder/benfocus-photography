/** @jsx jsx */

import { Link } from 'gatsby'
import { css, jsx } from '@emotion/core'

import '../assets/css/style.css'

import { Colors, Fonts } from '../constants'

import Logo from '../assets/images/logo.png'
import HeaderBg from '../assets/images/header.jpg'
import FooterBg from '../assets/images/footer.jpg'

import InstagramIcon from '../assets/images/icons/instagram.png'

import SiteButton from '../components/site_button'
import NormalSection from '../components/normal_section'

export default ({ children }) => {
  const websiteTitle = 'Ben Focus'

  return (
    <div
      css={css`
        color: ${Colors.text};
      `}>
      <header
        css={css`
          background-image: url(${HeaderBg});
          background-position: top center;
          background-size: cover;
          padding-top: 1rem;
          position: relative;
          min-height: 100vh;
        `}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-3">
              <Link
                css={css`
                  width: 8rem;
                  display: inline-block;
                `}
                to="/">
                <img src={Logo} alt={websiteTitle} width="100%" />
              </Link>
            </div>
            <div className="col-9">
              <nav
                css={css`
                  text-align: right;
                  font-family: ${Fonts.head};
                  text-transform: uppercase;
                  letter-spacing: 0.05rem;
                  font-size: 1.2rem;
                `}>
                <ul
                  css={css`
                    li:last-child a {
                      margin-right: 0;
                    }
                  `}>
                  {[
                    { to: '/', title: 'Home' },
                    { to: '/work', title: 'Work' },
                    { to: '/about', title: 'About' },
                    { to: '/services', title: 'Services' },
                    { to: '/contact', title: 'Contact' },
                  ].map(item => (
                    <li
                      css={css`
                        display: inline-block;
                      `}>
                      <Link
                        css={css`
                          display: block;
                          margin: 1.8rem 2rem;
                          transition-duration: 0.2s;
                          position: relative;
                          color: inherit;
                          &:before {
                            content: '';
                            position: absolute;
                            bottom: -0.5rem;
                            left: 0;
                            right: 0;
                            border-bottom: 0.1rem solid;
                            opacity: 0;
                            transition-duration: 0.2s;
                          }
                          &.active {
                            color: ${Colors.primary};
                            &:before {
                              opacity: 1;
                            }
                          }
                        `}
                        activeClassName="active"
                        to={item.to}>
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div
          css={css`
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            width: 100%;
          `}>
          <h1
            css={css`
              font-family: ${Fonts.head};
              font-size: 4rem;
              margin-bottom: 2rem;
              color: inherit;
              text-transform: uppercase;
            `}>
            Photography & Videography Services
          </h1>
          <h2
            css={css`
              color: inherit;
              line-height: 1.5rem;
              font-size: 1.2rem;
              margin-bottom: 3rem;
              opacity: 0.8;
            `}>
            Extreme Aerial Photography and Video Artistry for Lifestyle, Action
            and Commerce.
          </h2>
          <SiteButton to="/services" label="More Info" />
        </div>
      </header>
      {/* {children} */}
      <footer
        css={css`
          background-color: ${Colors.secondary};
          color: ${Colors.white};
        `}>
        <NormalSection image={FooterBg}>
          <div
            css={css`
              text-align: center;
              font-size: 4rem;
              font-family: ${Fonts.head};
              text-transform: uppercase;
            `}>
            Let's Fly...
          </div>
        </NormalSection>
        <NormalSection>
          <div className="container">
            <div className="row">
              {[
                {
                  title: 'Info',
                  items: [
                    {
                      title: "The Bird's Eye View",
                      to: '/services',
                    },
                    {
                      title: '4K Video',
                      to: '/services',
                    },
                    {
                      title: 'Contact Us',
                      to: '/contact',
                    },
                  ],
                },
                {
                  title: 'Services',
                  items: [
                    {
                      title: 'Event Coverage',
                      to: '/services',
                    },
                    {
                      title: 'Property Tours',
                      to: '/services',
                    },
                    {
                      title: 'Multimedia',
                      to: '/contact',
                    },
                  ],
                },
                {
                  title: 'Links',
                  items: [
                    {
                      title: 'Our Team',
                      to: '/about',
                    },
                    {
                      title: 'Clients',
                      to: '/about',
                    },
                    {
                      title: 'Media',
                      to: '/work',
                    },
                  ],
                },
              ].map(item => (
                <div className="col-4">
                  <div
                    css={css`
                      font-family: ${Fonts.head};
                      text-transform: uppercase;
                      font-size: 2rem;
                      margin-bottom: 2rem;
                    `}>
                    {item.title}
                  </div>
                  <ul>
                    {item.items.map(listItem => (
                      <li>
                        <Link
                          css={css`
                            display: block;
                            color: inherit;
                            position: relative;
                            margin-bottom: 1rem;
                            padding-left: 1.3rem;
                            opacity: 0.6;
                            &:before {
                              content: '';
                              background-color: ${Colors.primary};
                              width: 0.7rem;
                              height: 0.7rem;
                              position: absolute;
                              border-radius: 100%;
                              left: 0;
                              top: 0.1rem;
                            }
                          `}
                          to={listItem.to}>
                          {listItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <hr
              css={css`
                border-color: #fff;
                margin: 3rem 1.1rem 3rem;
                opacity: 0.05;
              `}
            />
            <div
              css={css`
                opacity: 0.8;
              `}
              className="row">
              <div className="col-8">
                Ben Focus &copy; 2020. All Rights Reserved. Developed by{' '}
                <a
                  css={css`
                    color: inherit;
                  `}
                  rel="noopener noreferrer"
                  href="https://chandujs.dev"
                  target="_blank">
                  Chandu J S
                </a>{' '}
                with ❤️
              </div>
              <div
                className="col-4"
                css={css`
                  text-align: right;
                  position: relative;
                  top: -0.7rem;
                  a {
                    display: inline-block;
                    width: 2rem;
                    margin-left: 0.5rem;
                  }
                `}>
                <a rel="noopener noreferrer" href="https://instagram.com">
                  <img width="100%" src={InstagramIcon} alt="Instagram" />
                </a>
              </div>
            </div>
          </div>
        </NormalSection>
      </footer>
    </div>
  )
}
