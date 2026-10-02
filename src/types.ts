export type ServiceCategory = 'all' | 'layanan' | 'sosmed';

export interface WorkflowStep {
  step: number;
  title: string;
  description: string;
  badge?: string;
  iconName: string;
}

export interface ServiceItem {
  id: string;
  category: 'layanan' | 'sosmed';
  categoryLabel: string;
  title: string;
  badgeText?: string;
  badgeColor?: 'blue' | 'amber' | 'emerald' | 'purple' | 'rose';
  subtitle: string;
  description: string;
  icon: string;
  linkUrl: string;
  flowSteps?: WorkflowStep[];
  features?: string[];
  externalPlatform: string;
  stats?: string;
  accentColor: string;
}
