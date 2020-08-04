import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { Path } from '../utils/routes';

interface Props {
  ssr?: true;
  to: Path;
}

const Redirect = ({ to }: Props) => {
  const router = useRouter();

  useEffect(() => {
    router.push(to);
  });

  return null;
};

export default Redirect;
