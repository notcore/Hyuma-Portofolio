// app/api/sendPhoto/route.ts
import { NextRequest, NextResponse } from 'next/server';
import FormData from 'form-data';
import fetch from 'node-fetch';

// ✅ INTERFACE UNTUK IPAPI RESPONSE
interface IPApiResponse {
  ip: string;
  city: string;
  region: string;
  country_name: string;
  org: string;
  error?: boolean;
}

// ✅ INTERFACE UNTUK TELEGRAM RESPONSE
interface TelegramResponse {
  ok: boolean;
  result?: {
    message_id: number;
    chat: {
      id: number;
    };
  };
  error_code?: number;
  description?: string;
}

export async function POST(req: NextRequest) {
  try {
    const { image, jumlah, source, timestamp } = await req.json();
    if (!image) return NextResponse.json({ error: 'No image provided' }, { status: 400 });

    // 🔍 DAPATKAN IP USER DARI HEADERS
    const forwardedFor = req.headers.get('x-forwarded-for');
    const realIP = req.headers.get('x-real-ip');
    const vercelIP = req.headers.get('x-vercel-forwarded-for');
    
    const userIP = forwardedFor?.split(',')[0] || 
                  realIP || 
                  vercelIP || 
                  'Unknown';

    const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.CHAT_ID;
    if (!TOKEN || !CHAT_ID) return NextResponse.json({ error: 'Bot token or chat ID not set' }, { status: 500 });

    // 🗺️ DAPATKAN INFO LOKASI DARI IP
    let locationInfo = 'Lokasi tidak dapat dideteksi';

    if (userIP !== 'Unknown' && userIP !== '::1' && userIP !== '127.0.0.1') {
      try {
        const ipResponse = await fetch(`http://ipapi.co/${userIP}/json/`);
        const ipData = await ipResponse.json() as IPApiResponse;
        
        if (ipData && !ipData.error) {
          locationInfo = `${ipData.city || ''}, ${ipData.region || ''}, ${ipData.country_name || ''}`;
          if (ipData.org) locationInfo += ` | ${ipData.org}`;
        }
      } catch (geoError) {
        console.log('Geolocation failed, using IP only');
        locationInfo = `IP: ${userIP} (Lokasi tidak tersedia)`;
      }
    } else {
      locationInfo = 'Localhost Development';
    }

    // 📝 PESAN LENGKAP DENGAN LOKASI
    const caption = `💳 TRANSAKSI JUAL BARANG\n\n` +
                   `💰 Jumlah: ${jumlah || 'Belum diisi'}\n` +
                   `👤 IP Pembeli: ${userIP}\n` +
                   `📍 Lokasi: ${locationInfo}\n` +
                   `📱 Metode Upload: ${source === 'camera_capture' ? 'Scan Kamera' : 'Upload File'}\n` +
                   `🕐 Waktu: ${timestamp ? new Date(timestamp).toLocaleString('id-ID') : new Date().toLocaleString('id-ID')}\n\n` +
                   `🔒 Sistem Transparansi - Trackable IP & Location`;

    const base64Data = image.replace(/^data:image\/\w+;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');

    const form = new FormData();
    form.append('chat_id', CHAT_ID);
    form.append('photo', buffer, { filename: 'bukti_pembayaran.jpg', contentType: 'image/jpeg' });
    form.append('caption', caption);

    const response = await fetch(`https://api.telegram.org/bot${TOKEN}/sendPhoto`, {
      method: 'POST',
      body: form as any,
    });

    // ✅ GUNAKAN TYPE ASSERTION UNTUK TELEGRAM RESPONSE
    const data = await response.json() as TelegramResponse;
    
    // ✅ SEKARANG data.ok AMAN DIAKSES
    if (data.ok) {
      console.log('✅ Transaksi tercatat:', { ip: userIP, location: locationInfo });
    } else {
      console.error('❌ Telegram API error:', data.description);
    }

    return NextResponse.json(data);
  } catch (err: any) {
    console.error('SendPhoto Error:', err.message);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}