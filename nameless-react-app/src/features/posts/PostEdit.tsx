import { Text } from '@/components/Text';
import { TextInput } from '@/components/TextInput';
import { Button } from '@/components/Button';
import { useGetPostDetail } from './hooks/useGetPostDetail';
import { useUpsertPost } from './hooks/postNewPost';

export function PostEdit() {
  const { createPost } = useUpsertPost();
  const { form, handleChangeValue } = useGetPostDetail();

  return (
    <>
      <Text>新規投稿及び投稿編集画面</Text>
      <TextInput
        placeholder={'タイトル'}
        value={form.content}
        onChangeValue={(value) => handleChangeValue('content', value)}
      />
      <Button title={'toukou'} onClick={() => createPost(form)} />
    </>
  );
}
