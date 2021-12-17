import Image from 'next/image'
import type { NextImageProps } from '@/types/customType'

const NextImage = ({
  src,
  alt,
  layoutFill = false,
  fit = 'contain',
  width = 0,
  height = 0,
  className = ''
}: NextImageProps) => {
  if (!layoutFill)
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading='lazy'
        placeholder='blur'
        blurDataURL='/loader.webp'
        className={className}
      />
    )

  return (
    <Image
      layout='fill'
      src={src}
      alt={alt}
      objectFit={fit}
      loading='lazy'
      placeholder='blur'
      blurDataURL='/loader.webp'
      className={className}
    />
  )
}

export default NextImage
