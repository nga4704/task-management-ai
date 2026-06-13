import { useParams } from "react-router-dom";

import MainLayout from "@/app/layouts/MainLayout";

function TeamDetailPage() {
  const { teamId } = useParams();

  return (
    <MainLayout
      title="Team Detail"
      description={`Team ID: ${teamId}`}
    >
      <div className="space-y-6">
        <div
          className="
            rounded-3xl
            border
            border-border
            bg-surface
            p-6
          "
        >
          Team detail page
        </div>
      </div>
    </MainLayout>
  );
}

export default TeamDetailPage;