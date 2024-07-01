import { Prisma } from '@prisma/client';
import { postDetailIncludeQuery } from '../repository/query';

export type GetProjectDetailData = Prisma.PostsGetPayload<
  typeof postDetailIncludeQuery
>;
