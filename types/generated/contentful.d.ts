// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface INavbarFields {
  /** Logo alternative text */
  logoAlternativeText: string;

  /** About */
  about: string;

  /** Contact */
  contact: string;

  /** ThemeSwitcher title */
  themeSwitcherTitle: string;

  /** LocaleSwitcher title */
  localeSwitcherTitle: string;
}

export interface INavbar extends Entry<INavbarFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "navbar";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IPageHomeFields {
  /** Navbar */
  navbar: INavbar;

  /** Hero */
  hero: ISectionHero;
}

export interface IPageHome extends Entry<IPageHomeFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "pageHome";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ISectionHeroFields {
  /** Title */
  title: string;

  /** Paragraph */
  paragraph: string;

  /** Cta (contact) */
  ctaContact: string;

  /** Image alternative text */
  imageAlternativeText: string;
}

export interface ISectionHero extends Entry<ISectionHeroFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "sectionHero";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE = "navbar" | "pageHome" | "sectionHero";

export type LOCALE_CODE = "en-US" | "pl-PL";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";