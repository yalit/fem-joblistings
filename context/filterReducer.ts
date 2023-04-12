import { Reducer } from "react";
import { FilterState } from "./filterContext";
import { FilterAction, FilterActionKind } from "./filterAction.type";


export const filterReducer: Reducer<FilterState, FilterAction> = (state: FilterState, action: FilterAction): FilterState => {
    switch(action.type) {
        case FilterActionKind.Add: 
            return {
                filters: [...state.filters, action.value]
            }
        case FilterActionKind.Remove:
            return {
                filters: state.filters.filter(v => v !== action.value)
            }
        case FilterActionKind.Clear:
            return {
                filters: []
            }
        default:
            return state
    }
}

