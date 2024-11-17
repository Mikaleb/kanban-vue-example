import { Status } from "@/types/Task.ts";

export const getStatus = (status: Status) => {
  switch (status) {
    case Status.Todo:
      return "To do";
    case Status.Ongoing:
      return "In Progress";
    case Status.Done:
      return "Completed";
    default:
      return "Unknown status";
  }
};
