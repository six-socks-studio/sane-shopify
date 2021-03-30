import * as React from 'react'
import { Paginated } from '@good-idea/unwind-edges'
import { ShopifyImage } from '@six-socks-studio/sane-shopify-types'
import { definitely } from '@six-socks-studio/sane-shopify-sync-utils'

export interface ImagesPreviewProps {
  value: Paginated<ShopifyImage>
}

const ImagesPreview = (props: ImagesPreviewProps) => {
  return (
    <>
      {definitely(props.value.edges).map((edge) => (
        <img
          key={edge.cursor || 'some-key'}
          src={edge?.node?.transformedSrc}
          alt={edge?.node?.altText}
        />
      ))}
    </>
  )
}

const ImagePreview = (props: ShopifyImage) => {
  return <img src={props.w100} alt={props.altText || undefined} />
}

export const imageEdge = {
  title: 'Image Edge',
  name: 'shopifySourceImageEdge',
  type: 'object',
  fields: [
    { type: 'string', name: 'key', title: 'Key' },
    { type: 'string', name: 'cursor', title: 'Key' },
    { type: 'shopifySourceImage', name: 'node', title: 'Node' },
  ],
}

export const shopifyImages = {
  title: 'Images',
  name: 'shopifySourceImages',
  type: 'object',
  inputComponent: ImagesPreview,
  fields: [
    {
      title: 'edges',
      name: 'edges',
      type: 'array',
      of: [
        {
          type: 'shopifySourceImageEdge',
        },
      ],
    },
  ],
}

export const shopifyImage = {
  title: 'Image',
  name: 'shopifySourceImage',
  type: 'object',
  inputComponent: ImagePreview,
  fields: [
    {
      title: 'altText',
      name: 'altText',
      type: 'string',
    },
    {
      title: 'id',
      name: 'id',
      type: 'string',
    },
    {
      title: 'originalSrc',
      name: 'originalSrc',
      type: 'string',
    },
    {
      title: 'w100',
      name: 'w100',
      type: 'string',
    },
    {
      title: 'w300',
      name: 'w300',
      type: 'string',
    },
    {
      title: 'w800',
      name: 'w800',
      type: 'string',
    },
    {
      title: 'w1200',
      name: 'w1200',
      type: 'string',
    },
    {
      title: 'w1600',
      name: 'w1600',
      type: 'string',
    },
  ],
}
