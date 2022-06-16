import { GetServerSidePropsContext } from "next";
import protectedRoutes from "utils/protected-routes";

export default function Home() {
  return <h1>HOME</h1>;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context);

  if (!session) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false
      }
    };
  }

  return {
    props: {}
  };
}
