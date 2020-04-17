/** @jsx jsx */

import { css, jsx } from '@emotion/core'

import { Fonts, Colors } from '../constants'

import SiteButton from '../components/site_button'
import { SectionDescription } from '../components/section_data'

export default ({ title, date, slug, children, className }) => {
  return (
    <div
      className={className}
      css={css`
        box-shadow: rgba(0, 0, 0, 0.05) 0 0 0 0.3rem;
        padding: 2rem;
        background-color: ${Colors.white};
      `}>
      <div
        css={css`
          font-family: ${Fonts.head};
          font-size: 1.5rem;
          text-transform: uppercase;
          margin-bottom: 1rem;
          position: relative;
        `}>
        {title}
      </div>
      <div
        css={css`
          color: ${Colors.primary};
          margin-bottom: 2rem;
        `}>
        {date}
      </div>
      <SectionDescription>{children}</SectionDescription>
      <br />
      <SiteButton
        to={`/${slug}`}
        textColor={Colors.white}
        color={Colors.primary}
        label="Read More"
      />
    </div>
  )
}
