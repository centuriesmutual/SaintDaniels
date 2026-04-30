import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // Parse the request body
    const data = await request.json();
    
    // Validate required fields
    const { firstName, lastName, email, phonenumber } = data;
    if (!firstName || !lastName || !email || !phonenumber) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Get marketing ID or set default
    const marketingid = data.marketingid || 'UNKNOWN';
    if (marketingid === 'UNKNOWN') {
      console.warn('Marketing ID not found in lead submission');
    }
    
    // Prepare lead data with all required fields for database
    const leadData = {
      firstName,
      lastName,
      email,
      phonenumber,
      agentid: data.agentid || "",
      convertedtoapplication: data.convertedtoapplication || true,
      lastcontacted: data.lastcontacted || new Date().toISOString(),
      leadid: data.leadid || `LEAD-${Date.now()}`,
      leadsource: data.leadsource || "",
      linkedclientid: data.linkedclientid || "",
      marketingid,
      notes: data.notes || "",
      status: data.status || "New",
      submittedat: data.submittedat || new Date().toLocaleString('en-US'),
      timestamp: data.timestamp || new Date().toISOString(),
      ipAddress: request.headers.get('x-forwarded-for') || 'unknown',
      userAgent: request.headers.get('user-agent') || 'unknown'
    };
    
    console.log('Lead data prepared:', leadData);
    
    // TODO: Store lead data in your database
    // Lead data is ready to be stored in your preferred database
    
    // Return success response
    return NextResponse.json({ 
      success: true, 
      message: 'Lead successfully submitted',
      leadId: leadData.leadid
    });
    
  } catch (error) {
    console.error('Error submitting lead:', error);
    return NextResponse.json(
      { error: 'Failed to submit lead' },
      { status: 500 }
    );
  }
} 