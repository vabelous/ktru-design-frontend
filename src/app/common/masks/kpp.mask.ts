import { InputMask } from '@ktru-models/mask.models';

export const KPP_MASK: InputMask = {
  mask: [/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, ' ', /\d/, /\d/, /\d/],
  showMask: true,
  keepCharPositions: true,
  guide: true,
  charPos: 1
};
