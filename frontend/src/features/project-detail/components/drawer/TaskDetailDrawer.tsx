import TaskMetadata from "./task-information/TaskMetadata";
import TaskDescription from "./task-information/TaskDescription";
import ProgressTracker from "./task-information/ProgressTracker";

import CommentList from "./comments/CommentList";
import CommentInput from "./comments/CommentInput";

import AttachmentList from "./attachments/AttachmentList";
import ActivityTimeline from "./activity/ActivityTimeline";

import PredictionGauge from "./ai-analysis/PredictionGauge";
import RiskBreakdown from "./ai-analysis/RiskBreakdown";
import RecommendationCard from "./ai-analysis/RecommendationCard";
import AIExplanationPanel from "./ai-analysis/AIExplanationPanel";

function TaskDetailDrawer() {
  return (
    <div
      className="
        fixed
        right-0
        top-0
        z-50

        h-screen
        w-[700px]

        overflow-y-auto

        border-l
        border-border

        bg-background

        p-6
      "
    >
      <h2
        className="
          text-2xl
          font-bold
        "
      >
        Build AI Planner API
      </h2>

      <div className="mt-6 space-y-5">
        <TaskMetadata />

        <TaskDescription />

        <ProgressTracker />

        <AttachmentList />

        <ActivityTimeline />

        <CommentList />

        <CommentInput />

        <PredictionGauge />

        <RiskBreakdown />

        <RecommendationCard />

        <AIExplanationPanel />
      </div>
    </div>
  );
}

export default TaskDetailDrawer;