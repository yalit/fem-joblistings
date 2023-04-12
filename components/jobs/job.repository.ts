import { Job, JobInput } from "@/components/jobs/jobs.type";
import fs from 'fs';
import path from 'path';

const jobsDataPath = path.join(process.cwd(), 'data', 'jobs.json');

export function getAllJobs(): Job[] {
    const fileContents = fs.readFileSync(jobsDataPath, 'utf8');
    let data = JSON.parse(fileContents);
    
    return data.map((job: JobInput): Job => {
        let mappedJob: Job = {
            id: job.id,
            company: job.company,
            logo: job.logo,
            new: job.new,
            featured: job.featured,
            position: job.position,
            postedAt: job.postedAt,
            contract: job.contract,
            location: job.location,
            tags: [job.role, job.level, ...job.languages, ...job.tools]
        }

        return mappedJob
    })
}