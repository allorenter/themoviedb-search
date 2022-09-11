import loadImage from '@/utils/loadImage';
import { Image, ImageProps } from '@mantine/core';

function LoadImage(props: ImageProps): JSX.Element {
  const { src, width, height, radius } = props;

  loadImage(src || '').read();

  return <Image src={src} width={width} height={height} radius={radius} />;
}

export default LoadImage;
