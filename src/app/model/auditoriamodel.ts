export type AuditType = 'Feature' | 'Fix' | 'UI' | 'Content';

export interface AuditItem {
  iso: string;
  type: AuditType;
  title: string;
  description: string;
}
