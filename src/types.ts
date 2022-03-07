export interface IBlock {
  id: string;
  type: string;
  textData: string;
  focus?: boolean;
}

export type BlockState = IBlock[];
export type StateOnChange = (value: BlockState) => void;

export interface IBlockContext {
  subscribe: any;
  add: (
    type: string,
    config?: {
      textData?: string;
      focus?: boolean;
    },
  ) => void;
  remove: (index: number) => void;
  modify: (id: string, val: string) => void;
}

export interface IAddBlockPositionContext {
  subscribe: any;
  forceSet: (index: number) => void;
}

export interface IDropdownItemActionOption {
  value: string;
  label: string;
  preventClose?: boolean;
  props?: object;
}

export interface IDropdownItem {
  value: string;
  label: string;
  action?: (options: IDropdownItemActionOption) => void;
  preventClose?: boolean;
  props?: object;
}
