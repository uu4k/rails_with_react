import {useParams} from "react-router-dom";

export const GamePage = () => {
  // memo react routerに依存している実装になってあまり嬉しくない+テストしづらい。Nextはこの辺りファイルの命名とディレクトリ構成でよしなにしてるのでコンポーネント自体は依存度低く作れてる
  const { gameId } = useParams();
  return <>{gameId}</>;
};
