import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type TaskCategory = 'exam' | 'travel' | 'payment' | 'form' | 'personal';
export type TaskPriority = 'low' | 'medium' | 'high' | 'urgent';

export interface Reminder {
  id: string;
  time: Date;
  sent: boolean;
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  category: TaskCategory;
  priority: TaskPriority;
  dueDate: Date;
  reminders: Reminder[];
  completed: boolean;
  completedAt?: Date;
  createdAt: Date;
}

interface TaskStore {
  tasks: Task[];
  addTask: (task: Omit<Task, 'id' | 'createdAt' | 'completed'>) => void;
  updateTask: (id: string, updates: Partial<Task>) => void;
  deleteTask: (id: string) => void;
  toggleComplete: (id: string) => void;
  initializeTasks: () => void;
}

export const useTaskStore = create<TaskStore>()(
  persist(
    (set) => ({
      tasks: [],
      
      addTask: (task) =>
        set((state) => ({
          tasks: [
            ...state.tasks,
            {
              ...task,
              id: crypto.randomUUID(),
              createdAt: new Date(),
              completed: false,
            },
          ],
        })),
      
      updateTask: (id, updates) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, ...updates } : task
          ),
        })),
      
      deleteTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),
      
      toggleComplete: (id) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id
              ? {
                  ...task,
                  completed: !task.completed,
                  completedAt: !task.completed ? new Date() : undefined,
                }
              : task
          ),
        })),
      
      initializeTasks: () => {
        // This will be called on mount to ensure dates are Date objects
        set((state) => ({
          tasks: state.tasks.map((task) => ({
            ...task,
            dueDate: new Date(task.dueDate),
            createdAt: new Date(task.createdAt),
            completedAt: task.completedAt ? new Date(task.completedAt) : undefined,
            reminders: task.reminders.map((r) => ({
              ...r,
              time: new Date(r.time),
            })),
          })),
        }));
      },
    }),
    {
      name: 'task-storage',
    }
  )
);
