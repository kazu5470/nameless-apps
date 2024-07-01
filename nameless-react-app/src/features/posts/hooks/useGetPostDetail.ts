import { useState } from 'react';
import { Post } from '../types/post';

const defaultMaster = [
  {
    id: '',
    text: '',
  },
];

const defaultPostNewInput = {
  id: '',
  content: '',
  postTags: defaultMaster,
};

const defaultPostDetail = {
  id: '',
  content: '',
  postTags: defaultMaster,
};

export const useGetPostDetail: () => //   isNew: boolean,
//   postId: string,
{
  form: Post;
  handleChangeValue: (
    fieldKey: keyof Post,
    value: Post[keyof Post] | null,
  ) => void;
} = (isNew = true, postId = '1') => {
  const [form, setForm] = useState<Post>(
    isNew ? defaultPostNewInput : defaultPostDetail,
  );

  const key = isNew ? null : 'POST_DETAIL';
  const handleChangeValue = (
    fieldKey: keyof Post,
    value: Post[keyof Post] | null,
  ) => {
    setForm((prevForm) => ({ ...prevForm, [fieldKey]: value }));
  };
  return { form, handleChangeValue };
};
