import { Job, JobInput } from "@/components/jobs/jobs.type";
import fs from 'fs';
import path from 'path';
import { jobInputToJob } from "./job.dataTransformer";

const jobsDataPath = path.join(process.cwd(), 'data', 'jobs.json');

export function getAllJobs(): Job[] {
    const fileContents = fs.readFileSync(jobsDataPath, 'utf8');
    let data = JSON.parse(fileContents);
    
    return data.map(jobInputToJob)
}