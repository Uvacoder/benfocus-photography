/** @jsx jsx */

import { jsx } from '@emotion/core'

import { Colors } from '../constants'

import Wrap from '../layouts/wrap'
import NormalSection from '../components/normal_section'
import { SectionHead, SectionDescription } from '../components/section_data'

import AboutUsImage from '../assets/images/about-us.png'
import MiniAbout from '../components/mini_about'

export default () => (
  <Wrap pageTitle="About Us" innerPageName="About Us">
    <NormalSection color={Colors.light}>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img src={AboutUsImage} width="100%" alt="About Us" />
          </div>
          <div className="col-6">
            <SectionHead title="Welcome to Ben Focus" />
            <SectionDescription color={Colors.primary}>
              BenFocus is the brainchild of Benjamin Tambara, an ace
              photographer and videographer based in Seychelles. A professional,
              who always goes the extra mile, Ben has honed his craft over the
              years to deliver specialised solutions to a discerning and happy
              clientele.
            </SectionDescription>
            <SectionDescription>
              In the world of communications, it’s the little details that go a
              long way to create the big picture. At BenFocus, we focus on the
              details to improve our performance and deliver consistent results
            </SectionDescription>
            <SectionDescription>
              If you are looking for a TV Commercial to launch your product or
              service or a Corporate Video to increase your company’s market
              share, consider we’ve got you covered.
            </SectionDescription>
            <SectionDescription>
              A one stop shop for all your communication needs, BenFocus has
              invested in state-of-the-art equipment and top notch technical and
              creative human resources to help you achieve your goals.
            </SectionDescription>
            <SectionDescription>
              Our focus is also on working closely with clients to understand
              their individual needs and deliver a high quality output, on time
              and on target, to keep you ahead of the competition.
            </SectionDescription>
          </div>
        </div>
      </div>
    </NormalSection>
    <MiniAbout />
  </Wrap>
)
