/** @jsx jsx */

import { css, jsx } from '@emotion/core'

import { Colors, Fonts } from '../constants'

import ServiceImage1 from '../assets/images/service-1.png'
import ServiceImage2 from '../assets/images/service-2.png'
import ServiceImage3 from '../assets/images/service-3.png'
import ServiceImage4 from '../assets/images/service-4.png'

import { SectionHead } from '../components/section_data'
import NormalSection from '../components/normal_section'

export default ({ featured }) => {
  let services = [
    {
      image: 1,
      featured: true,
      title: 'Event Coverage',
      items: [
        'Weddings',
        'Outdoor Festivals',
        'Promotional Events',
        'Concerts',
        'Team Sports',
      ],
    },
    {
      image: 2,
      featured: true,
      title: 'Property Tours',
      items: [
        'Weddings',
        'Outdoor Festivals',
        'Promotional Events',
        'Concerts',
        'Team Sports',
      ],
    },
    {
      image: 3,
      featured: true,
      title: 'Multimedia',
      items: [
        'Weddings',
        'Outdoor Festivals',
        'Promotional Events',
        'Concerts',
        'Team Sports',
      ],
    },
    {
      image: 4,
      featured: false,
      title: '360 VR',
      items: [
        'Weddings',
        'Outdoor Festivals',
        'Promotional Events',
        'Concerts',
        'Team Sports',
      ],
    },
    {
      image: 3,
      featured: false,
      title: 'Multimedia',
      items: [
        'Weddings',
        'Outdoor Festivals',
        'Promotional Events',
        'Concerts',
        'Team Sports',
      ],
    },
    {
      image: 4,
      featured: false,
      title: '360 VR',
      items: [
        'Weddings',
        'Outdoor Festivals',
        'Promotional Events',
        'Concerts',
        'Team Sports',
      ],
    },
  ]
  if (featured) {
    services = services.filter(item => item.featured)
  }
  return (
    <NormalSection color={Colors.secondary}>
      <div
        css={css`
          color: ${Colors.white};
        `}
        className="container">
        <div className="row">
          <div className="col-12 center">
            <SectionHead
              centered
              color={Colors.white}
              title={`${featured ? 'Featured ' : ''}Services`}
            />
          </div>
          {services.map(item => {
            let image
            switch (item.image) {
              case 1:
                image = ServiceImage1
                break
              case 2:
                image = ServiceImage2
                break
              case 3:
                image = ServiceImage3
                break
              case 4:
                image = ServiceImage4
                break
              default:
                image = ServiceImage1
            }
            return (
              <div
                className="col-4"
                css={css`
                  height: 45rem;
                `}>
                <img width="100%" src={image} alt="" />
                <div
                  css={css`
                    font-family: ${Fonts.head};
                    margin: 2.5rem 0;
                    font-size: 2rem;
                    text-transform: uppercase;
                  `}>
                  {item.title}
                </div>
                <ul>
                  {item.items.map(listItem => (
                    <li
                      css={css`
                        display: block;
                        color: inherit;
                        position: relative;
                        margin-bottom: 1rem;
                        padding-left: 1.3rem;
                        opacity: 0.6;
                        &:before {
                          content: '';
                          background-color: ${Colors.primary};
                          width: 0.7rem;
                          height: 0.7rem;
                          position: absolute;
                          border-radius: 100%;
                          left: 0;
                          top: 0.1rem;
                        }
                      `}>
                      {listItem}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </NormalSection>
  )
}
