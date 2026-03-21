export interface Project {
  id: string;
  name: string;
  repoUrl: string;
  status: 'production' | 'reviewing' | 'blocked';
  integrity: number;
  vulnerabilities: number;
  deployments: number;
  icon: string;
}

export interface PullRequest {
  id: string;
  number: number;
  title: string;
  repo: string;
  author: string;
  time: string;
  status: 'reprovado' | 'revisao' | 'analise' | 'bloqueado' | 'aprovado';
  critical: number;
  warnings: number;
  success: number;
  description: string;
  branch: string;
  target: string;
}

export interface Activity {
  id: string;
  repo: string;
  developer: string;
  developerAvatar: string;
  status: string;
  time: string;
}
