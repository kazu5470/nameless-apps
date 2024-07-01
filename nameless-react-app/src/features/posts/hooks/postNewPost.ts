import { useState } from 'react';
import { Post } from '../types/post';
import { postPost } from '@/services/posts/postDetailPost';

export const useUpsertPost = () => {
  const [upsertedId, setUpsertedId] = useState<string | null>(null);

  const createPost = async (form: Post) => {
    const post = {
      content: form.content,
      postTags: [],
    };

    const res = await postPost(post);
    setUpsertedId(res?.id || null);
  };
  return { upsertedId, createPost };
};
