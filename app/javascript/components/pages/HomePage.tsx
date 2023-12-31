import React, { useCallback } from "react";

export const HomePage = () => {
    // useCallbackで関数をキャッシュ(今回は不要なキャッシュ。関数を別コンポーネントに渡す際とかに有用)
    const callbackCreateGameButtonClick = useCallback(() => {
    //     TODO ゲーム作成のAPIコール
    //     TODO ゲームのルームに移動
    }, []);

    return (
    <>
      <h1>リバーシ</h1>
      <button onClick={callbackCreateGameButtonClick}>ルームを作成する</button>
    </>
  );
};
