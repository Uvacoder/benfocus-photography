/** @jsx jsx */

import { css, jsx } from '@emotion/core'

import Wrap from '../layouts/wrap'

import { Colors, Fonts } from '../constants'

import HomeAboutImg from '../assets/images/home-about.png'

import { SectionHead, SectionDescription } from '../components/section_data'
import MiniService from '../components/mini_service'
import NormalSection from '../components/normal_section'
import SiteButton from '../components/site_button'

export default () => (
  <Wrap>
    <NormalSection color={Colors.white}>
      <div className="container">
        <div className="row">
          <MiniService
            index="01"
            title="The Bird's Eye View"
            to="/services"
            className="col-4">
            <SectionDescription>
              The best part about Ben Focus is the perspective! Its only when
              your're flying above is that you realize how incredible the Earth
              really is.
            </SectionDescription>
          </MiniService>
          <MiniService
            index="02"
            title="4K Video"
            to="/services"
            className="col-4">
            <SectionDescription>
              What is 4K? We can tell you for sure that it isn't a standard
              definition, not high definition, and not in the slighthest a HD
              resolution! 4K is 4 times HD!
            </SectionDescription>
          </MiniService>
          <MiniService
            index="03"
            title="Multimedia"
            to="/services"
            className="col-4">
            <SectionDescription>
              Here at Ben Focus, we are extremely excited about meeting your
              needs. If you have chosen an idea for your project (video, photo,
              etc.), we will help you with all!
            </SectionDescription>
          </MiniService>
        </div>
      </div>
    </NormalSection>
    <NormalSection image={HomeAboutImg} imageRight color={Colors.light}>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <SectionHead title="Photography & Video Production Services" />
            <SectionDescription>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque,
              dignissimos! Expedita, sint doloremque? Eveniet, obcaecati!
              Aliquam odio omnis error quas dolores. Consequuntur officiis cum
              inventore dignissimos aliquam odio laudantium accusamus.
            </SectionDescription>
            <br />
            <br />
            <SiteButton
              to="/contact"
              textColor={Colors.white}
              color={Colors.primary}
              label="Get In Touch"
            />
          </div>
        </div>
      </div>
    </NormalSection>
    <NormalSection color={Colors.primary}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <SectionHead
              color={Colors.white}
              title="We're About Quality & Trust"
            />
          </div>
          {[
            {
              title: 'Quality',
              body:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia illo hic optio, unde eligendi obcaecati laboriosam quos atque',
            },
            {
              title: 'Professional',
              body:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia illo hic optio, unde eligendi obcaecati laboriosam quos atque',
            },
            {
              title: 'Trusted',
              body:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia illo hic optio, unde eligendi obcaecati laboriosam quos atque',
            },
          ].map(item => {
            return (
              <div className="col-4">
                <div
                  css={css`
                    color: ${Colors.white};
                    font-family: ${Fonts.head};
                    margin-bottom: 1.5rem;
                    font-size: 1.5rem;
                    text-transform: uppercase;
                  `}>
                  {item.title}
                </div>
                <SectionDescription color={Colors.white}>
                  {item.body}
                </SectionDescription>
              </div>
            )
          })}
        </div>
      </div>
    </NormalSection>
  </Wrap>
)
