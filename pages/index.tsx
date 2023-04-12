import JobListing from '@/components/jobs/jobListing';
import { Job } from '@/components/jobs/jobs.type';
import { getAllJobs } from '@/lib/repository/job.repository'
import { GetStaticProps } from 'next';
import styles from '../styles/listing.module.css';

export interface Home {
  allJobs: Job[]
}

export default function Home({allJobs}: Home) {
  return (
    <div className={styles.listing}>
      {allJobs.map((job: Job) => {
        return <JobListing job={job} key={job.id} />
      })}
    </div>
  )
}

export const getStaticProps: GetStaticProps<Home> = async() => {
  const allJobs = await getAllJobs();

  return {
    props: {
      allJobs
    }
  }
}