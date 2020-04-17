/** @jsx jsx */

import { Link, StaticQuery, graphql } from 'gatsby'
import { css, jsx } from '@emotion/core'
import Img from 'gatsby-image/withIEPolyfill'

import { Colors, Fonts } from '../constants'

import Wrap from '../layouts/wrap'
import NormalSection from '../components/normal_section'
import { SectionHead } from '../components/section_data'

const WorkItem = ({ className, thumbnail, category, title, slug }) => {
  return (
    <div className={className}>
      <Link
        css={css`
          display: block;
          overflow: hidden;
          position: relative;
          margin-bottom: 2rem;
          &:before {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;
            background-color: #252525;
            z-index: 1;
            opacity: 0;
            transition-duration: 0.2s;
          }
          .titleClass {
            position: absolute;
            z-index: 1;
            padding: 2rem;
            font-size: 2rem;
            text-transform: uppercase;
            color: ${Colors.white};
            opacity: 0;
            top: 1rem;
            transition-duration: 0.2s;
          }
          &:hover {
            &:before {
              opacity: 0.8;
            }
            .titleClass {
              opacity: 1;
              top: 0;
            }
          }
        `}
        to={`/work/${slug}`}>
        <div className="titleClass">
          <div
            css={css`
              font-family: ${Fonts.head};
              color: ${Colors.primary};
            `}>
            {title}
          </div>
          <div
            css={css`
              font-size: 0.5em;
              margin-top: 0.5rem;
            `}>
            {category}
          </div>
        </div>
        <Img fixed={thumbnail} objectFit="cover" objectPosition="50% 50%" />
      </Link>
    </div>
  )
}

export default () => (
  <Wrap pageTitle="Work" innerPageName="Our Work">
    <NormalSection>
      <div
        className="row"
        css={css`
          padding: 0rem 2rem;
        `}>
        <div className="col-12 center">
          <SectionHead centered title="Our Work" />
        </div>
        <StaticQuery
          query={graphql`
            query {
              allMarkdownRemark {
                edges {
                  node {
                    html
                    frontmatter {
                      title
                      thumbnail
                      sort
                      category
                    }
                    fields {
                      slug
                    }
                  }
                }
              }
              allFile(filter: { relativeDirectory: { eq: "uploads" } }) {
                edges {
                  node {
                    relativePath
                    childImageSharp {
                      fixed(width: 500, height: 300, quality: 100) {
                        ...GatsbyImageSharpFixed
                      }
                    }
                  }
                }
              }
            }
          `}
          render={({ allMarkdownRemark, allFile }) => {
            const workList = allMarkdownRemark.edges.map(item => item.node)
            const thumbnails = allFile.edges.map(item => item.node)

            return workList.map(item => {
              const thumbnail = thumbnails.find(image => {
                return image.relativePath === item.frontmatter.thumbnail
              })
              return (
                <WorkItem
                  className="col-4"
                  title={item.frontmatter.title}
                  category={item.frontmatter.category}
                  thumbnail={thumbnail.childImageSharp.fixed}
                  slug={item.fields.slug}
                />
              )
            })
          }}
        />
      </div>
    </NormalSection>
  </Wrap>
)
