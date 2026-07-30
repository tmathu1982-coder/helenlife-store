import Image from "next/image";
import { ShoppingCart, Leaf } from "lucide-react";

export default function Home() {
  // DỮ LIỆU MẪU: Sau này hàm Fetch API sẽ tự động lấy dữ liệu từ Lark đổ vào đây
  const products = [
    {
      id: "p1",
      name: "Phân Gà Hữu Cơ Helen Life",
      price: "250.000đ",
      image: "/products/phan-ga-helen.png", // Trò nhớ bỏ ảnh vào thư mục public/products/ nhé
      description: "Dạng bột, bao 50kg. Cải tạo đất, ra rễ mạnh, dinh dưỡng tự nhiên.",
      shopeeLink: "https://shopee.vn/link-phan-ga-helen-life", // Link Shopee thực tế
    },
    {
      id: "p2",
      name: "Dịch Trùn Quế Cao Cấp",
      price: "1.200.000đ",
      image: "/products/dich-trun-que.png", 
      description: "Can 30 Lít. Kích thích ra rễ, phục hồi cây suy, xanh lá dày cành.",
      shopeeLink: "https://shopee.vn/link-dich-trun-que",
    },
    {
      id: "p3",
      name: "Hữu Cơ Phước Thắng Số 1",
      price: "330.000đ",
      image: "/products/phuoc-thang-1.png", 
      description: "Bao 50kg. Dòng Super, cung cấp hệ vi sinh vật có ích dồi dào.",
      shopeeLink: "https://shopee.vn/link-phuoc-thang",
    }
  ];

  return (
    <main className="min-h-screen bg-green-50/30 py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TIÊU ĐỀ TRANG CỬA HÀNG */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-bold mb-4">
            <Leaf size={16} />
            <span>Gian Hàng Chính Hãng</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-green-900 mb-4">Cửa Hàng Helen Life</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Đặt hàng tiện lợi, giao nhận nhanh chóng và an toàn tuyệt đối qua hệ thống đối tác Shopee.
          </p>
        </header>

        {/* LƯỚI SẢN PHẨM (MÔ HÌNH E-COMMERCE) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item) => (
            <div key={item.id} className="bg-white rounded-3xl shadow-sm border border-green-100 overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col">
              
              {/* Vùng Ảnh Sản Phẩm */}
              <div className="relative w-full h-72 bg-white flex items-center justify-center p-6 border-b border-gray-50">
                 {/* Trò đổi src ảnh bên trên cho đúng tên file là ảnh sẽ hiện ra cực đẹp */}
                 <div className="text-6xl opacity-20 group-hover:scale-110 transition-transform duration-500">🌱</div>
                 {/* <Image src={item.image} alt={item.name} fill className="object-contain p-6 group-hover:scale-105 transition-transform duration-500" /> */}
              </div>

              {/* Vùng Thông tin & Giá */}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-black text-green-900 mb-2 line-clamp-2">{item.name}</h3>
                <p className="text-sm text-gray-600 mb-4 flex-grow">{item.description}</p>
                <div className="text-2xl font-black text-[#EE4D2D] mb-6">
                  {item.price}
                </div>
                
                {/* NÚT SHOPEE THẦN THÁNH */}
                <a 
                  href={item.shopeeLink}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#EE4D2D] text-white py-3.5 rounded-xl font-bold hover:bg-[#d74224] hover:shadow-md transition-all active:scale-95"
                >
                  <ShoppingCart size={20} />
                  Mua ngay trên Shopee
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </main>
  );
}