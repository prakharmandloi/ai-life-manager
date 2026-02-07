import { TaskCategory, TaskPriority } from '@/store/taskStore';

export interface ParsedTask {
  title: string;
  description?: string;
  category: TaskCategory;
  priority: TaskPriority;
  dueDate: Date;
  suggestedReminders: Date[];
}

// Simple AI-like parsing using patterns and keywords
export async function parseTaskInput(input: string): Promise<ParsedTask> {
  const now = new Date();
  
  // Extract category based on keywords
  const category = detectCategory(input);
  
  // Extract priority based on urgency keywords
  const priority = detectPriority(input);
  
  // Extract date
  const dueDate = extractDate(input, now);
  
  // Generate title and description
  const { title, description } = extractTitleAndDescription(input);
  
  // Suggest reminders based on category and due date
  const suggestedReminders = generateReminders(dueDate, category, priority);
  
  return {
    title,
    description,
    category,
    priority,
    dueDate,
    suggestedReminders,
  };
}

function detectCategory(input: string): TaskCategory {
  const lower = input.toLowerCase();
  
  if (lower.match(/exam|test|gate|jee|neet|study|quiz/)) return 'exam';
  if (lower.match(/ticket|train|flight|bus|travel|book/)) return 'travel';
  if (lower.match(/pay|payment|bill|subscription|renew|fee/)) return 'payment';
  if (lower.match(/form|apply|application|register|registration/)) return 'form';
  
  return 'personal';
}

function detectPriority(input: string): TaskPriority {
  const lower = input.toLowerCase();
  
  if (lower.match(/urgent|asap|immediately|critical|important/)) return 'urgent';
  if (lower.match(/high|soon|priority/)) return 'high';
  if (lower.match(/low|maybe|sometime/)) return 'low';
  
  return 'medium';
}

function extractDate(input: string, now: Date): Date {
  const lower = input.toLowerCase();
  
  // Check for specific date patterns
  const dateMatch = input.match(/(\d{1,2})(st|nd|rd|th)?\s+(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|january|february|march|april|may|june|july|august|september|october|november|december)/i);
  if (dateMatch) {
    const day = parseInt(dateMatch[1]);
    const monthStr = dateMatch[3].toLowerCase();
    const monthMap: { [key: string]: number } = {
      jan: 0, january: 0,
      feb: 1, february: 1,
      mar: 2, march: 2,
      apr: 3, april: 3,
      may: 4,
      jun: 5, june: 5,
      jul: 6, july: 6,
      aug: 7, august: 7,
      sep: 8, september: 8,
      oct: 9, october: 9,
      nov: 10, november: 10,
      dec: 11, december: 11,
    };
    const month = monthMap[monthStr];
    const year = now.getFullYear();
    const date = new Date(year, month, day);
    
    // If date is in the past, assume next year
    if (date < now) {
      date.setFullYear(year + 1);
    }
    
    return date;
  }
  
  // Relative dates
  if (lower.includes('today')) {
    return new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59);
  }
  
  if (lower.includes('tomorrow')) {
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(23, 59, 0, 0);
    return tomorrow;
  }
  
  if (lower.match(/next week/)) {
    const nextWeek = new Date(now);
    nextWeek.setDate(nextWeek.getDate() + 7);
    return nextWeek;
  }
  
  if (lower.match(/(\d+)\s*days?/)) {
    const days = parseInt(lower.match(/(\d+)\s*days?/)![1]);
    const future = new Date(now);
    future.setDate(future.getDate() + days);
    return future;
  }
  
  // Default to 7 days from now
  const defaultDate = new Date(now);
  defaultDate.setDate(defaultDate.getDate() + 7);
  return defaultDate;
}

function extractTitleAndDescription(input: string): { title: string; description?: string } {
  // Clean up the input
  const cleaned = input.trim();
  
  // If input is short, use it as title
  if (cleaned.length < 50) {
    return { title: cleaned };
  }
  
  // Split into sentences
  const sentences = cleaned.split(/[.!?]+/).filter(s => s.trim());
  
  if (sentences.length === 1) {
    return { title: sentences[0].trim() };
  }
  
  // First sentence as title, rest as description
  return {
    title: sentences[0].trim(),
    description: sentences.slice(1).join('. ').trim(),
  };
}

function generateReminders(dueDate: Date, category: TaskCategory, priority: TaskPriority): Date[] {
  const reminders: Date[] = [];
  const now = new Date();
  const daysUntilDue = Math.ceil((dueDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  
  // Same day reminder (9 AM)
  const sameDayReminder = new Date(dueDate);
  sameDayReminder.setHours(9, 0, 0, 0);
  if (sameDayReminder > now) {
    reminders.push(sameDayReminder);
  }
  
  // Category-based reminders
  if (category === 'exam' || category === 'form') {
    // 7 days before
    if (daysUntilDue > 7) {
      const weekBefore = new Date(dueDate);
      weekBefore.setDate(weekBefore.getDate() - 7);
      weekBefore.setHours(10, 0, 0, 0);
      if (weekBefore > now) reminders.push(weekBefore);
    }
    
    // 3 days before
    if (daysUntilDue > 3) {
      const threeDaysBefore = new Date(dueDate);
      threeDaysBefore.setDate(threeDaysBefore.getDate() - 3);
      threeDaysBefore.setHours(10, 0, 0, 0);
      if (threeDaysBefore > now) reminders.push(threeDaysBefore);
    }
  }
  
  // 1 day before for all
  if (daysUntilDue > 1) {
    const oneDayBefore = new Date(dueDate);
    oneDayBefore.setDate(oneDayBefore.getDate() - 1);
    oneDayBefore.setHours(14, 0, 0, 0);
    if (oneDayBefore > now) reminders.push(oneDayBefore);
  }
  
  // Urgent tasks get more reminders
  if (priority === 'urgent' && daysUntilDue > 0) {
    const morningReminder = new Date(dueDate);
    morningReminder.setHours(8, 0, 0, 0);
    if (morningReminder > now) reminders.push(morningReminder);
    
    const afternoonReminder = new Date(dueDate);
    afternoonReminder.setHours(14, 0, 0, 0);
    if (afternoonReminder > now) reminders.push(afternoonReminder);
  }
  
  return reminders.sort((a, b) => a.getTime() - b.getTime());
}
