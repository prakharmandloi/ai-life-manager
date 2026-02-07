'use client';

import { motion } from 'framer-motion';
import { Sun, AlertTriangle, CheckCircle2, Clock } from 'lucide-react';
import { useTaskStore } from '@/store/taskStore';
import { isToday, isTomorrow, addDays, isPast } from 'date-fns';

export default function DailySummary() {
  const tasks = useTaskStore((state) => state.tasks);

  const activeTasks = tasks.filter((t) => !t.completed);
  const todayTasks = activeTasks.filter((t) => isToday(t.dueDate));
  const tomorrowTasks = activeTasks.filter((t) => isTomorrow(t.dueDate));
  const thisWeekTasks = activeTasks.filter((t) => {
    const weekFromNow = addDays(new Date(), 7);
    return t.dueDate <= weekFromNow && !isToday(t.dueDate) && !isTomorrow(t.dueDate);
  });
  const overdueTasks = activeTasks.filter((t) => isPast(t.dueDate) && !isToday(t.dueDate));
  const urgentTasks = activeTasks.filter((t) => t.priority === 'urgent');

  if (activeTasks.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl p-6 text-white mb-6 shadow-xl"
    >
      <div className="flex items-center gap-3 mb-4">
        <Sun className="w-6 h-6" />
        <h2 className="text-xl font-bold">Good morning! Here's your day</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {todayTasks.length > 0 && (
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-5 h-5" />
              <span className="font-semibold">Today</span>
            </div>
            <p className="text-2xl font-bold">{todayTasks.length}</p>
            <p className="text-sm opacity-90">tasks due</p>
          </div>
        )}

        {overdueTasks.length > 0 && (
          <div className="bg-red-500/30 backdrop-blur-sm rounded-xl p-4 border border-red-300">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5" />
              <span className="font-semibold">Overdue</span>
            </div>
            <p className="text-2xl font-bold">{overdueTasks.length}</p>
            <p className="text-sm opacity-90">need attention</p>
          </div>
        )}

        {urgentTasks.length > 0 && (
          <div className="bg-orange-500/30 backdrop-blur-sm rounded-xl p-4 border border-orange-300">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5" />
              <span className="font-semibold">Urgent</span>
            </div>
            <p className="text-2xl font-bold">{urgentTasks.length}</p>
            <p className="text-sm opacity-90">high priority</p>
          </div>
        )}

        {thisWeekTasks.length > 0 && (
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-5 h-5" />
              <span className="font-semibold">This Week</span>
            </div>
            <p className="text-2xl font-bold">{thisWeekTasks.length}</p>
            <p className="text-sm opacity-90">upcoming</p>
          </div>
        )}
      </div>

      {overdueTasks.length > 0 && (
        <div className="mt-4 bg-red-500/20 backdrop-blur-sm rounded-xl p-4 border border-red-300">
          <p className="text-sm font-medium">
            ⚠️ You have {overdueTasks.length} overdue task{overdueTasks.length > 1 ? 's' : ''}. 
            Don't let them pile up!
          </p>
        </div>
      )}
    </motion.div>
  );
}
