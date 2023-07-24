import * as React from "react";
import { Post as Layout } from "./Layout";
import { IPost } from "./data";
import { getAuthor, getComments } from "~/services";

export const Post = (props: IPost) => {
  const { id, title, description } = props.route.params;
  const [dataComments, setDataComments] = React.useState();
  const [authorName, setAuthorName] = React.useState();

  React.useEffect(() => {
    (async function () {
      try {
        const { data } = await getComments(id);
        const author = await getAuthor(id);
        setAuthorName(author.data.name);
        setDataComments(data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  const layoutProps = {
    dataComments,
    title,
    description,
    authorName,
    ...props,
  };

  return <Layout {...layoutProps} />;
};
