'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, Plus, Calendar, Zap, CheckCircle2, Trash2, Clock } from 'lucide-react';
import TaskInput from '@/components/TaskInput';
import TaskList from '@/components/TaskList';
import DailySummary from '@/components/DailySummary';
import { useTaskStore } from '@/store/taskStore';

export default function Home() {
  const [showInput, setShowInput] = useState(false);
  const { tasks, initializeTasks } = useTaskStore();

  useEffect(() => {
    initializeTasks();
  }, [initializeTasks]);

  const completedToday = tasks.filter(
    (t) => t.completed && new Date(t.completedAt || '').toDateString() === new Date().toDateString()
  ).length;

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-purple-500 to-blue-500 p-2 rounded-xl">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">AI Life Manager</h1>
              <p className="text-xs text-gray-600 dark:text-gray-400">Your future self texting you</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {completedToday > 0 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="flex items-center gap-2 bg-green-100 dark:bg-green-900 px-3 py-1 rounded-full"
              >
                <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400" />
                <span className="text-sm font-medium text-green-700 dark:text-green-300">
                  {completedToday} done today
                </span>
              </motion.div>
            )}
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
              <Bell className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Daily Summary */}
        <DailySummary />

        {/* Quick Add Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setShowInput(!showInput)}
          className="w-full mb-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Add New Task
        </motion.button>

        {/* Task Input */}
        <AnimatePresence>
          {showInput && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-6"
            >
              <TaskInput onClose={() => setShowInput(false)} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Task List */}
        <TaskList />

        {/* Empty State */}
        {tasks.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-12 h-12 text-purple-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No tasks yet
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Start by adding your first task. Just type naturally!
            </p>
            <button
              onClick={() => setShowInput(true)}
              className="bg-purple-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-purple-600 transition-colors"
            >
              Add Your First Task
            </button>
          </motion.div>
        )}
      </div>

      {/* Footer */}
      <footer className="text-center py-8 text-sm text-gray-600 dark:text-gray-400">
        <p>Built with ❤️ using AI • Never forget what matters</p>
      </footer>
    </main>
  );
}
