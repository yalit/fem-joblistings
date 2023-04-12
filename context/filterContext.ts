import { Dispatch, createContext } from "react";
import { FilterAction } from "./filterAction.type";

export interface FilterState {
    filters: string[]
}

export interface FilterContext {
    state: FilterState,
    dispatch: Dispatch<FilterAction>
}

export const initialFilters: FilterState = {filters: []}

export const FilterContext = createContext<FilterContext>({
    state: initialFilters,
    dispatch: () => null
});