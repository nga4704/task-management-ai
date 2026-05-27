export interface ProductivityData {
  name: string;

  productivity: number;
}

export interface TeamPerformance {
  id: string;

  team: string;

  productivity: number;

  completedTasks: number;

  aiScore: number;
}