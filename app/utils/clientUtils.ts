/**
 * Client and lead data management utilities
 */

/**
 * Store client data in localStorage for potential future reference
 * @param {Object} data - Client data including IDs
 */
export const storeClientData = (data) => {
  if (data.applicationId) {
    localStorage.setItem('lastApplicationId', data.applicationId);
  }
  
  if (data.clientId) {
    localStorage.setItem('clientId', data.clientId);
  }
  
  if (data.leadId) {
    localStorage.setItem('leadId', data.leadId);
  }
  
  // Store timestamp of when the data was stored
  localStorage.setItem('clientDataTimestamp', new Date().toISOString());
};

/**
 * Retrieve client data from localStorage
 * @returns {Object} Client data object
 */
export const getClientData = () => {
  return {
    applicationId: localStorage.getItem('lastApplicationId'),
    clientId: localStorage.getItem('clientId'),
    leadId: localStorage.getItem('leadId'),
    timestamp: localStorage.getItem('clientDataTimestamp')
  };
};

/**
 * Check if a user has an existing client record
 * @returns {Boolean} Whether client data exists
 */
export const hasExistingClientData = () => {
  const clientId = localStorage.getItem('clientId');
  return !!clientId;
};

/**
 * Clear client data from localStorage (e.g., for logout)
 */
export const clearClientData = () => {
  localStorage.removeItem('lastApplicationId');
  localStorage.removeItem('clientId');
  localStorage.removeItem('leadId');
  localStorage.removeItem('clientDataTimestamp');
};

/**
 * Format the client data for display
 * @param {Object} data - Client data
 * @returns {String} Formatted string for display
 */
export const formatClientDataForDisplay = (data) => {
  const parts = [];
  
  if (data.clientId) {
    parts.push(`Client ID: ${data.clientId}`);
  }
  
  if (data.applicationId) {
    parts.push(`Application ID: ${data.applicationId}`);
  }
  
  if (data.timestamp) {
    const date = new Date(data.timestamp);
    parts.push(`Submitted: ${date.toLocaleDateString()} ${date.toLocaleTimeString()}`);
  }
  
  return parts.join(' | ');
}; 