/** @jsx jsx */

import { css, jsx } from '@emotion/core'

import { Colors, Fonts } from '../constants'

import Wrap from '../layouts/wrap'
import NormalSection from '../components/normal_section'
import SiteButton from '../components/site_button'

export default () => (
  <Wrap pageTitle="Page Not Found" innerPageName="Page Not Found">
    <NormalSection>
      <div className="container center">
        <div
          css={css`
            color: ${Colors.primary};
            font-family: ${Fonts.head};
            margin: 2.5rem 0;
            font-size: 6rem;
            text-transform: uppercase;
          `}>
          404
        </div>
        <div
          css={css`
            margin: 2.5rem 0;
            font-size: 2rem;
          `}>
          Page Not Found!
        </div>
        <SiteButton
          label="Go Home"
          to="/"
          color={Colors.primary}
          textColor={Colors.white}
        />
      </div>
    </NormalSection>
  </Wrap>
)
