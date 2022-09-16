import { tests } from "@prisma/client";

export type ITestData = {
    name: string,
    pdfUrl: string,
    category: string,
    discipline: string,
    teacher: string
}