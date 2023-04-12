import { Job } from "./jobs.type";
import Tag from '../tag/tag';
import styles from './jobsListing.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export interface JobListing {
    job: Job
}

export default function JobListing({ job }: JobListing) {
    return (
        <div className={styles.jobListing + (job.featured ? " "+styles.featured : '')}>
            <div className={styles.infos}>
                <img className={styles.logo} src={job.logo} alt={`Logo de ${job.company}`} />
                <div>
                    <div className={styles.summary}>
                        <div className={styles.summary__company}>{job.company}</div>
                        <div className={styles.summary__headline}>
                            {job.new ? <div className={styles.summary__headline_new}>NEW!</div> : null}
                            {job.featured ? <div className={styles.summary__headline_featured}>FEATURED</div> : null}
                        </div>
                    </div>
                    <div className={styles.position}>{job.position}</div>
                    <div className={styles.details}>
                        <div>{job.postedAt}</div>
                        <div className={styles.details_separator}><FontAwesomeIcon icon={faCircle} /></div>
                        <div>{job.contract}</div>
                        <div className={styles.details_separator}><FontAwesomeIcon icon={faCircle} /></div>
                        <div>{job.location}</div>
                    </div>
                </div>
            </div>
            <div className={styles.tags}>
                <Tag tag={job.role} />
                <Tag tag={job.level} />
                {job.languages.map((l => <Tag tag={l} key={`language-${l}`} />))}
                {job.tools.map((t => <Tag tag={t} key={`tool-${t}`} />))}
            </div>
        </div>
    )
}