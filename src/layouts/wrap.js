/** @jsx jsx */

import { Link } from 'gatsby'
import { css, jsx } from '@emotion/core'

import '../assets/css/style.css'

import { Colors, Fonts } from '../constants'

import Logo from '../assets/images/logo.png'
import HeaderBg from '../assets/images/header.jpg'
import SiteButton from '../components/site_button'
import NormalSection from '../components/normal_section'

const MiniService = () => <div className="col-4"></div>

export default () => {
  const websiteTitle = 'Ben Focus'

  return (
    <div>
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
                  font-size: 1.1rem;
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
            color: ${Colors.white};
          `}>
          <h1
            css={css`
              font-family: ${Fonts.head};
              font-size: 4rem;
              margin-bottom: 2rem;
              color: inherit;
              text-transform: uppercase;
            `}>
            Areial Photography Services
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
      <NormalSection color={Colors.white}>
        <div className="row">
          <MiniService
            index="01"
            title="The Bird's Eye View"
            icon=""
            to="/services"
            className="col-4">
            The best part about Ben Focus is the perspective! Its only when
            your're flying above is that you realize how incredible the Earth
            really is.
          </MiniService>
          <MiniService
            index="02"
            title="4K Video"
            icon=""
            to="/services"
            className="col-4">
            What is 4K? We can tell you for sure that it isn't a standard
            definition, not high definition, and not in the slighthest a HD
            resolution! 4K is 4 times HD!
          </MiniService>
          <MiniService
            index="03"
            title="Multimedia"
            icon=""
            to="/services"
            className="col-4">
            Here at Ben Focus, we are extremely excited about meeting your
            needs. If you have chosen an idea for your project (video, photo,
            etc.), we will help you with all!
          </MiniService>
        </div>
      </NormalSection>
      <footer>
        <NormalSection image="">
          <div>Let's Fly...</div>
        </NormalSection>
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
              <div className="col">
                <div>{item.title}</div>
                <ul>
                  {item.items.map(listItem => (
                    <li>
                      <Link
                        css={css`
                          display: block;
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
        </div>
      </footer>
    </div>
  )
}
