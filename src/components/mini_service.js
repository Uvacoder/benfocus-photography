/** @jsx jsx */

import { css, jsx } from '@emotion/core'

import { Fonts, Colors } from '../constants'

import SiteButton from '../components/site_button'

export default ({ title, index, to, children, className }) => {
  return (
    <div className={className}>
      <div
        css={css`
          font-family: ${Fonts.head};
          font-size: 2rem;
          text-transform: uppercase;
          margin-bottom: 3rem;
          position: relative;
          z-index: 0;
          padding-left: 0;
          &:before {
            content: '${index}';
            position: absolute;
            font-size: 7rem;
            left: 0;
            bottom: -2.5rem;
            color: ${Colors.text};
            opacity: 0.05;
            z-index: -1;
          }
        `}>
        {title}
      </div>
      {children}
      {to ? (
        <SiteButton
          to={to}
          textColor={Colors.primary}
          noPadding
          color="transparent"
          label="Learn More"
        />
      ) : (
        ''
      )}
    </div>
  )
}
