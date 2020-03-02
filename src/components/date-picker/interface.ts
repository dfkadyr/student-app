export interface IProps {
    name?: string;
    className?: string | number;
    selected: any;
    label: string;
    onChange: (args: {
        event:
            | React.ChangeEvent<HTMLDivElement>
            | React.MouseEvent<HTMLSpanElement, MouseEvent>
            | React.KeyboardEvent<HTMLSpanElement>;
        id: string;
        value: string | number | null;
        timestamp: string | number | null;
    }) => void;
    dateFormat?: string;
    isClearable?: boolean;
}
