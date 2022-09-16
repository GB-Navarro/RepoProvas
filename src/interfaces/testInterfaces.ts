import { tests } from "@prisma/client";

export type ITestData = Omit<tests, "id">