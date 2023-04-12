import { Job, JobInput } from "../components/jobs/jobs.type";

export function jobInputToJob(job: JobInput): Job {
    return {
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
}