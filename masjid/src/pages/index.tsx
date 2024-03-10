import { useUser } from "@clerk/nextjs";
import type { NextPage } from "next";
import { PageLayout } from "../components/layout";
const Home: NextPage = () => {
  const { isLoaded: userLoaded, isSignedIn } = useUser();

  if (!userLoaded) return <div />;
  return (
    <>
      {isSignedIn ? (
        <PageLayout>
          <div>hello</div>
        </PageLayout>
      ) : (
        <div>ciao</div>
      )}
    </>
  );
};
export default Home;
