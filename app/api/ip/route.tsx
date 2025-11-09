// app/api/ip/route.ts
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  // 🔍 DAPATKAN IP DARI HEADERS (NextRequest tidak punya .ip)
  const forwardedFor = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  
  const ip = forwardedFor?.split(',')[0] || 
             realIP || 
             'Unknown';

  return Response.json({ 
    ip: ip,
    headers: {
      'x-forwarded-for': forwardedFor,
      'x-real-ip': realIP
    }
  });
}