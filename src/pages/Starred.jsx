import { useStarredShows } from '../lib/useStarredShows';

const Starred = () => {
  const [starredShows] = useStarredShows();

  return <div>Starred pages,starred {starredShows.length}</div>;
};
export default Starred;
