/** @jsx jsx */

import { Link } from 'gatsby'
import { css, jsx } from '@emotion/core'

export default ({ props }) => {
  return (
    <Link to={props.to} css={css``}>
      {props.label}
    </Link>
  )
}
