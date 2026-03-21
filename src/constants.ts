import { Project, PullRequest, Activity } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    name: 'Sapatos-Girl',
    repoUrl: 'github.com/aegis/sapatos-girl',
    status: 'production',
    integrity: 88,
    vulnerabilities: 2,
    deployments: 24,
    icon: 'shopping_bag'
  },
  {
    id: '2',
    name: 'Portifolio',
    repoUrl: 'github.com/aegis/main-portfolio',
    status: 'reviewing',
    integrity: 42,
    vulnerabilities: 12,
    deployments: 8,
    icon: 'account_circle'
  }
];

export const PULL_REQUESTS: PullRequest[] = [
  {
    id: 'pr-1',
    number: 1242,
    title: 'feat: novo checkout flow',
    repo: 'Sapatos-Girl',
    author: 'micvianna',
    time: 'há 2 horas',
    status: 'reprovado',
    critical: 3,
    warnings: 1,
    success: 8,
    description: 'Refatoração do fluxo de pagamento e validação de cupons.',
    branch: 'feature/checkout-refactor',
    target: 'main'
  },
  {
    id: 'pr-2',
    number: 882,
    title: 'fix: oauth callback security',
    repo: 'Core-API',
    author: 'l_schmidt',
    time: 'há 5 horas',
    status: 'revisao',
    critical: 0,
    warnings: 5,
    success: 12,
    description: 'Adding Stripe support for enterprise tier...',
    branch: 'fix/oauth-security',
    target: 'main'
  },
  {
    id: 'pr-3',
    number: 1238,
    title: 'refactor: clean component states',
    repo: 'Frontend-Utils',
    author: 'micvianna',
    time: 'Ontem',
    status: 'analise',
    critical: 0,
    warnings: 0,
    success: 24,
    description: 'Estrutura base da loja e estilos globais.',
    branch: 'refactor/states',
    target: 'develop'
  }
];

export const ACTIVITIES: Activity[] = [
  {
    id: 'act-1',
    repo: 'auth-microservice',
    developer: 'Ricardo S.',
    developerAvatar: 'https://picsum.photos/seed/ricardo/100/100',
    status: 'FALHA CRÍTICA',
    time: '14:22, Hoje'
  },
  {
    id: 'act-2',
    repo: 'payment-gateway-v2',
    developer: 'Juliana M.',
    developerAvatar: 'https://picsum.photos/seed/juliana/100/100',
    status: 'AVISO',
    time: '11:05, Hoje'
  }
];
