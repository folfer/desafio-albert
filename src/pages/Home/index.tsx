import * as React from "react";
import { Home as Layout } from "./Layout";
import { IHome } from "./data";
import { getPosts } from "~/services";

export const Home = (props: IHome) => {
  const [dataPosts, setDataPosts] = React.useState();

  React.useEffect(() => {
    (async function () {
      try {
        const { data } = await getPosts();
        setDataPosts(data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  const layoutProps = {
    dataPosts,
    ...props,
  };

  return <Layout {...layoutProps} />;
};
