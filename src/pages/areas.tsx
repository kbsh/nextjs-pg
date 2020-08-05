import { NextPage } from 'next';

import withSWRHoc from '@components/hoc/with-swr';
import { AreaMaster } from '@entities';
import { Path } from '@utils/routes';

type Props = {
  data: AreaMaster[];
};

const Component: NextPage<Props> = ({ data }: Props) => {
  return (
    <>
      <h1>Area List</h1>
      <p>You are currently on: /areas</p>
      <div>
        <ul>
          {data.map((area) => (
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

export default withSWRHoc<AreaMaster[]>(Component, Path.APIAreas);
