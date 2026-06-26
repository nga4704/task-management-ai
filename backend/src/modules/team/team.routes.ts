import express from "express";

import {
  createTeam,
  getTeams,
  getTeamDetail,
  updateTeam,
  deleteTeam,
  addMember,
  removeMember,
  getTeamProjects,
  getTeamMembers,
  getTeamMembersWithStats
} from "./team.controller";

import { protect }
from "../../middlewares/auth.middleware";

import {
  isTeamMember, isTeamOwner
} from "../../middlewares/team.middleware";

const router = express.Router();

// create team
router.post(
  "/",
  protect,
  createTeam
);

// get all teams
router.get(
  "/",
  protect,
  getTeams
);

// get team detail
router.get(
  "/:teamId",
  protect,
  isTeamMember,
  getTeamDetail
);

// update team
router.put(
  "/:teamId",
  protect,
  isTeamOwner,
  updateTeam
);

// delete team
router.delete(
  "/:teamId",
  protect,
  isTeamOwner,
  deleteTeam
);

// add member
router.post(
  "/:teamId/members",
  protect,
  isTeamOwner,
  addMember
);

// remove member
router.delete(
  "/:teamId/members/:userId",
  protect,
  isTeamOwner,
  removeMember
);

// get team projects
router.get("/:teamId/projects", protect, isTeamMember, getTeamProjects);

router.get("/:teamId/members", protect, isTeamMember, getTeamMembers);

router.get(
  "/:teamId/members-stats",
  getTeamMembersWithStats
);

export default router;