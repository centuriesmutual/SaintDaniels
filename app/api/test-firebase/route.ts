import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    success: false,
    message: 'Firebase is no longer in use. This endpoint has been disabled.',
    environment: process.env.NODE_ENV
  }, { status: 200 });
} 