/**
 * Funkcja filtruje zadania o statusie "completed",
 * sortuje je rosnąco po id i zwraca tylko ich tytuły.
 *
 * @param {Array} tasks - Tablica obiektów { id, title, status }
 * @returns {Array} Tablica tytułów zakończonych zadań
 */
function getCompletedTaskTitles(tasks) {
    return tasks
      .filter(task => task.status === "completed")
      .sort((a, b) => a.id - b.id)
      .map(task => task.title);
  }
  
  module.exports = getCompletedTaskTitles;