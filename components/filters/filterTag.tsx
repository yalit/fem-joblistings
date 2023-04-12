import { useContext } from 'react'
import styles from './filterListing.module.css'
import { FilterContext } from '@/context/filterContext'
import { createFilterActionRemove } from '@/context/filterAction.factory';

export interface FilterTag {
    tag: string
}

export function FilterTag({tag}: FilterTag) {
    const {dispatch} = useContext(FilterContext);

    return (
        <div className={styles.filterTag}>
            <span className={styles.tag}>{tag}</span>
            <span className={styles.remove} onClick={() => dispatch(createFilterActionRemove(tag))}>X</span>
        </div>
    )
}