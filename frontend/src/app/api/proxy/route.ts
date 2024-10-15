import { NextRequest, NextResponse } from 'next/server';

import { removeTrailingSlash } from '@/utils';

const API_BASE_URL = removeTrailingSlash(
  process.env.NEXT_PUBLIC_EXTERNAL_API_URL || '',
);
const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN || '';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const endpoint = searchParams.get('endpoint');

  if (!endpoint) {
    return NextResponse.json(
      { error: 'Endpoint is required' },
      { status: 400 },
    );
  }

  try {
    // Create the external API URL with proper URL construction
    const apiUrl = new URL(`${API_BASE_URL}/${endpoint}`);
    apiUrl.searchParams.append('token', API_TOKEN);

    // Make the request to the external API
    const apiResponse = await fetch(apiUrl.toString(), {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!apiResponse.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch external API' },
        { status: apiResponse.status },
      );
    }

    const data = await apiResponse.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching external API:', error);
    return NextResponse.json(
      { error: 'Error fetching external API' },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  const { endpoint, ...body } = await request.json();

  try {
    const apiResponse = await fetch(`${API_BASE_URL}/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!apiResponse.ok) {
      return NextResponse.json(
        { error: 'Failed to post to external API' },
        { status: apiResponse.status },
      );
    }

    const data = await apiResponse.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error posting to external API:', error);
    return NextResponse.json(
      { error: 'Error posting to external API' },
      { status: 500 },
    );
  }
}
