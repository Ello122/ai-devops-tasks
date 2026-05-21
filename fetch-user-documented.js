/**
 * Pobiera dane użytkownika z API i przetwarza je do uproszczonej struktury.
 *
 * @function fetchUserData
 * @param {string|number} userId - Identyfikator użytkownika, którego dane chcemy pobrać.
 * @returns {Promise<Object|null>} Zwraca Promise z obiektem użytkownika lub null w przypadku błędu.
 *
 * Obiekt użytkownika zawiera:
 * @property {string} name - Imię użytkownika.
 * @property {string} email - Adres email użytkownika.
 * @property {Date} lastLogin - Data ostatniego logowania jako obiekt Date.
 */
function fetchUserData(userId) {
    return fetch(`https://api.example.com/users/${userId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        return {
          name: data.name,
          email: data.email,
          lastLogin: new Date(data.lastLoginTimestamp)
        };
      })
      .catch(error => {
        console.error('Fetch error:', error);
        return null;
      });
  }
  
  module.exports = fetchUserData;