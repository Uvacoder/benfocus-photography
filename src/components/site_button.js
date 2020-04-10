/** @jsx jsx */

import { Link } from 'gatsby'
import { css, jsx } from '@emotion/core'

import { Fonts, Colors } from '../constants'

export default ({ to, noPadding, color, textColor, label }) => {
  return (
    <Link
      to={to}
      css={css`
        font-family: ${Fonts.head};
        background-color: ${color || Colors.white};
        text-transform: uppercase;
        padding: 1rem ${noPadding ? 0 : 2}rem;
        letter-spacing: 0.05rem;
        color: ${textColor || Colors.text};
        display: inline-block;
      `}>
      {label}
    </Link>
  )
}
