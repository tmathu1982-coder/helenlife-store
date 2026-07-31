import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const fileToken = searchParams.get('token');

  if (!fileToken) return new NextResponse("Thiếu mã hình ảnh", { status: 400 });

  try {
    // 1. Xin chìa khóa từ Lark
    const tokenRes = await fetch("https://open.larksuite.com/open-apis/auth/v3/tenant_access_token/internal", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        app_id: process.env.LARK_APP_ID,
        app_secret: process.env.LARK_APP_SECRET,
      }),
      cache: "no-store" 
    });
    const tokenData = await tokenRes.json();
    const token = tokenData.tenant_access_token;

    // 2. Dùng chìa khóa tải ảnh về Trạm trung chuyển
    const imageRes = await fetch(`https://open.larksuite.com/open-apis/drive/v1/medias/${fileToken}/download`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const buffer = await imageRes.arrayBuffer();
    
    // 3. Chuyển ảnh ra ngoài cho Website hiển thị (Lưu tạm 1 ngày để web chạy siêu tốc)
    return new NextResponse(buffer, {
      headers: {
        'Content-Type': imageRes.headers.get('Content-Type') || 'image/jpeg',
        'Cache-Control': 'public, max-age=86400', 
      },
    });
  } catch (error) {
    return new NextResponse("Lỗi tải ảnh", { status: 500 });
  }
}