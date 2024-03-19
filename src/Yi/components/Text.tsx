import { forwardRef } from 'react';

import type { IconType } from '@/types';

import { TITLE } from '../style';

const Icon: IconType = forwardRef(({ size = '1em', style, ...rest }, ref) => {
  return (
    <svg
      fill="currentColor"
      fillRule="evenodd"
      height={size}
      ref={ref}
      style={{ flex: 'none', lineHeight: 1, width: 'fit-content', ...style }}
      viewBox="0 0 89 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>{TITLE}</title>
      <path d="M72.852 2.024v4.958h2.449v1.359h-2.384v3.834l1.578-.687.79-.344.708 1.424c-.888.536-1.725 1.067-2.591 1.551-.403.227-.547.499-.541.963.025 2.041.01 4.08.01 6.122V22h-2.345v-6.022l-2.265 1.627-1.432-1.943c1.097-.645 2.124-1.272 3.177-1.856.379-.21.54-.447.533-.89-.026-1.489-.01-2.978-.01-4.448l-.245-.05c-.93-.183-.947-.108-1.15.827-.184.85-.379 1.7-.582 2.605l-1.427-.246-.142-.024.767-7.998h2.136l-.374 3.356h.997V2.024h2.343zm3.682.022h2.113l-.267 2.776h8.618v.288c.002.202.003.378 0 .553-.074 3.867-.137 7.733-.236 11.6a6.761 6.761 0 01-.32 1.947c-.54 1.608-1.696 2.405-3.385 2.404-.639 0-1.276-.09-1.914-.113l-.213-.005c-.46-.004-.671-.18-.728-.615l-.004-.036c-.043-.393-.144-.78-.237-1.26.472.045.884.07 1.287.124l.11.015c1.664.244 2.767-.571 2.823-2.246.118-3.555.17-7.113.22-10.671.003-.19-.259-.383-.397-.575-.145.188-.4.366-.419.565l-.027.29c-.365 3.71-1.16 7.29-3.127 10.528-.817 1.346-1.797 2.553-3.168 3.498l-.696-.73-.081-.085c.017-.085.01-.147.037-.174 2.953-2.897 4.195-6.579 4.82-10.538.128-.81.21-1.629.302-2.445l.038-.334.016-.125c.027-.227.02-.437-.36-.459-.408-.023-.442.21-.482.528-.386 3.076-1.082 6.064-2.584 8.811-.894 1.637-1.981 3.118-3.625 4.269l-.803-.9c3.522-3.461 4.63-7.902 5.183-12.61l-.092-.026c-.524-.141-.844-.11-.94.526l-.006.037c-.1.744-.336 1.467-.533 2.28l-1.552-.284.536-5.799.093-1.01zM46.061 3.948V2.725h18.464v1.222c-.267.013-.539.036-.812.036-2.782.002-5.564.013-8.347-.003l-1.193-.009c-.603-.005-.833.145-.806.756l.001.038c.055.917.015 1.84.015 2.842h9.928c.02.277.051.48.046.683l-.064 2.94c-.044 1.962-.09 3.922-.144 5.882a7.615 7.615 0 01-.208 1.616c-.43 1.727-1.566 2.672-3.336 2.76-.922.045-1.85-.03-2.772-.016-.543.007-.809-.21-.866-.74l-.003-.038c-.033-.373-.148-.74-.245-1.2.772.048 1.495.112 2.22.135l.11.002c1.632.023 2.425-.62 2.516-2.26.144-2.604.162-5.214.208-7.824.003-.16-.222-.463-.345-.464-2.414-.027-4.83-.02-7.28-.02-.764 4.935-2.051 9.559-6.147 12.887l-1.353-1.366c3.733-3.777 4.849-8.533 5.206-13.573.05-.689.064-1.38.098-2.07l.02-.346c.027-.457-.167-.614-.597-.615h-.033c-1.163.02-2.325.008-3.489.004-.253 0-.507-.021-.792-.036zM21.163 2v1.275h-7.488v.819h8.46c.168 1.7-.034 3.257-.541 4.777-.047.14-.3.313-.443.302-.442-.033-.878-.15-1.287-.227V5.518h-6.21v3.538h-2.358c0-.85-.03-1.702.002-2.553l.011-.256c.032-.606-.136-.818-.75-.807l-.036.001a81.202 81.202 0 01-4.486.003c-.514-.011-.708.171-.867.635l-.012.036c-.299.912-.693 1.794-1.071 2.72l-.081.198-1.654-.646L3.358 4.11h7.784l.023-.071c.214-.678.16-.753-.507-.758h-.034c-1.01-.003-2.018-.004-3.027-.004l-3.845.001V2h17.411zM5.788 8.281h4.568l.04.803H5.832l-.044-.803zM19 8.258v.81h-4.567v-.81H19zm-.005-1.687v.863h-4.574V6.57h4.574zm-8.643.011v.837H5.825v-.837h4.527zm2.887 6.05l.023.061c.04.103.067.156.075.213.125.907.657 1.36 1.597 1.36h2.614c.171.896.12 1.655-.476 2.276-1.044 1.093-2.104 2.168-3.216 3.313l.885.928.058.062-.943.894-4.785-3.114-1.213-.791v-.001l1.012-1.616c.889.62 1.764 1.197 2.604 1.817l.251.187c.404.307.685.378 1.046-.01l.025-.028c.705-.79 1.447-1.545 2.175-2.316l-.1-.207H7.016v-1.385h4.631l-.514-1.356-.039-.101 1.957-.17.187-.016zm3.196-1.497l.083.05c1.933 1.194 4.168 1.497 6.446 1.207l.04.201c.198 1.017.07 1.145-1.027 1.264-2.996.327-5.78-.343-8.322-1.916l-.098-.06c-.738-.465-1.307-.456-2.026-.017l-.045.028c-2.495 1.563-5.225 2.252-8.164 1.993l-.241-.023c-1.1-.11-1.155-.212-1.038-1.385l.009-.087.105.013c2.912.323 5.496-.472 7.897-2.021.278-.18.648-.225.983-.298.18-.04.379.007.568-.008 1.724-.143 3.285.13 4.83 1.059zm27.371 1.017H25.374V10.88h18.432v1.273z"></path>
    </svg>
  );
});

export default Icon;
