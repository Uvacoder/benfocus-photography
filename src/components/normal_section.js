/** @jsx jsx */

import { css, jsx } from '@emotion/core'

// import { Colors } from '../constants'

export default ({ color, image, children }) => {
  const bgColor = `background-color: ${color || 'transparent'}`
  const bgImage = image ? `background-image: url(${image});` : ''

  return (
    <div
      css={css`
        padding: 7rem 0rem;
        background-size: cover;
        background-position: top center;
        ${bgImage}
        ${bgColor}
      `}>
      {children}
    </div>
  )
}
