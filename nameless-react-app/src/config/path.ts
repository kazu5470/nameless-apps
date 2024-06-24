export type Path = {
  text: string;
  pathname: string;
};

export const path: Path[] = [
  { text: '投稿一覧', pathname: '/posts' },
  { text: 'プロフィール', pathname: '/user' },
  { text: 'admin投稿一覧', pathname: '/admin/main/posts' },
  { text: 'adminユーザー一覧', pathname: '/admin/main/users' },
];
