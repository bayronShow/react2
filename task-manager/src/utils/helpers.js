export const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

export const sortTasks = (tasks, sortBy) => {
  const sorted = [...tasks];
  
  switch (sortBy) {
    case 'newest':
      return sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    case 'oldest':
      return sorted.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    case 'completed':
      return sorted.sort((a, b) => b.completed - a.completed);
    case 'active':
      return sorted.sort((a, b) => a.completed - b.completed);
    default:
      return sorted;
  }
};