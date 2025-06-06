import { Card } from '@/components/ui/card';
import { Heart } from 'lucide-react';

const PersonalMessage = () => {
  return (
    <div className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-8">
          A Special Message for Sarojini 💌
        </h2>

        <Card className="p-8 md:p-12 bg-white/90 backdrop-blur-sm border-2 border-pink-200 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-4 left-4 text-pink-300 animate-pulse">
            💖
          </div>
          <div className="absolute top-4 right-4 text-purple-300 animate-pulse" style={{animationDelay: '0.5s'}}>
            💕
          </div>
          <div className="absolute bottom-4 left-4 text-yellow-300 animate-pulse" style={{animationDelay: '1s'}}>
            ✨
          </div>
          <div className="absolute bottom-4 right-4 text-pink-300 animate-pulse" style={{animationDelay: '1.5s'}}>
            🌟
          </div>

          {/* Main message */}
          <div className="relative z-10">
            <div className="handwriting text-2xl md:text-3xl text-purple-600 leading-relaxed">
              <p className="mb-6">
                "Dear Sarojini,
              </p>
              <p className="mb-6">
                You are not just my sister, you're my sunshine, my support, and my joy.
              </p>
              <p className="mb-6">
                Wishing you a birthday full of magic and love! 💕
              </p>
              <p className="text-right">
                – With Love, 8uddys4nj4y
              </p>
            </div>

            {/* Heart decorations */}
            <div className="flex justify-center gap-2 mt-8">
              {[...Array(5)].map((_, i) => (
                <Heart
                  key={i}
                  className="text-pink-400 animate-pulse"
                  size={20}
                  style={{
                    animationDelay: `${i * 0.2}s`
                  }}
                  fill="currentColor"
                />
              ))}
            </div>

            {/* Floating elements */}
            <div className="mt-8 text-4xl">
              🎀💖🎀
            </div>
          </div>

          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ff69b4' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '40px 40px'
            }} />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PersonalMessage;
