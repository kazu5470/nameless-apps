import { Table } from '@/components/Table';
import { postList } from '@/data';

export const PostTable = () => {
  const ths = (
    <tr>
      <th>ID</th>
      <th>内容</th>
      <th>タグ</th>
      <th>投稿日</th>
    </tr>
  );

  const rows = postList.map((post, i) => (
    <tr key={i} style={{ cursor: 'pointer' }} onClick={() => null}>
      <td style={{ maxWidth: '20%' }}>{post.id}</td>
      <td style={{ maxWidth: '20%' }}>{post.content}</td>
      <td style={{ maxWidth: '20%' }}>
        {post.postTags.map((tag) => tag.text)}
      </td>
      {/* <td style={{ maxWidth: '20%' }}>{post.createdAt.toLocaleString()}</td> */}
    </tr>
  ));
  return (
    <Table
      rows={rows}
      ths={ths}
      horizontalSpacing={10}
      dataLength={postList.length}
    />
  );
};
