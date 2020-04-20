/** @jsx jsx */

import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { css, jsx, Global } from '@emotion/core'

import Styles from '../styles'

import { Colors, Fonts, Media } from '../constants'

import Logo from '../assets/images/logo.png'
import HeaderBg from '../assets/images/header.jpg'
import FooterBg from '../assets/images/footer.jpg'

import InstagramIcon from '../assets/images/icons/instagram.png'

import SiteButton from '../components/site_button'
import NormalSection from '../components/normal_section'

const websiteTitle = 'Ben Focus'

const Header = ({ innerPageName }) => {
  return (
    <header
      css={css`
        background-image: url(${HeaderBg});
        background-position: top center;
        background-size: cover;
        padding-top: 1rem;
        position: relative;
        height: ${innerPageName ? '25rem' : '100vh'};
        min-height: ${innerPageName ? 'initial' : '566px'};
        background-attachment: ${innerPageName ? 'initial' : 'fixed'};

        ${Media} {
          height: initial;
          padding-top: 3rem;
          min-height: ${innerPageName ? '25rem' : '566px'};
          background-image: initial;
          background-color: #eee;
        }
      `}>
      <div className="row">
        <div className="col-3">
          <Link
            css={css`
              width: 8rem;
              display: inline-block;

              ${Media} {
                display: block;
                text-align: center;
                margin: auto;
              }
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

              ${Media} {
                text-align: center;
              }
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
      <div
        className="container"
        css={css`
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          width: 100%;

          ${Media} {
            padding-bottom: 4rem;
            position: initial;
            transform: initial;
          }
        `}>
        <h1
          css={css`
            font-family: ${Fonts.head};
            font-size: ${innerPageName ? '3rem' : '4rem'};
            margin-bottom: 2rem;
            display: inline-block;
            margin-top: ${innerPageName ? '3rem' : 0};
            background-color: ${innerPageName ? Colors.primary : 'initial'};
            color: ${innerPageName ? Colors.white : 'inherit'};
            text-transform: uppercase;
            padding: 1rem 2rem;

            ${Media.tab} {
              font-size: 3rem;
              margin-top: 2rem;
            }
          `}>
          {innerPageName || 'Photography & Videography Services'}
        </h1>
        {innerPageName ? (
          ''
        ) : (
          <div>
            <h2
              css={css`
                color: inherit;
                line-height: 1.5rem;
                font-size: 1.2rem;
                margin-bottom: 3rem;
                opacity: 0.8;
              `}>
              Extreme Aerial Photography and Video Artistry for Lifestyle,
              Action and Commerce.
            </h2>
            <SiteButton
              to="/services"
              color={Colors.primary}
              textColor={Colors.white}
              label="More Info"
            />
          </div>
        )}
      </div>
    </header>
  )
}

const Footer = () => {
  return (
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
              <div
                css={css`
                  ${Media} {
                    padding-bottom: 3rem;
                    text-align: center;
                  }
                `}
                className="col-4">
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
                            top: 0.1rem;
                            margin-left: -1.4rem;
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

              ${Media} {
                text-align: center;
              }
            `}
            className="row">
            <div className="col-8">
              Ben Focus &copy; 2020. Website by{' '}
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

                ${Media} {
                  text-align: center;
                  padding-top: 2rem;
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
  )
}

export default ({ children, pageTitle, innerPageName }) => {
  const siteMetadata = {
    title: `Ben Focus${pageTitle ? ' - ' + pageTitle : ''}`,
    description: 'Ben Focus',
    siteURL: 'https://ben-focus.com',
  }
  return (
    <div
      css={css`
        color: ${Colors.text};
      `}>
      <Global styles={Styles} />
      <Helmet
        defaultTitle={siteMetadata.title}
        meta={[
          { name: `description`, content: siteMetadata.description },

          // <!-- Google / Search Engine Tags -->
          { itemprop: 'name', content: siteMetadata.title },
          { itemprop: 'description', content: siteMetadata.description },
          { itemprop: 'image', content: `${siteMetadata.siteURL}/cover.jpg` },

          // <!-- Facebook Meta Tags -->
          { property: 'og:type', content: 'website' },
          { property: 'og:url', content: siteMetadata.siteURL },
          { property: 'og:title', content: siteMetadata.title },
          { property: 'og:description', content: siteMetadata.description },
          {
            property: 'og:image',
            content: `${siteMetadata.siteURL}/cover.jpg`,
          },

          // <!-- Twitter Meta Tags -->
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: siteMetadata.title },
          {
            name: 'twitter:description',
            content: siteMetadata.description,
          },
          {
            name: 'twitter:image',
            content: `${siteMetadata.siteURL}/cover.jpg`,
          },
        ]}>
        <html lang="en" />
      </Helmet>
      <Header innerPageName={innerPageName} />
      {children}
      <Footer />
    </div>
  )
}
