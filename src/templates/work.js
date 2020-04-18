/** @jsx jsx */

import { StaticQuery, graphql } from 'gatsby'
import { css, jsx } from '@emotion/core'

import { Colors } from '../constants'

import Wrap from '../layouts/wrap'
import WorkItem from '../components/work_item'
import NormalSection from '../components/normal_section'
import { SectionHead, SectionDescription } from '../components/section_data'

export default ({ pageContext }) => {
  const data = pageContext.dataItem
  return (
    <Wrap
      pageTitle={`Work - ${data.frontmatter.title}`}
      innerPageName={data.frontmatter.title}>
      <NormalSection color={Colors.light}>
        <div className="container center">
          <div className="row">
            <div className="col-12">
              <SectionHead centered title={data.frontmatter.title} />
              <SectionDescription>
                <div dangerouslySetInnerHTML={{ __html: data.html }}></div>
              </SectionDescription>
            </div>
          </div>
        </div>
      </NormalSection>
      <NormalSection noPadding>
        <div
          className="row"
          css={css`
            padding: 3.5rem 2rem;
          `}>
          {data.frontmatter.videos?.map(item => {
            return (
              <div className="col-6">
                <iframe
                  title={item}
                  width="100%"
                  height="350"
                  frameborder="0"
                  src={`https://www.youtube.com/embed/${item}`}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  css={css`
                    margin-bottom: 2rem;
                  `}></iframe>
              </div>
            )
          })}
          <StaticQuery
            query={graphql`
              query {
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
            render={({ allFile }) => {
              return data.frontmatter.photos?.map(item => {
                const thumbnail = allFile.edges.find(image => {
                  return item === `content/${image.node.relativePath}`
                })
                return (
                  <WorkItem
                    className="col-4"
                    thumbnail={thumbnail.node.childImageSharp.fixed}
                  />
                )
              })
            }}
          />
        </div>
      </NormalSection>
    </Wrap>
  )
}
