import { Prisma } from '@prisma/client';

export const postDetailIncludeQuery =
  Prisma.validator<Prisma.PostsFindManyArgs>()({
    include: {
      postComment: true,
    },
  });
