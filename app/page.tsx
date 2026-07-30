import Image from "next/image";
import { Phone, MapPin, Mail, Leaf, ShoppingCart } from "lucide-react"; 

export default function Home() {
  const hotline = "0949294969"; 
  const hotlineDisplay = "0949.294.969";

  // DỮ LIỆU SẢN PHẨM & LINK SHOPEE ĐÃ ĐƯỢC CẬP NHẬT
  const products = [
    {
      id: "p1",
      name: "Phân Gà Hữu Cơ Helen Life",
      price: "Liên hệ", 
      image: "/products/phan-ga-helen.png", 
      description: "Quy cách: Bao 50kg. Bổ sung hữu cơ tự nhiên, cải tạo đất và tăng độ phì nhiêu.",
      shopeeLink: "https://shopee.vn/", 
    },
    {
      id: "p2",
      name: "Mật Rỉ Đường 73% Brix",
      price: "Liên hệ",
      image: "/products/matri.png", 
      description: "Quy cách: Can 5L. Cung cấp carbon giúp vi sinh phát triển mạnh, thúc đẩy ủ phân hữu cơ.",
      shopeeLink: "https://shopee.vn/",
    },
    {
      id: "p3",
      name: "Hữu Cơ Sinh Học Phước Thắng",
      price: "Liên hệ",
      image: "/products/phuoc-thang-1.png", 
      description: "Quy cách: Bao 50kg. Cung cấp hệ vi sinh vật có ích, ức chế mầm bệnh.",
      shopeeLink: "https://shopee.vn/",
    },
    {
      id: "p4",
      name: "Phân Kén Trùn Quế CF FARM",
      price: "Liên hệ",
      image: "/products/ken-trun-que.png", 
      description: "Quy cách: Bao 40kg. Cân bằng hệ vi sinh, hạn chế côn trùng gây hại.",
      shopeeLink: "https://shopee.vn/",
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans flex flex-col">
      
      {/* HEADER - LOGO HELEN LIFE */}
      <header className="bg-white text-green-900 sticky top-0 z-50 shadow-sm border-b-4 border-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <Image 
              src="/logo-helenlife.png" 
              alt="Helen Life Logo" 
              width={160} 
              height={50} 
              className="object-contain"
              priority
            />
          </div>

          <nav className="hidden md:flex gap-8 font-medium">
            <a href="#ve-chung-toi" className="hover:text-green-600 transition">Về Chúng Tôi</a>
            <a href="#san-pham" className="hover:text-green-600 transition">Sản Phẩm</a>
            <a href="#lien-he" className="hover:text-green-600 transition">Liên Hệ</a>
          </nav>
          
          <a href={`tel:${hotline}`} className="flex items-center gap-2 bg-green-700 text-white px-6 py-2.5 rounded-full font-bold hover:bg-green-800 transition shadow-sm">
            <Phone size={18} />
            {hotlineDisplay}
          </a>
        </div>
      </header>

      {/* HERO SECTION - TẦM NHÌN */}
      <section id="ve-chung-toi" className="bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-green-50 py-16 border-b-8 border-green-600">
        <div className="max-w-5xl mx-auto text-center px-4">
          <div className="inline-flex items-center gap-2 bg-white text-green-700 border border-green-700 px-6 py-2 rounded-full text-sm font-bold mb-6 shadow-sm">
            <Leaf size={16} />
            <span>Nông Nghiệp Xanh - Sạch - Bền Vững</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-green-800 mb-6 tracking-tighter drop-shadow-sm">
            HELEN LIFE
          </h1>
          <p className="text-xl text-gray-700 mb-4 leading-relaxed max-w-3xl mx-auto font-medium">
            Đồng hành cùng nhà nông bằng những giải pháp thực tiễn, sản phẩm chất lượng và dịch vụ tận tâm. 
          </p>
          <p className="text-2xl text-green-700 font-bold">
            "Dinh Dưỡng Xanh Cho Năng Suất Bền"
          </p>
        </div>
      </section>

      {/* SẢN PHẨM SECTION - GIAO DIỆN SHOPEE E-COMMERCE */}
      <section id="san-pham" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-black text-gray-900 mb-4">Gian Hàng Chính Hãng</h3>
          <p className="text-lg text-gray-600">Đặt hàng tiện lợi, giao nhận an toàn qua hệ thống đối tác Shopee.</p>
          <div className="w-24 h-1.5 bg-green-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-sm border border-green-100 overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col">
              
              <div className="relative w-full h-56 bg-gray-50 flex items-center justify-center p-4 border-b border-gray-100 overflow-hidden">
                 <Image 
                   src={item.image} 
                   alt={item.name} 
                   fill 
                   className="object-contain p-4 group-hover:scale-110 transition-transform duration-500" 
                 />
              </div>

              <div className="p-5 flex-grow flex flex-col">
                <h3 className="text-lg font-black text-green-900 mb-2 line-clamp-2 h-14">{item.name}</h3>
                <p className="text-sm text-gray-600 mb-4 flex-grow line-clamp-3">{item.description}</p>
                <div className="text-xl font-black text-[#EE4D2D] mb-4">
                  {item.price}
                </div>
                
                <a 
                  href={item.shopeeLink}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#EE4D2D] text-white py-2.5 rounded-xl font-bold hover:bg-[#d74224] hover:shadow-md transition-all active:scale-95"
                >
                  <ShoppingCart size={18} />
                  Mua qua Shopee
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER - THÔNG TIN DOANH NGHIỆP HELEN LIFE */}
      <footer id="lien-he" className="bg-gray-900 text-gray-300 py-10 border-t-8 border-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          
          <div className="space-y-4 text-center md:text-left md:w-1/2">
            <div className="bg-white p-2 rounded-xl inline-block">
              <Image src="/logo-helenlife.png" alt="Helen Life Logo" width={140} height={45} className="object-contain"/>
            </div>
            <div>
              <p className="text-gray-400 font-bold uppercase text-sm mb-1">Công Ty Cổ Phần Đầu Tư Helen Life</p>
              <div className="flex gap-2 justify-center md:justify-start">
                <p className="text-white bg-gray-800 inline-block px-2 py-0.5 rounded font-mono text-xs border border-gray-700">MST: 0319518283</p>
                <p className="text-gray-400 text-xs mt-1">Đại diện: NGUYỄN THỊ KIỀU TRANG</p>
              </div>
            </div>
          </div>

          <div className="space-y-4 md:pl-10 md:w-1/2 text-sm">
            <h4 className="text-base font-bold text-white border-b border-gray-700 pb-2 inline-block">Thông Tin Liên Hệ</h4>
            <div className="flex items-start gap-3 justify-center md:justify-start">
              <MapPin className="text-green-500 mt-0.5 flex-shrink-0" size={18}/>
              <p className="leading-relaxed">36 Đường D10, Khu phố 6, Phường Phước Long, TP Hồ Chí Minh, Việt Nam</p>
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <Mail className="text-green-500 flex-shrink-0" size={18}/>
              <p>info@helenlife.com.vn</p>
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-start mt-2">
              <Phone className="text-green-500 flex-shrink-0" size={18}/>
              <p className="text-xl font-bold text-white">{hotlineDisplay}</p>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 mt-8 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} CÔNG TY CP ĐẦU TƯ HELEN LIFE. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}