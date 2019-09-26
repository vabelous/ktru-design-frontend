import { InputMask } from '@ktru-models/mask.models';

export const EMAIL_MASK: InputMask = {
  mask: [/[a-zа-я]/, '@',  /[a-zа-я]/, '.', /[a-zа-я]/ ],
  showMask: true,
  keepCharPositions: true,
  guide: true,
  charPos: 1
};
