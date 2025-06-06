
import { Card } from '@/components/ui/card';
import { Instagram, Github, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <div className="py-16 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto text-center">
        <Card className="p-8 bg-white/90 backdrop-blur-sm border-2 border-pink-200 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-4 left-4 text-pink-300 animate-pulse">
            💻
          </div>
          <div className="absolute top-4 right-4 text-purple-300 animate-pulse" style={{animationDelay: '0.5s'}}>
            ✨
          </div>
          <div className="absolute bottom-4 left-4 text-yellow-300 animate-pulse" style={{animationDelay: '1s'}}>
            🌟
          </div>
          <div className="absolute bottom-4 right-4 text-pink-300 animate-pulse" style={{animationDelay: '1.5s'}}>
            💖
          </div>

          <div className="relative z-10">
            <div className="mb-6">
              <Globe className="mx-auto text-purple-600 mb-4" size={48} />
              <h3 className="text-2xl md:text-3xl font-bold text-gradient mb-4">
                Website Creator
              </h3>
              <p className="handwriting text-xl text-purple-600 mb-6">
                For custom website development, contact the following address:
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3 p-4 bg-pink-50 rounded-lg border border-pink-200">
                <Instagram className="text-pink-500" size={24} />
                <div className="text-left">
                  <p className="font-semibold text-gray-700">Instagram</p>
                  <a 
                    href="https://www.instagram.com/8uddys4nj4y/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-pink-600 hover:text-pink-700 transition-colors underline"
                  >
                    @8uddys4nj4y
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 p-4 bg-purple-50 rounded-lg border border-purple-200">
                <Github className="text-purple-600" size={24} />
                <div className="text-left">
                  <p className="font-semibold text-gray-700">GitHub</p>
                  <a 
                    href="https://github.com/8uddys4nj4y" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-700 transition-colors underline"
                  >
                    8uddys4nj4y
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 handwriting text-lg text-gray-600">
              💝 Made with love for special celebrations 💝
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Footer;
