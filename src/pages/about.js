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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              laudantium, quas laboriosam iusto deserunt expedita.
            </SectionDescription>
            <SectionDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              laudantium, quas laboriosam iusto deserunt expedita, labore
              incidunt odio similique commodi quos, placeat molestias aperiam
              debitis corrupti natus! A, consectetur nobis.
            </SectionDescription>
            <SectionDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis rem, nihil nesciunt in eligendi mollitia facilis iusto
              unde praesentium quis quibusdam voluptates libero. Adipisci ad
              inventore dolores quis distinctio exercitationem. Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. Neque maxime quia nam
              fugit ipsum. Accusantium minima labore vero? Iusto asperiores
              aliquam earum nostrum aperiam quos accusantium officia sint.
            </SectionDescription>
          </div>
        </div>
      </div>
    </NormalSection>
    <MiniAbout />
  </Wrap>
)
