import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axiosClient from "@/lib/api";

function AcceptInvitePage() {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const token = params.get("token");

  useEffect(() => {
    if (!token) return;

    const accept = async () => {
      try {
        const res = await axiosClient.post(
          `/team-invites/accept/${token}`
        );

        const teamId = res.data.team_id;

        navigate(`/teams/${teamId}/projects`);
      } catch (err) {
        alert("Invalid or expired invite");
        navigate("/teams");
      }
    };

    accept();
  }, [token]);

  return (
    <div className="flex items-center justify-center h-screen">
      Accepting invitation...
    </div>
  );
}

export default AcceptInvitePage;