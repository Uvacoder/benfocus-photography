/** @jsx jsx */

import { css, jsx } from '@emotion/core'

export default ({ color, children }) => {
  return (
    <div
      css={css`
        background-color: ${color};
      `}>
      {children}
    </div>
  )
}
