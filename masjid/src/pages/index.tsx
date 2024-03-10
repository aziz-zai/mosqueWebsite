import { useUser } from "@clerk/nextjs";
import type { NextPage } from "next";
import Gebetszeiten from "~/components/Gebetszeiten";
import NavBar from "~/components/NavBar/navbar";
import { Footer } from "~/components/footer";
import { PageLayout } from "../components/layout";
const Home: NextPage = () => {
  const { isLoaded: userLoaded, isSignedIn } = useUser();

  if (!userLoaded) return <div />;
  return (
    <>
      {isSignedIn ? (
        <PageLayout>
          <NavBar isSignedIn={isSignedIn} />
          <div>hello</div>
        </PageLayout>
      ) : (
        <div>
          <NavBar isSignedIn={isSignedIn} />
          <Gebetszeiten />
          <Footer />
        </div>
      )}
    </>
  );
};
export default Home;
