import { useContext, useMemo } from 'react';
import styles from './tag.module.css';
import { FilterContext } from '@/context/filterContext';
import { createFilterActionAdd, createFilterActionRemove } from '@/context/filterAction.factory';
import clsx from 'clsx';    

export interface Tag {
    tag: string
}

export default function Tag({tag}: Tag) {
    const {state, dispatch} = useContext(FilterContext)
    
    const selected = useMemo(() => state.filters.includes(tag), [state.filters])

    const handleClick = () => {
        if (selected) {
            dispatch(createFilterActionRemove(tag));
        } else {
            dispatch(createFilterActionAdd(tag));
        }
    }
    return (
        <div className={clsx(styles.tag, selected && styles.selected)} onClick={handleClick}>
            {tag}
        </div>
    )
}