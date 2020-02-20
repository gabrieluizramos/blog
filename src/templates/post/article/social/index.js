import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { colors } from '@gabrieluizramos/preferences/variables';

import {
  // Buttons
  FacebookShareButton as FacebookButton,
  LinkedinShareButton as LinkedinButton,
  TwitterShareButton as TwitterButton,
  WhatsappShareButton as WhatsappButton,

  // Icons
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon
} from "react-share";

import { FacebookProvider, Comments } from 'react-facebook';

import * as S from './styles';

// All social share
const social = [
  { Component: TwitterButton, Icon: TwitterIcon},
  { Component: FacebookButton, Icon: FacebookIcon},
  { Component: WhatsappButton, Icon: WhatsappIcon},
  { Component: LinkedinButton, Icon: LinkedinIcon},
];

const Share = ({ title, path }) => {
   const { site: { siteMetadata: data } } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            siteUrl
            facebookAppId
          }
        }
      }
    `
  );

  const { siteUrl, author, facebookAppId: appId } = data;
  const url = `${siteUrl}${path}`;

  return (
    <S.Share>
      <hr />
      <S.Container>
      <S.Icons>
        {social.map(({ Component, Icon }, index) => (
          <S.Icon key={`share_${index}`}>
            <Component url={url} title={`${title} por ${author}`}>
              <Icon size={35} bgStyle={{ fill: colors.terminal.black }} />
            </Component>
          </S.Icon>
        ))}
      </S.Icons>
      </S.Container>
      <S.FacebookContainer>
        <FacebookProvider appId={appId}>
          <Comments href={url} colorScheme="dark" width="100%" mobile />
        </FacebookProvider>
      </S.FacebookContainer>
    </S.Share>
  );
};

export default Share;