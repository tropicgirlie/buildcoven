import type { Application, ApplicationStatus, TechnicalLevel } from "@/types";

const memoryStore: Application[] = [];

export function addApplication(data: {
  full_name: string;
  email: string;
  location: string;
  project_idea: string;
  why_now: string;
  technical_level: TechnicalLevel;
  scholarship_interest: boolean;
  commitment_confirmed: boolean;
}): Application {
  const app: Application = {
    id: `mem-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
    ...data,
    status: "new",
    created_at: new Date().toISOString(),
  };
  memoryStore.unshift(app);
  return app;
}

export function listApplications(): Application[] {
  return [...memoryStore];
}

export function updateApplicationStatus(
  id: string,
  status: ApplicationStatus,
): Application | null {
  const index = memoryStore.findIndex((a) => a.id === id);
  if (index === -1) return null;
  memoryStore[index] = { ...memoryStore[index], status };
  return memoryStore[index];
}
