import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  console.log('New order received:', data);

  return NextResponse.json({ message: 'Order received successfully', data });
}
