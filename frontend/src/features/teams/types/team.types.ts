export interface TeamMember {
  id: string;

  role: string;

  user_id: string;

  users: {
    id: string;
    email: string;
    username: string;
    full_name?: string;
    avatar?: string;
  };
}

export interface Team {
  id: string;

  name: string;

  slug: string;

  description?: string;

  avatar_url?: string;

  owner_id: string;

  created_at: string;

  updated_at: string;

  members_count?: number;

  team_members?: TeamMember[];
  projects_count?: number;
}

export interface TeamDetail extends Team {
  team_members: TeamMember[];
}

export type TeamMemberStats = {
  id: string;
  userId: string;
  name: string;
  email: string;
  role: string;
  tasks: number;
  completion: number;
  workload: number;
};