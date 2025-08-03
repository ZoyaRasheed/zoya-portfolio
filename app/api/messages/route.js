import connectDB from '@/lib/db/connection';
import Message from '@/lib/models/Message';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    if (!process.env.MONGODB_URI) {
      return NextResponse.json(
        { error: 'Contact form is not configured. Please set MONGODB_URI environment variable.' },
        { status: 503 }
      );
    }

    await connectDB();
    
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    const newMessage = await Message.create({
      name,
      email,
      subject,
      message
    });

    return NextResponse.json(
      { message: 'Message sent successfully', id: newMessage._id },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating message:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    if (!process.env.MONGODB_URI) {
      return NextResponse.json(
        { error: 'Database not configured' },
        { status: 503 }
      );
    }

    await connectDB();
    
    const messages = await Message.find().sort({ createdAt: -1 });
    
    return NextResponse.json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    return NextResponse.json(
      { error: 'Failed to fetch messages' },
      { status: 500 }
    );
  }
}