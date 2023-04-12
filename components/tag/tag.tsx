import styles from './tag.module.css';

export interface Tag {
    tag: string
}

export default function Tag({tag}: Tag) {
    return (
        <div className={styles.tag}>
            {tag}
        </div>
    )
}