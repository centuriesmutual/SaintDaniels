import { NextResponse } from 'next/server';
import { validateApplicationSubmission } from '@/app/utils/applicationValidation';

export async function POST(request) {
  try {
    const data = await request.json();
    const ipAddress = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip');
    
    console.log('Received application submission request:', {
      email: data.email,
      phone: data.phone,
      ipAddress
    });
    
    // Validate submission
    const validation = await validateApplicationSubmission(
      data.email,
      data.phone,
      ipAddress
    );
    
    if (!validation.isValid) {
      console.log('Validation failed:', validation.error);
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      );
    }
    
    console.log('Validation passed, proceeding with submission');
    
    // Generate client ID
    const clientId = `CLT-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    
    // Prepare application data for Firestore
    const applicationData = {
      // Basic Information
      clientId,
      firstName: data.firstName || '',
      middleName: data.middleName || '',
      lastName: data.lastName || '',
      email: data.email || '',
      phone: data.phone || '',
      dateOfBirth: data.dateOfBirth || '',
      ssn: data.ssn || '',
      
      // Address Information
      address: data.residentialaddress?.streetaddress || '',
      city: data.residentialaddress?.city || '',
      state: data.residentialaddress?.state || '',
      zipCode: data.residentialaddress?.zipcode || '',
      
      // Mailing Address
      mailingAddress: data.mailingStreet || '',
      mailingCity: data.mailingCity || '',
      mailingState: data.mailingState || '',
      mailingZipCode: data.mailingZip || '',
      
      // Origin Information
      countryOfOrigin: data.countryOfOrigin || '',
      stateOfOrigin: data.stateoforigin || '',
      
      // Employment Information
      occupation: data.occupation || '',
      annualSalary: data.expectedSalary || '',
      
      // Family Information
      maritalStatus: data.isMarried ? 'Married' : 'Single',
      spouseFirstName: data.spouseinfo?.firstname || '',
      spouseLastName: data.spouseinfo?.lastname || '',
      spouseDateOfBirth: data.spouseinfo?.dateofbirth || '',
      spouseSSN: data.spouseinfo?.ssn || '',
      willBeClaimedOnTaxes: data.isClaimedOnTaxes ? 'Yes' : 'No',
      taxFilingStatus: data.taxFilingStatus || '',
      
      // Insurance Information
      coverageType: data.existingInsuranceType || '',
      planName: data.healthInsuranceProvider || '',
      deductible: data.deductible || '',
      premium: '0', // Zero dollar premium plan
      
      // Signature Information
      hasESignature: !!data.signatureurl,
      hasRecording: false,
      hasVoiceRecording: false,
      
      // Metadata
      isWebLead: true,
      status: 'Submitted',
      submissionDate: new Date().toISOString(),
      effectiveDate: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    console.log('Application data prepared:', applicationData);
    
    // TODO: Store application data in your database
    // Application data is ready to be stored in your preferred database
    
    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Application successfully submitted',
      applicationId: `APP-${Date.now()}`,
      clientId: clientId
    });
    
  } catch (error) {
    console.error('Error submitting application:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to submit application' },
      { status: 500 }
    );
  }
} 