import { Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-[20px] bg-[#2D6A4F] flex items-center justify-center">
                <span className="text-2xl">🐸</span>
              </div>
              <span className="text-2xl font-bold text-white tracking-tight" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                Croak
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Smart water quality monitoring for homes. Track changes, view status updates, and stay informed from your phone.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#2D6A4F] flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#2D6A4F] flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#2D6A4F] flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4" style={{ fontFamily: 'Plus Jakarta Sans' }}>Product</h4>
            <ul className="space-y-3">
              <li><a href="#product" className="hover:text-[#2D6A4F] transition-colors">Product</a></li>
              <li><a href="#features" className="hover:text-[#2D6A4F] transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-[#2D6A4F] transition-colors">How It Works</a></li>
              <li><a href="#faq" className="hover:text-[#2D6A4F] transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-[#2D6A4F] transition-colors">Buy Now</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4" style={{ fontFamily: 'Plus Jakarta Sans' }}>Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-[#2D6A4F] transition-colors">About</a></li>
              <li><a href="#" className="hover:text-[#2D6A4F] transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-[#2D6A4F] transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-[#2D6A4F] transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2026 Croak Technologies, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="hover:text-[#2D6A4F] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#2D6A4F] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#2D6A4F] transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}