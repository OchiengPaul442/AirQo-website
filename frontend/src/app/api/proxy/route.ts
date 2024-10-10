import { NextRequest, NextResponse } from 'next/server';

const API_BASE_URL = process.env.NEXT_PUBLIC_EXTERNAL_API_URL || '';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const endpoint = searchParams.get('endpoint');

  try {
    const apiResponse = await fetch(`${API_BASE_URL}/${endpoint}`, {
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
