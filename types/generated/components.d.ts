import type { Schema, Attribute } from '@strapi/strapi';

export interface FruitCollectionsCatagory extends Schema.Component {
  collectionName: 'components_fruit_collections_catagories';
  info: {
    displayName: 'catagory';
    icon: 'car';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    comment: Attribute.String;
  };
}

export interface FruitCollectionsCollection extends Schema.Component {
  collectionName: 'components_fruit_collections_collections';
  info: {
    displayName: 'collection';
    icon: 'calendar';
  };
  attributes: {
    Mango: Attribute.String;
    quantity: Attribute.Integer;
    mangoCategory: Attribute.Component<'fruit-collections.catagory', true>;
  };
}

export interface PagePropertiesMetaTag extends Schema.Component {
  collectionName: 'components_page_properties_meta_tags';
  info: {
    displayName: 'MetaTag';
    icon: 'code';
  };
  attributes: {
    name: Attribute.String;
    content: Attribute.String;
  };
}

export interface PagePropertiesSeo extends Schema.Component {
  collectionName: 'components_page_properties_seos';
  info: {
    displayName: 'SEO';
    icon: 'alien';
  };
  attributes: {
    MetaTitle: Attribute.String;
    MetaDescription: Attribute.String;
    MetaTag: Attribute.Component<'page-properties.meta-tag', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'fruit-collections.catagory': FruitCollectionsCatagory;
      'fruit-collections.collection': FruitCollectionsCollection;
      'page-properties.meta-tag': PagePropertiesMetaTag;
      'page-properties.seo': PagePropertiesSeo;
    }
  }
}
