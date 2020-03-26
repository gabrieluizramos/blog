import React from "react"
import { Link, graphql } from "gatsby"

import { Layout } from '@gabrieluizramos/preferences/components';

import SEO from '../../../components/seo';

import Header from './header';
import Banner from './banner';
import Social from './social';

import * as S from './styles';

const Article = ({
  data: {
    markdownRemark: {
      html,
      timeToRead,
      frontmatter: {
        path, title, subtitle, date, banner
      }
    }
  }
}) => (
  <Layout>
    <S.Content>
      <S.Wrapper>
        <SEO title={title} description={subtitle} banner={banner} />
        <S.Back>
          <Link to="/">Voltar</Link>
        </S.Back>
        <S.PostArticle>
          <Header title={title} subtitle={subtitle} time={timeToRead} date={date} />
          <Banner {...banner} />
          <S.PostContent dangerouslySetInnerHTML={{ __html: html }} />
        </S.PostArticle>
        <Social path={path} title={title} />
      </S.Wrapper>
    </S.Content>
  </Layout>
);

export default Article;

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      timeToRead
      frontmatter {
        date(locale: "pt-br", formatString: "DD/MM/YYYY")
        path
        title
        subtitle
        banner {
          author
          href
          image {
            childImageSharp {
              fluid(maxWidth: 1200, maxHeight: 750) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
              fixed(width: 1200, height: 1200) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`
