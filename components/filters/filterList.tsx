import { useContext } from 'react'
import styles from './filterListing.module.css'
import { FilterContext } from '@/context/filterContext'
import { FilterTag } from './filterTag'
import { createFilterActionClear } from '@/context/filterAction.factory'

export function FilterList() {
    const {state, dispatch} = useContext(FilterContext)

    return (
        <div className={styles.filterList}>
            <div className={styles.tags}>
                {state.filters.map((f: string) => {
                    return <FilterTag tag={f} key={`filter_${f}`}/>
                })}
            </div>
            <div className={styles.clear} onClick={() => dispatch(createFilterActionClear())}>Clear</div>
        </div>
    )
}