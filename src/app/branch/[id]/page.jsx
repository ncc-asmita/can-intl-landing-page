import BranchDetail from "@/components/Branch/BranchDetail/BranchDetail";
import { Layout } from "@/components/Layout";

export default async function Page({ params }) {
    const resolvedParams = await params;
  return (
    <Layout>
      <BranchDetail params={resolvedParams} />
    </Layout>
  );
}
