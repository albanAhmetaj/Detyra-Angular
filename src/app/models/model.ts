export interface Employee {
    id: number;
    firstName: string;
    lastName: string;
    title: string;
    dateOfBirth: string;
    projects: Project[];
}

export interface Project {
    id: string;
    name: string;
    startDate: string;
    endDate: Date;
    status: string
}