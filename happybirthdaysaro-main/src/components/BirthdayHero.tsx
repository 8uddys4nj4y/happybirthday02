
import { useState, useEffect } from 'react';
import { Heart, Star } from 'lucide-react';

const BirthdayHero = () => {
  const [balloons, setBalloons] = useState<Array<{id: number, color: string, delay: number}>>([]);
  const [confetti, setConfetti] = useState<Array<{id: number, color: string, left: number, delay: number}>>([]);

  useEffect(() => {
    // Generate floating balloons
    const balloonColors = ['hsl(340, 82%, 75%)', 'hsl(280, 70%, 80%)', 'hsl(45, 93%, 75%)', 'hsl(260, 50%, 85%)'];
    const newBalloons = Array.from({length: 8}, (_, i) => ({
      id: i,
      color: balloonColors[i % balloonColors.length],
      delay: i * 0.5
    }));
    setBalloons(newBalloons);

    // Generate confetti
    const confettiColors = ['hsl(340, 82%, 75%)', 'hsl(280, 70%, 80%)', 'hsl(45, 93%, 75%)'];
    const newConfetti = Array.from({length: 15}, (_, i) => ({
      id: i,
      color: confettiColors[i % confettiColors.length],
      left: Math.random() * 100,
      delay: Math.random() * 3
    }));
    setConfetti(newConfetti);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-birthday">
      {/* Floating Balloons */}
      {balloons.map((balloon) => (
        <div
          key={balloon.id}
          className="absolute balloon-float"
          style={{
            left: `${Math.random() * 90}%`,
            top: `${20 + Math.random() * 60}%`,
            animationDelay: `${balloon.delay}s`,
            color: balloon.color,
            fontSize: '3rem'
          }}
        >
          🎈
        </div>
      ))}

      {/* Falling Confetti */}
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute w-2 h-2 confetti-fall"
          style={{
            left: `${piece.left}%`,
            backgroundColor: piece.color,
            animationDelay: `${piece.delay}s`,
            borderRadius: '2px'
          }}
        />
      ))}

      {/* Main Hero Content */}
      <div className="text-center z-10 px-4">
        <div className="mb-8">
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-4 sparkle">
            Happy Birthday! Saro
          </h1>
          <div className="text-6xl md:text-8xl mb-4">
            🎉🎂💖
          </div>
          <p className="text-xl md:text-2xl text-white/90 handwriting">
            Today is all about celebrating you!
          </p>
        </div>

        {/* Floating Hearts */}
        <div className="flex justify-center gap-4 mb-8">
          {[...Array(5)].map((_, i) => (
            <Heart
              key={i}
              className="text-pink-300 animate-pulse"
              size={24}
              style={{
                animationDelay: `${i * 0.2}s`
              }}
              fill="currentColor"
            />
          ))}
        </div>

        {/* Sparkling Stars */}
        <div className="flex justify-center gap-2">
          {[...Array(7)].map((_, i) => (
            <Star
              key={i}
              className="text-yellow-300"
              size={16}
              style={{
                animation: `sparkle 1.5s infinite ${i * 0.3}s`
              }}
              fill="currentColor"
            />
          ))}
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 text-4xl animate-spin" style={{animationDuration: '10s'}}>
          ⭐
        </div>
        <div className="absolute top-20 right-10 text-3xl animate-bounce" style={{animationDelay: '1s'}}>
          🌟
        </div>
        <div className="absolute bottom-20 left-20 text-5xl animate-pulse" style={{animationDelay: '2s'}}>
          💫
        </div>
        <div className="absolute bottom-10 right-20 text-3xl animate-spin" style={{animationDuration: '8s'}}>
          ✨
        </div>
      </div>
    </div>
  );
};

export default BirthdayHero;
