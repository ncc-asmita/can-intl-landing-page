import { Layout } from "@/components/Layout";
import { HomeScreen } from "@/screens/HomeScreen";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Layout>
        <HomeScreen />
      </Layout>
    </Suspense>
  );
}
