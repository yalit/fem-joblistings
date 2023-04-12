export interface Job {
    id: number
    company: string
    logo: string
    new: boolean,
    featured: true
    position: string,
    role: Role,
    level: Level
    postedAt: string,
    contract: string,
    location: string
    languages: string[]
    tools: string[]
}

export type Role = "Senior" | "Fullstack" | "Backend"
export type Level = "Junior" | "Midweight" | "Senior"