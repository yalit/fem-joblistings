import JobListing from '@/components/jobs/jobListing';
import { Job } from '@/components/jobs/jobs.type';
import { GetStaticProps } from 'next';
import styles from '../styles/listing.module.css';
import Header from '@/components/header/header';
import { Reducer, useMemo, useReducer } from 'react';
import { filterReducer } from '@/context/filterReducer';
import { FilterContext, FilterState, initialFilters } from '@/context/filterContext';
import { FilterList } from '@/components/filters/filterList';
import { getAllJobs } from '@/data/job.repository';
import { FilterAction } from '@/context/filterAction.type';

export interface Home {
  allJobs: Job[]
}

export default function Home({allJobs}: Home) {
  const [state, dispatch] = useReducer<Reducer<FilterState, FilterAction>>(filterReducer,initialFilters);

  const filteredJobs = useMemo(() => {
    return allJobs.filter((job: Job) => {
        console.log("job tags", job.id, job.tags);
        
        const intersection = job.tags.filter(t => state.filters.includes(t))
        return intersection.length === state.filters.length
    })
  }, [state.filters])

  return (
    <FilterContext.Provider value={{state, dispatch}}>
        <Header />
        {state.filters.length > 0 && <FilterList />}
        <div className={styles.listing}>
          {filteredJobs.map((job: Job) => {
            return <JobListing job={job} key={job.id} />
          })}
        </div>
    </FilterContext.Provider>
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