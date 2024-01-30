/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    users: User;
    pages: Page;
    'blog-posts': BlogPost;
    'blog-categories': BlogCategory;
    partners: Partner;
    media: Media;
    files: File;
    'newsletter-contacts': NewsletterContact;
    messages: Message;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  globals: {
    meta: Meta;
    megamenu: Megamenu;
    footer: Footer;
    'social-media': SocialMedia;
  };
}
export interface User {
  id: string;
  firstname: string;
  lastname: string;
  profileimage?: string | Media | null;
  companyrole: 'cto-director' | 'ceo-director' | 'fe-developer' | 'be-developer';
  socialmedia?:
    | {
        icon?: ('instagram' | 'facebook' | 'youtube' | 'linkedin' | 'twitter' | 'github') | null;
        href?: string | null;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
  enableAPIKey?: boolean | null;
  apiKey?: string | null;
  apiKeyIndex?: string | null;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password: string | null;
}
export interface Media {
  id: string;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  sizes?: {
    thumbnail?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    card?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    desktop?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
  };
}
export interface Page {
  id: string;
  page: {
    slug?: string | null;
    icon?:
      | (
          | 'codebracket'
          | 'magnifyingglass'
          | 'shoppingbag'
          | 'atsymbol'
          | 'megaphone'
          | 'newspaper'
          | 'flag'
          | 'shieldexclamation'
        )
      | null;
    published?: boolean | null;
    haveHero?: boolean | null;
    hero?: {
      backgroundvideo?: string | Media | null;
      announcement?: boolean | null;
      announcementlink?: string | null;
      announcementtext?: string | null;
      title?: string | null;
      subtitle?: string | null;
      cta?: boolean | null;
      ctalink?: string | null;
      ctatext?: string | null;
    };
  };
  content: {
    layout?: {
      root: {
        children: {
          type: string;
          version: number;
          [k: string]: unknown;
        }[];
        direction: ('ltr' | 'rtl') | null;
        format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
        indent: number;
        type: string;
        version: number;
      };
      [k: string]: unknown;
    } | null;
  };
  meta?: {
    title?: string | null;
    description?: string | null;
  };
  title?: string | null;
  updatedAt: string;
  createdAt: string;
}
export interface BlogPost {
  id: string;
  title?: string | null;
  slug?: string | null;
  published?: boolean | null;
  hasheaderimage?: boolean | null;
  headerimage?: string | Media | null;
  excerpt?: string | null;
  category?: (string | null) | BlogCategory;
  body?: {
    root: {
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      type: string;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  author?: (string | null) | User;
  meta?: {
    title?: string | null;
    description?: string | null;
  };
  updatedAt: string;
  createdAt: string;
}
export interface BlogCategory {
  id: string;
  title?: string | null;
  slug?: string | null;
}
export interface Partner {
  id: string;
  name: string;
  url?: string | null;
  image: string | Media;
  updatedAt: string;
  createdAt: string;
}
export interface File {
  id: string;
  title?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
}
export interface NewsletterContact {
  id: string;
  email: string;
  consent?: boolean | null;
  updatedAt: string;
  createdAt: string;
}
export interface Message {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  message: string;
  updatedAt: string;
  createdAt: string;
}
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
export interface Meta {
  id: string;
  description: string;
  keywords: string;
  contactemail: string;
  contactnumber: string;
  updatedAt?: string | null;
  createdAt?: string | null;
}
export interface Megamenu {
  id: string;
  sections?:
    | {
        type: 'link' | 'menu';
        link: {
          type?: ('reference' | 'custom') | null;
          reference?: {
            relationTo: 'pages';
            value: string | Page;
          } | null;
          url?: string | null;
          label: string;
          newTab?: boolean | null;
        };
        name?: string | null;
        page?: (string | Page)[] | null;
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
export interface Footer {
  id: string;
  sections?:
    | {
        name: string;
        page: (string | Page)[];
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
export interface SocialMedia {
  id: string;
  socialmedia?:
    | {
        icon?: ('instagram' | 'facebook' | 'youtube' | 'linkedin' | 'twitter' | 'github') | null;
        href?: string | null;
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}