/** @jsx jsx */

import { css, jsx } from '@emotion/core'

export default ({ color, image, imageRight, children, noPadding }) => {
  const bgColor = `background-color: ${color || 'transparent'}`
  const bgImage = image ? `background-image: url(${image});` : ''
  const bgSize = `background-size: ${imageRight ? 'contain' : 'cover'};`
  const bgRepeat = imageRight ? `background-repeat: no-repeat;` : ''

  return (
    <div
      css={css`
        position: relative;
        padding: ${noPadding ? '0rem' : '7rem 0rem'};
        background-position: ${imageRight ? 'center right' : 'top center'};
        ${bgRepeat}
        ${bgSize}
        ${bgImage}
        ${bgColor}
      `}>
      {children}
    </div>
  )
}
