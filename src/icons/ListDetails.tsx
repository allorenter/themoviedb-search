import IconProps from '@/types/IconProps';

function ListDetails({ width = '24px', height = '24px' }: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='icon icon-tabler icon-tabler-list-details'
      width={width}
      height={height}
      viewBox='0 0 24 24'
      strokeWidth='2'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M13 5h8'></path>
      <path d='M13 9h5'></path>
      <path d='M13 15h8'></path>
      <path d='M13 19h5'></path>
      <rect x='3' y='4' width='6' height='6' rx='1'></rect>
      <rect x='3' y='14' width='6' height='6' rx='1'></rect>
    </svg>
  );
}

export default ListDetails;
