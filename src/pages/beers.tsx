import { GetServerSidePropsContext } from "next";
import { signOut } from "next-auth/react";
import protectedRoutes from "utils/protected-routes";

export default function Beers() {
  return (
    <button
      onClick={async () => {
        await signOut({ redirect: true, callbackUrl: "/sign-in" });
      }}
    >
      Sign Out
    </button>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  await protectedRoutes(context);

  return {
    props: {}
  };
}
