import React from 'react'

import Wrap from '../layouts/wrap'

import { Colors } from '../constants'

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
  </Wrap>
)
