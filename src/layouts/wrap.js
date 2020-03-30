/** @jsx jsx */

import { css, jsx } from '@emotion/core'

import '../assets/css/style.css'

export default ({ children }) => (
  <div
    css={css`
      display: block;
    `}>
    {children}
  </div>
)
