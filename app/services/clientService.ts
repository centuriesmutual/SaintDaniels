import FingerprintJS from '@fingerprintjs/fingerprintjs';
const SESSION_TIMEOUT = 10 * 60 * 1000; // 10 minutes in milliseconds
const SESSION_START_KEY = 'applicationSessionStart';
const APPLICATION_COMPLETED_KEY = 'applicationCompleted';

interface ClientApplication {
  address: string;
  agentid: string;
  applications: any[];
  clientid: string;
  createdat: Date;
  dateofbirth: string;
  email: string;
  firstname: string;
  hasactivecoverage: boolean;
  lastname: string;
  middlename: string;
  namesuffix: string;
  phonenumber: string;
  ssn: string;
}

// Function to get visitor ID using FingerprintJS
async function getVisitorId(): Promise<string> {
  const fp = await FingerprintJS.load();
  const result = await fp.get();
  return result.visitorId;
}

// Function to check if this device has already submitted an application
function hasDeviceSubmitted(): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('hasSubmitted') === 'true';
}

// Function to mark device as having submitted
function markDeviceAsSubmitted(): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('hasSubmitted', 'true');
  localStorage.setItem(APPLICATION_COMPLETED_KEY, 'true');
}

// Function to check if session has timed out
function hasSessionTimedOut(): boolean {
  if (typeof window === 'undefined') return false;
  const sessionStart = localStorage.getItem(SESSION_START_KEY);
  if (!sessionStart) return false;
  
  const sessionStartTime = parseInt(sessionStart);
  const currentTime = Date.now();
  return (currentTime - sessionStartTime) > SESSION_TIMEOUT;
}

// Function to check if application is completed
export function isApplicationCompleted(): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(APPLICATION_COMPLETED_KEY) === 'true';
}

// Function to start a new application session
export function startApplicationSession(): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(SESSION_START_KEY, Date.now().toString());
  localStorage.removeItem(APPLICATION_COMPLETED_KEY);
}

// Function to clear application session
export function clearApplicationSession(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(SESSION_START_KEY);
  localStorage.removeItem(APPLICATION_COMPLETED_KEY);
  localStorage.removeItem('hasSubmitted');
}

export async function submitClientApplication(application: ClientApplication): Promise<{ success: boolean; message: string }> {
  try {
    // Check if session has timed out
    if (hasSessionTimedOut()) {
      clearApplicationSession();
      return {
        success: false,
        message: 'Your session has expired. Please start a new application.'
      };
    }

    // Check if application is already completed
    if (isApplicationCompleted()) {
      return {
        success: false,
        message: 'This application has already been completed. Please start a new application.'
      };
    }

    // Check if device has already submitted
    if (hasDeviceSubmitted()) {
      return {
        success: false,
        message: 'This device has already submitted an application. Please use a different device or contact support.'
      };
    }

    // Get visitor ID
    const visitorId = await getVisitorId();

    // Mark device as having submitted and application as completed
    markDeviceAsSubmitted();
    
    // Return success - application would be submitted via API route
    return {
      success: true,
      message: 'Application submitted successfully'
    };
    
  } catch (error) {
    console.error('Error submitting application:', error);
    return {
      success: false,
      message: 'An error occurred while submitting the application. Please try again.'
    };
  }
} 