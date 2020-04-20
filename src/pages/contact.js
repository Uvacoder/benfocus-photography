/** @jsx jsx */

import { css, jsx } from '@emotion/core'

import { Colors, Fonts, Media } from '../constants'

import Wrap from '../layouts/wrap'
import SiteButton from '../components/site_button'
import NormalSection from '../components/normal_section'
import { SectionHead, SectionDescription } from '../components/section_data'

export default () => (
  <Wrap pageTitle="Contact Us" innerPageName="Contact Us">
    <NormalSection color={Colors.primary}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <SectionHead color={Colors.white} title="Send Us A Message" />
          </div>
        </div>
        <div
          className="row"
          css={css`
            .input {
              display: block;
              width: 100%;
              border: 0;
              background-color: rgba(255, 255, 255, 0.9);
              padding: 1rem;
              font-size: inherit;
              margin-bottom: 1rem;
              outline: none !important;
              transition-duration: 0.2s;
              &:focus {
                background-color: #fff;
              }
            }
          `}>
          <div className="col-4">
            <input type="text" className="input" placeholder="Your Name" />
          </div>
          <div className="col-4">
            <input type="text" className="input" placeholder="Your Email" />
          </div>
          <div className="col-8">
            <textarea
              rows="5"
              css={css`
                margin-bottom: 2rem !important;
              `}
              className="input"
              placeholder="Your Message"></textarea>
            <SiteButton
              submit
              color={Colors.secondary}
              textColor={Colors.white}
              label="Submit"
            />
          </div>
        </div>
      </div>
    </NormalSection>
    <NormalSection>
      <div className="container">
        <div className="row">
          {[
            {
              title: 'Address',
              body: ['Address Line One', 'Line Two', 'Country'],
            },
            {
              title: 'Email',
              body: ['benjtambara@gmail.com', 'main@ben-focus.com'],
            },
            {
              title: 'Phone',
              body: ['+248 2516575'],
            },
          ].map(item => {
            return (
              <div
                css={css`
                  ${Media} {
                    padding-bottom: 3rem;
                  }
                `}
                className="col-4">
                <div
                  css={css`
                    color: ${Colors.primary};
                    font-family: ${Fonts.head};
                    margin-bottom: 2rem;
                    font-size: 2rem;
                    text-transform: uppercase;
                  `}>
                  {item.title}
                </div>
                <SectionDescription>
                  {item.body.map(det => (
                    <div
                      css={css`
                        margin-bottom: 0.1rem;
                      `}>
                      {det}
                    </div>
                  ))}
                </SectionDescription>
              </div>
            )
          })}
        </div>
      </div>
    </NormalSection>
  </Wrap>
)
