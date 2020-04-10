/** @jsx jsx */

import { Link } from 'gatsby'
import { css, jsx } from '@emotion/core'

import { Fonts, Colors } from '../constants'

export default ({ to, label }) => {
  return (
    <Link
      to={to}
      css={css`
        font-family: ${Fonts.head};
        background-color: ${Colors.white};
        text-transform: uppercase;
        padding: 1rem 2rem;
        letter-spacing: 0.05rem;
        color: ${Colors.text};
      `}>
      {label}
    </Link>
  )
}
