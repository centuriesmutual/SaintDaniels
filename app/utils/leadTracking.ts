/**
 * Extracts the marketingID from URL query parameters
 * @returns {string|null} The marketing ID or null if not found
 */
export const extractMarketingID = () => {
  if (typeof window === 'undefined') return null;
  
  const urlParams = new URLSearchParams(window.location.search);
  const marketingID = urlParams.get('marketingID');
  
  if (!marketingID) {
    console.warn('Marketing ID not found in URL parameters');
    return 'UNKNOWN';
  }
  
  return marketingID;
};

/**
 * Submits lead data via API route
 * @param {Object} leadData - The lead data to submit
 * @param {string} leadData.firstName - First name of the lead
 * @param {string} leadData.lastName - Last name of the lead
 * @param {string} leadData.email - Email of the lead
 * @param {string} leadData.phone - Phone number of the lead
 * @returns {Promise<string>} Lead ID
 */
export const submitLeadToFirestore = async (leadData) => {
  try {
    // Get marketing ID from URL or use default
    const marketingID = extractMarketingID();
    
    // Prepare the lead data with marketing ID
    const leadWithTracking = {
      ...leadData,
      marketingID,
      timestamp: new Date().toISOString()
    };
    
    // Submit via API route
    const response = await fetch('/api/submit-lead', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(leadWithTracking)
    });
    
    const result = await response.json();
    
    if (result.success) {
      console.log('Lead successfully submitted with ID:', result.leadId);
      return result.leadId;
    } else {
      throw new Error(result.error || 'Failed to submit lead');
    }
  } catch (error) {
    console.error('Error submitting lead data:', error);
    throw error;
  }
}; 