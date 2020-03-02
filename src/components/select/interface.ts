export declare type TSelectListItemId = string | number | null | boolean;
export interface ISelectListItem {
    name?: string | number | null;
    label?: string;
    [key: string]: any;
}

export interface ISelectCallbackArg {
    event:
        | React.SyntheticEvent
        | {
              keyCode: number;
          }
        | Event;
    name: string | number;
    selected: ISelectListItem | null;
    value: TSelectListItemId;
}

export interface IProps {
    name: string;
    options: ISelectListItem[] | null;
    value: ISelectListItem | null;
    label?: string;
    className?: string;
    onChange?: (arg: ISelectCallbackArg) => void;
    onBlur?: (arg: ISelectCallbackArg) => void;
}
