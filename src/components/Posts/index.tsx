import * as React from "react";
import { Posts as Layout } from "./Layout";
import { IPosts } from "./data";
import { getAuthor } from "~/services";

export const Posts = (props: IPosts) => {
  const [dataAuthor, setDataAuthor] = React.useState<string>("");

  React.useEffect(() => {
    (async function () {
      try {
        const { data } = await getAuthor(props.idUser);
        setDataAuthor(data.name);
      } catch (err) {
        console.error(err.message);
      }
    })();
  }, []);

  const layoutProps = {
    dataAuthor,
    ...props,
  };

  return <Layout {...layoutProps} />;
};
