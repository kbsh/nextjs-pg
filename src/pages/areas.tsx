import { GetServerSideProps } from 'next';

import { getAreas } from '@actions/areas';
import { AreaMaster } from '@entities';

type Props = {
  areas: AreaMaster[];
};

const Component = ({ areas }: Props) => {
  return (
    <>
      <h1>Area List</h1>
      <p>You are currently on: /areas</p>
      <div>
        <ul>
          {areas.map((area) => (
            <li key={area.id}>
              <p>id: {area.id}</p>
              <p>name: {area.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

// https://github.com/vercel/next.js/discussions/12785
// export const getStaticProps: GetStaticProps = async () => {
export const getServerSideProps: GetServerSideProps = async () => {
  const areas = await getAreas();
  return { props: { areas } };
};
export default Component;
