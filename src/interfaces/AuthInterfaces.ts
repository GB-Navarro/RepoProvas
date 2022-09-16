import { users } from "@prisma/client";

type IUserData = Omit<users,"id">