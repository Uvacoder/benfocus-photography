/** @jsx jsx */

import { css, jsx } from '@emotion/core'

import { Colors, Fonts } from '../constants'

export const SectionDescription = ({ color, children }) => {
  return (
    <div
      css={css`
        color: ${color || Colors.text};
        font-size: 1rem;
        line-height: 1.6rem;
        margin-bottom: 1rem;
        opacity: 0.6;
      `}>
      {children}
    </div>
  )
}

export const SectionHead = ({ color, title }) => {
  color = color || Colors.text
  return (
    <div
      css={css`
        color: ${color};
        font-family: ${Fonts.head};
        font-size: 3rem;
        text-transform: uppercase;
        line-height: 1.4;
        margin-bottom: 3.5rem;
        position: relative;
        &:before {
          content: '';
          border-top: 0.1rem solid;
          left: 0;
          position: absolute;
          width: 3rem;
          color: ${color};
          bottom: -1.4rem;
        }
      `}>
      {title}
    </div>
  )
}
