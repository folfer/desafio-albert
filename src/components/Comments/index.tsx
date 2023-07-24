import * as React from "react";
import { Comments as Layout } from "./Layout";
import { IComments } from "./data";
import { getAuthor } from "~/services";

export const Comments = (props: IComments) => {
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
