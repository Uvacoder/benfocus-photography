/** @jsx jsx */

import { Link } from 'gatsby'
import { css, jsx } from '@emotion/core'

import { Fonts, Colors } from '../constants'

export default ({ to, noPadding, color, textColor, label, submit }) => {
  const style = `font-family: ${Fonts.head};
  background-color: ${color || Colors.white};
  text-transform: uppercase;
  padding: 1rem ${noPadding ? 0 : 2}rem;
  letter-spacing: 0.05rem;
  color: ${textColor || Colors.text};
  display: inline-block;`
  return submit ? (
    <button
      type="submit"
      css={css`
        ${style}
        border: 0;
        font-size: inherit;
        outline: none !important;
      `}>
      {label}
    </button>
  ) : (
    <Link
      to={to}
      css={css`
        ${style}
      `}>
      {label}
    </Link>
  )
}
