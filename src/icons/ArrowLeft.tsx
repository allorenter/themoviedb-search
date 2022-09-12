import IconProps from '@/types/IconProps';

function ArrowLeft({ width = '24px', height = '24px' }: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-arrow-left'
      width={width}
      height={height}
      viewBox='0 0 24 24'
      strokeWidth='2'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <line x1='5' y1='12' x2='19' y2='12'></line>
      <line x1='5' y1='12' x2='11' y2='18'></line>
      <line x1='5' y1='12' x2='11' y2='6'></line>
    </svg>
  );
}

export default ArrowLeft;
