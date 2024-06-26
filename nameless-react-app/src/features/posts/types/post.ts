import { Master } from '@/features/shared/types/master';

export type Post = {
  id: string;
  content: string;
  postTags: Master[];
  createdAt: Date;
};
