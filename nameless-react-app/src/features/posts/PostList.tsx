import { Button } from '@/components/Button';
import { Table } from '@/components/Table';
import { postList } from '@/data';
import type { PostList as Posts } from '@/features/posts/types/postList';
import { useRouter } from 'next/router';
import { PostTable } from './components/PostTable';

export interface PostListProps {
  postLists: Posts;
  onOpen: () => void;
}

export function PostList() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/posts/new');
  };
  return (
    <>
      <Button
        onClick={handleClick}
        title={'新規投稿'}
        color={'navy'}
        style={{ color: 'yellow' }}
      />
      {/* テーブルにしたけど、ちょっと微妙かも、、、要検討 */}
      <PostTable />
    </>
  );
}
