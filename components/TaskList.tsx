'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Circle, Trash2, Calendar, Bell, AlertCircle } from 'lucide-react';
import { useTaskStore } from '@/store/taskStore';
import { format, formatDistanceToNow, isPast, isToday, isTomorrow } from 'date-fns';

export default function TaskList() {
  const { tasks, toggleComplete, deleteTask } = useTaskStore();

  const activeTasks = tasks.filter((t) => !t.completed).sort((a, b) => {
    // Sort by priority first, then by due date
    const priorityOrder = { urgent: 0, high: 1, medium: 2, low: 3 };
    if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    }
    return a.dueDate.getTime() - b.dueDate.getTime();
  });

  const completedTasks = tasks.filter((t) => t.completed).sort((a, b) => 
    (b.completedAt?.getTime() || 0) - (a.completedAt?.getTime() || 0)
  );

  const categoryColors: Record<string, string> = {
    exam: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
    travel: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
    payment: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300',
    form: 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300',
    personal: 'bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-300',
  };

  const priorityColors: Record<string, string> = {
    low: 'border-gray-300 dark:border-gray-600',
    medium: 'border-blue-300 dark:border-blue-600',
    high: 'border-orange-300 dark:border-orange-600',
    urgent: 'border-red-300 dark:border-red-600',
  };

  const getDateLabel = (date: Date) => {
    if (isToday(date)) return 'Today';
    if (isTomorrow(date)) return 'Tomorrow';
    if (isPast(date)) return 'Overdue';
    return formatDistanceToNow(date, { addSuffix: true });
  };

  const TaskCard = ({ task }: { task: any }) => {
    const isOverdue = isPast(task.dueDate) && !task.completed;
    
    return (
      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, x: -100 }}
        className={`bg-white dark:bg-gray-800 rounded-xl p-4 border-l-4 ${priorityColors[task.priority]} shadow-sm hover:shadow-md transition-all ${
          task.completed ? 'opacity-60' : ''
        }`}
      >
        <div className="flex items-start gap-3">
          <button
            onClick={() => toggleComplete(task.id)}
            className="mt-1 flex-shrink-0"
          >
            {task.completed ? (
              <CheckCircle2 className="w-6 h-6 text-green-500" />
            ) : (
              <Circle className="w-6 h-6 text-gray-400 hover:text-purple-500 transition-colors" />
            )}
          </button>

          <div className="flex-1 min-w-0">
            <h4 className={`font-semibold text-gray-900 dark:text-white mb-1 ${
              task.completed ? 'line-through' : ''
            }`}>
              {task.title}
            </h4>
            
            {task.description && (
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                {task.description}
              </p>
            )}

            <div className="flex flex-wrap gap-2 mb-2">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${categoryColors[task.category]}`}>
                {task.category}
              </span>
              {isOverdue && (
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  Overdue
                </span>
              )}
            </div>

            <div className="flex items-center gap-4 text-xs text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span className={isOverdue ? 'text-red-600 dark:text-red-400 font-medium' : ''}>
                  {getDateLabel(task.dueDate)}
                </span>
              </div>
              {task.reminders.length > 0 && (
                <div className="flex items-center gap-1">
                  <Bell className="w-3 h-3" />
                  <span>{task.reminders.length} reminders</span>
                </div>
              )}
            </div>
          </div>

          <button
            onClick={() => deleteTask(task.id)}
            className="flex-shrink-0 p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors group"
          >
            <Trash2 className="w-4 h-4 text-gray-400 group-hover:text-red-500 transition-colors" />
          </button>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="space-y-6">
      {activeTasks.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full" />
            Active Tasks ({activeTasks.length})
          </h2>
          <div className="space-y-3">
            <AnimatePresence>
              {activeTasks.map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
            </AnimatePresence>
          </div>
        </div>
      )}

      {completedTasks.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <div className="w-1 h-6 bg-green-500 rounded-full" />
            Completed ({completedTasks.length})
          </h2>
          <div className="space-y-3">
            <AnimatePresence>
              {completedTasks.map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
            </AnimatePresence>
          </div>
        </div>
      )}
    </div>
  );
}
