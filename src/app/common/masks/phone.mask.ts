import { InputMask } from '@ktru-models/mask.models';

export const PHONE_MASK: InputMask = {
  mask: ['+', '7', ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/],
  showMask: true,
  keepCharPositions: true,
  guide: true,
  charPos: 4
};
