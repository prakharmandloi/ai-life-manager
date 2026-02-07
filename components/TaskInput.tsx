'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, X, Calendar, Bell } from 'lucide-react';
import { parseTaskInput } from '@/lib/ai';
import { useTaskStore } from '@/store/taskStore';
import { format } from 'date-fns';

interface TaskInputProps {
  onClose: () => void;
}

export default function TaskInput({ onClose }: TaskInputProps) {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState<any>(null);
  const addTask = useTaskStore((state) => state.addTask);

  const handleAnalyze = async () => {
    if (!input.trim()) return;
    
    setLoading(true);
    try {
      const parsed = await parseTaskInput(input);
      setPreview(parsed);
    } catch (error) {
      console.error('Error parsing task:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = () => {
    if (!preview) return;
    
    addTask({
      title: preview.title,
      description: preview.description,
      category: preview.category,
      priority: preview.priority,
      dueDate: preview.dueDate,
      reminders: preview.suggestedReminders.map((time: Date) => ({
        id: crypto.randomUUID(),
        time,
        sent: false,
      })),
    });
    
    setInput('');
    setPreview(null);
    onClose();
  };

  const categoryColors: Record<string, string> = {
    exam: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
    travel: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
    payment: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300',
    form: 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300',
    personal: 'bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-300',
  };

  const priorityColors: Record<string, string> = {
    low: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
    medium: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
    high: 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300',
    urgent: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-purple-500" />
          <h3 className="font-semibold text-gray-900 dark:text-white">Add New Task</h3>
        </div>
        <button
          onClick={onClose}
          className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>
      </div>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type naturally... e.g., 'Book train tickets on 15th March' or 'Apply for GATE exam before last date'"
        className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
        rows={3}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && e.metaKey) {
            handleAnalyze();
          }
        }}
      />

      {!preview && (
        <button
          onClick={handleAnalyze}
          disabled={!input.trim() || loading}
          className="mt-4 w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Analyzing...
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5" />
              Analyze with AI
            </>
          )}
        </button>
      )}

      {preview && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mt-4 space-y-4"
        >
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-4 rounded-xl border border-purple-200 dark:border-purple-800">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{preview.title}</h4>
            {preview.description && (
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{preview.description}</p>
            )}
            
            <div className="flex flex-wrap gap-2 mb-3">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[preview.category]}`}>
                {preview.category}
              </span>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${priorityColors[preview.priority]}`}>
                {preview.priority} priority
              </span>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 mb-3">
              <Calendar className="w-4 h-4" />
              <span>Due: {format(preview.dueDate, 'PPP')}</span>
            </div>

            {preview.suggestedReminders.length > 0 && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  <Bell className="w-4 h-4" />
                  <span>Suggested Reminders:</span>
                </div>
                <div className="space-y-1">
                  {preview.suggestedReminders.map((reminder: Date, idx: number) => (
                    <div key={idx} className="text-xs text-gray-600 dark:text-gray-400 pl-6">
                      • {format(reminder, 'PPP p')}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setPreview(null)}
              className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-3 rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              Edit
            </button>
            <button
              onClick={handleSave}
              className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all"
            >
              Save Task
            </button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
