import {useEffect} from 'react';
import {useHistory} from '@docusaurus/router';

export default function Home() {
  const history = useHistory();
  useEffect(() => {
    history.replace('/doc_demo/docs/intro');
  }, [history]);
  return null;
}
