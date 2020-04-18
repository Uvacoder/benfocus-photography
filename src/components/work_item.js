/** @jsx jsx */

import { Link } from 'gatsby'
import { css, jsx } from '@emotion/core'
import Img from 'gatsby-image/withIEPolyfill'

import { Colors, Fonts } from '../constants'

export default ({ className, thumbnail, category, title, slug }) => {
  const style = `
    display: block;
    overflow: hidden;
    position: relative;
    margin-bottom: 2rem;
    height: 18rem;
    ${
      slug
        ? `&:before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      background-color: #252525;
      z-index: 1;
      opacity: 0;
      transition-duration: 0.2s;
    }`
        : ''
    }
    .titleClass {
      position: absolute;
      z-index: 1;
      padding: 2rem;
      font-size: 2rem;
      text-transform: uppercase;
      color: ${Colors.white};
      opacity: 0;
      top: 1rem;
      transition-duration: 0.2s;
    }
    &:hover {
      &:before {
        opacity: 0.8;
      }
      .titleClass {
        opacity: 1;
        top: 0;
      }
    }
  `

  const inner = (
    <div>
      {slug ? (
        <div className="titleClass">
          <div
            css={css`
              font-family: ${Fonts.head};
              color: ${Colors.primary};
            `}>
            {title}
          </div>
          <div
            css={css`
              font-size: 0.5em;
              margin-top: 0.5rem;
            `}>
            {category}
          </div>
        </div>
      ) : (
        ''
      )}
      <Img fixed={thumbnail} objectFit="cover" objectPosition="50% 50%" />
    </div>
  )
  return (
    <div className={className}>
      {slug ? (
        <Link
          css={css`
            ${style}
          `}
          to={`/work/${slug}`}>
          {inner}
        </Link>
      ) : (
        <div
          css={css`
            ${style}
          `}>
          {inner}
        </div>
      )}
    </div>
  )
}
