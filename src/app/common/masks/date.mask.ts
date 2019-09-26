import { InputMask } from '@ktru-models/mask.models';

export const DATE_MASK: InputMask = {
  mask: [/[0-3]/, /\d/, '.', /[0-1]/, /\d/, '.', /[1-2]/, /\d/, /\d/, /\d/],
  showMask: true,
  keepCharPositions: true,
  guide: true,
  charPos: 1
};
