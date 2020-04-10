import React from 'react'

import Wrap from '../layouts/wrap'

import { Colors } from '../constants'

import MiniService from '../components/mini_service'
import NormalSection from '../components/normal_section'

export default () => (
  <Wrap>
    <NormalSection color={Colors.white}>
      <div className="row">
        <MiniService
          index="01"
          title="The Bird's Eye View"
          icon=""
          to="/services"
          className="col-4">
          The best part about Ben Focus is the perspective! Its only when
          your're flying above is that you realize how incredible the Earth
          really is.
        </MiniService>
        <MiniService
          index="02"
          title="4K Video"
          icon=""
          to="/services"
          className="col-4">
          What is 4K? We can tell you for sure that it isn't a standard
          definition, not high definition, and not in the slighthest a HD
          resolution! 4K is 4 times HD!
        </MiniService>
        <MiniService
          index="03"
          title="Multimedia"
          icon=""
          to="/services"
          className="col-4">
          Here at Ben Focus, we are extremely excited about meeting your needs.
          If you have chosen an idea for your project (video, photo, etc.), we
          will help you with all!
        </MiniService>
      </div>
    </NormalSection>
  </Wrap>
)
