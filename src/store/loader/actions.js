import { LOADER_OFF, LOADER_ON } from '../types';

export function loaderOn() {
  return {
    type: LOADER_ON,

  };
}
export function loaderOff() {
  return {
    type: LOADER_OFF
  };
}
