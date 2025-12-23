import BranchDetail from "@/components/Branch/BranchDetail/BranchDetail";
import { Layout } from "@/components/Layout";
import { Suspense } from "react";

export default async function Page({ params }) {
  const resolvedParams = await params;
  return (
    <Suspense fallback={<div>Loading branch...</div>}>
      <Layout>
        <BranchDetail params={resolvedParams} />
      </Layout>
    </Suspense>
  );
}
