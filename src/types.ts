export interface Block {
  id: string;
  type: string;
  textData: string;
  focus?: boolean;
}

export type BlockState = Block[];
export type StateOnChange = (value: BlockState) => void;

export interface BlockContext {
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
