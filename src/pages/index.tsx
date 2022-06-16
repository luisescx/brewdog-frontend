import { GetServerSidePropsContext } from "next";
import protectedRoutes from "utils/protected-routes";

import Error from "components/Error";

export default function Home() {
  return <Error />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context);

  if (session) {
    return {
      redirect: {
        destination: "/beers",
        permanent: false
      }
    };
  }

  return {
    props: {}
  };
}
