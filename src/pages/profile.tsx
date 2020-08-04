import { Auth } from '@interfaces/auth';

type Props = {
  user: Auth;
};

const WithStaticProps = ({ user }: Props) => {
  return (
    <>
      <h1>Users List</h1>
      <p>You are currently on: /users/me</p>
      <div>
        <p>nickname: {user.nickname}</p>
        <p>name: {user.name}</p>
      </div>
    </>
  );
};

export default WithStaticProps;
