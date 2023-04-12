export enum FilterActionKind {
    Add = 'ADD',
    Remove = 'REMOVE',
    Clear = 'CLEAR'
}

export type FilterAction = 
    {type: FilterActionKind.Add | FilterActionKind.Remove, value: string}
    | {type: FilterActionKind.Clear}