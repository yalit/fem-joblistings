import { FilterAction, FilterActionKind } from "./filterAction.type";


export function createFilterActionAdd(value: string): FilterAction {
    return {
        type: FilterActionKind.Add,
        value
    }
}

export function createFilterActionRemove(value: string): FilterAction {
    return {
        type: FilterActionKind.Remove,
        value
    }
}

export function createFilterActionClear(): FilterAction {
    return {
        type: FilterActionKind.Clear
    }
}