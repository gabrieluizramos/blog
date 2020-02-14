import styled from 'styled-components';

import { spacing, font, colors } from '@gabrieluizramos/preferences/variables';

export const Back = styled.div`
  padding: ${spacing.default} 0;
  text-align: right;

  a {
    color: ${colors.terminal.purple};
  }
`;

export const PostArticle = styled.article`
  padding: ${spacing.default} 0;
`;

export const Banner = styled.figure``;

export const Caption = styled.figcaption`
  padding-top: ${spacing.half};
  font-size: ${font.size.small};
  text-align: right;

  a {
    color: ${colors.terminal.purple};
  }
`;

export const PostHeader = styled.header`
  > * {
    &:not(:last-child) {
      margin-bottom: ${spacing.half};
    }
  }
`;

export const PostTitle = styled.h1`
  font-size: ${font.size.big};
  margin-bottom: ${spacing.half};
`;

export const PostSubtitle = styled.h2`
  font-size: ${font.size.medium};
  font-weight: normal;
`

export const PostTime = styled.div`
  font-size: ${font.size.small};
  color: ${colors.terminal.blue.default};
`;

export const PostDate = styled.h2`
  color: ${colors.terminal.green};
  font-size: ${font.size.default};
  font-weight: normal;
`;

export const PostContent = styled.div`
  line-height: 1.5;

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  ol,
  figure,
  image {
    margin-bottom: ${spacing.default};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${colors.terminal.blue.light};
  }

  li {
    padding-left: ${spacing.default};

    &:before {
      content: '•';
      font-weight: bold;
      display: inline-block;
      margin-right: ${spacing.half};
      color: ${colors.terminal.purple};
    }
  }
`