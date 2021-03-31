/** @jsx jsx */

import { StaticQuery, graphql } from 'gatsby'
import { css, jsx } from '@emotion/core'

import { Colors } from '../constants'

import Wrap from '../layouts/wrap'
import WorkItem from '../components/work_item'
import NormalSection from '../components/normal_section'
import { SectionHead, SectionDescription } from '../components/section_data'

export default () => (
  <Wrap pageTitle="Work" innerPageName="Our Work">
    <NormalSection color={Colors.light}>
      <div className="container center">
        <div className="row">
          <div className="col-12">
            <SectionHead centered title="Reaching For The Sky" />
            <SectionDescription color={Colors.primary}>
              Work that has won awards and recognition. Work that has built
              brands. Work that has gone viral. Here, we proudly present a
              selection of the work we do to give you a better picture of our
              facilities and capabilities. Let the work speak for itself.
            </SectionDescription>
          </div>
          <div className="col-6 left">
            <SectionDescription>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et,
              necessitatibus rerum perspiciatis odit, libero debitis iusto
              optio, neque iure placeat voluptates repudiandae dolores numquam
              in magnam! Odit eius est neque!
            </SectionDescription>
            <SectionDescription>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et,
              necessitatibus rerum perspiciatis odit, libero debitis iusto
              optio, neque iure placeat voluptates repudiandae dolores numquam
              in magnam! Odit eius est neque!
            </SectionDescription>
          </div>
          <div className="col-6 left">
            <SectionDescription>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et,
              necessitatibus rerum perspiciatis odit, libero debitis iusto
              optio, neque iure placeat voluptates repudiandae dolores numquam
              in magnam! Odit eius est neque!
            </SectionDescription>
            <SectionDescription>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et,
              necessitatibus rerum perspiciatis odit, libero debitis iusto
              optio, neque iure placeat voluptates repudiandae dolores numquam
              in magnam! Odit eius est neque!
            </SectionDescription>
          </div>
        </div>
      </div>
    </NormalSection>
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
              allMarkdownRemark(
                filter: { frontmatter: { public: { eq: true } } }
              ) {
                edges {
                  node {
                    frontmatter {
                      sort
                      title
                      category
                      thumbnail
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
                return (
                  `content/${image.relativePath}` === item.frontmatter.thumbnail
                )
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
