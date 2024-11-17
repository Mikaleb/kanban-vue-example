export enum Status {
  Todo = "todo",
  Ongoing = "ongoing",
  Done = "done",
}

export enum Priority {
  Low = "low",
  Normal = "normal",
  High = "high",
  Urgent = "urgent",
}

export interface Task {
  id: number;
  title: string;
  status: Status;
  priority: Priority;
  epic?: number;
  isEpic: boolean;
  created_at: Date;
  updated_at: Date;
  archived_at?: Date;
}

export interface Comment {
  id: number;
  task_id: number;
  author_id: number;
  content: string;
  created_at: Date;
}
