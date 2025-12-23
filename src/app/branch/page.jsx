import BranchList from "@/components/Branch/BranchList";
import { Layout } from "@/components/Layout";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading branches...</div>}>
      <Layout>
        <BranchList />
      </Layout>
    </Suspense>
  );
}
