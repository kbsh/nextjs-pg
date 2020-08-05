import { NextPage } from 'next';
import Link from 'next/link';

import withSWRHoc from '@components/hoc/with-swr';
import List from '@components/List';
import { User } from '@interfaces/index';
import { Path } from '@utils/routes';

interface Props {
  data: User[];
}
const Component: NextPage<Props> = ({ data }: Props) => {
  return (
    <>
      <h1>Users List</h1>
      <p>You are currently on: /users</p>
      <List items={data} />
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </>
  );
};

export default withSWRHoc<User[]>(Component, Path.APIUsers);
