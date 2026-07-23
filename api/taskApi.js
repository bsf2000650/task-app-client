const BASE_URL = 'http://localhost:4000';

export async function getTasks() {
  const response = await fetch(`${BASE_URL}/api/tasks`);
  if (!response.ok) {
    throw new Error(`Failed to fetch tasks: ${response.status}`);
  }
  return response.json();
}

export async function createTask(task) {
  const response = await fetch(`${BASE_URL}/api/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task),
  });
  if (!response.ok) {
    throw new Error(`Failed to create task: ${response.status}`);
  }
  return response.json();
}

export async function updateTask(id, updates) {
  const response = await fetch(`${BASE_URL}/api/tasks/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updates),
  });
  if (!response.ok) {
    throw new Error(`Failed to update task: ${response.status}`);
  }
  return response.json();
}

export async function deleteTask(id) {
  const response = await fetch(`${BASE_URL}/api/tasks/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error(`Failed to delete task: ${response.status}`);
  }
  return response.json();
}