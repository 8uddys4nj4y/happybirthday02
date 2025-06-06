import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Cake, Flame, PartyPopper } from 'lucide-react';
import { toast } from 'sonner';

const InteractiveCake = () => {
  const [candles, setCandles] = useState<Array<{id: number, lit: boolean, color: string}>>([
    { id: 1, lit: false, color: '#ff6b9d' },
    { id: 2, lit: false, color: '#c44569' },
    { id: 3, lit: false, color: '#f8b500' },
    { id: 4, lit: false, color: '#ff9ff3' },
    { id: 5, lit: false, color: '#54a0ff' }
  ]);
  const [cakeCut, setCakeCut] = useState(false);
  const [showSurprise, setShowSurprise] = useState(false);

  const lightCandles = () => {
    setCandles(candles.map(candle => ({ ...candle, lit: true })));
    toast("All candles are lit! ✨");
  };

  const blowCandles = () => {
    if (!candles.some(candle => candle.lit)) {
      toast("Light the candles first! 🔥");
      return;
    }
    
    setCandles(candles.map(candle => ({ ...candle, lit: false })));
    toast("🌬️ Whoosh! Make a wish, Sarojini!");
  };

  const cutCake = () => {
    if (candles.some(candle => candle.lit)) {
      toast("Blow out the candles first! 🌬️");
      return;
    }
    
    setCakeCut(true);
    setShowSurprise(true);
    toast("🎉 Happy Birthday Sarojini! Enjoy your slice!");
  };

  const resetCake = () => {
    setCandles([
      { id: 1, lit: false, color: '#ff6b9d' },
      { id: 2, lit: false, color: '#c44569' },
      { id: 3, lit: false, color: '#f8b500' },
      { id: 4, lit: false, color: '#ff9ff3' },
      { id: 5, lit: false, color: '#54a0ff' }
    ]);
    setCakeCut(false);
    setShowSurprise(false);
    toast("Fresh cake ready! 🎂");
  };

  return (
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-8">
          Lot's of joy come real 🎂
        </h2>
        
        <Card className="p-8 bg-white/90 backdrop-blur-sm border-2 border-pink-200">
          {/* Cake Display */}
          <div className="relative mb-8">
            <div className="text-9xl mb-4 relative">
              {cakeCut ? '🍰' : '🎂'}
              
              {/* Candles */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex gap-1">
                {candles.map((candle, index) => (
                  <div
                    key={candle.id}
                    className="relative"
                    style={{
                      transform: `translateX(${(index - candles.length / 2) * 8}px) translateY(10px)`
                    }}
                  >
                    {/* Candle */}
                    <div
                      className="w-1 h-6 rounded-full"
                      style={{ backgroundColor: candle.color }}
                    />
                    
                    {/* Flame */}
                    {candle.lit && (
                      <div
                        className="absolute -top-2 left-1/2 transform -translate-x-1/2"
                        style={{
                          animation: 'flame-flicker 0.5s infinite alternate'
                        }}
                      >
                        <Flame size={12} className="text-orange-400" fill="currentColor" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground">
              Candles: {candles.length} | Lit: {candles.filter(c => c.lit).length}
            </p>
          </div>

          {/* Control Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Button
              onClick={lightCandles}
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              Light Candles 🔥
            </Button>
            
            <Button
              onClick={blowCandles}
              className="bg-blue-500 hover:bg-blue-600 text-white"
              disabled={!candles.some(c => c.lit)}
            >
              Blow Candles 🌬️
            </Button>
            
            <Button
              onClick={cutCake}
              className="bg-purple-500 hover:bg-purple-600 text-white"
              disabled={cakeCut || candles.some(c => c.lit)}
            >
              Cut Cake 🔪
            </Button>
          </div>

          {/* Reset Button */}
          <Button
            onClick={resetCake}
            variant="outline"
            className="mb-4"
          >
            Reset Cake 🎂
          </Button>

          {/* Surprise Message */}
          {showSurprise && (
            <div className="mt-8 p-6 bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg border-2 border-pink-300 animate-scale-in">
              <div className="text-4xl mb-4">🎉🎀🎉</div>
              <h3 className="text-2xl font-bold text-pink-600 handwriting mb-2">
                You're the sweetest, Sarojini! 
              </h3>
              <p className="text-xl text-purple-600 handwriting">
                Happy Birthday! 🎂💖
              </p>
              <div className="mt-4">
                <PartyPopper className="inline-block text-yellow-500 animate-bounce mx-2" />
                <PartyPopper className="inline-block text-pink-500 animate-bounce mx-2" style={{animationDelay: '0.1s'}} />
                <PartyPopper className="inline-block text-purple-500 animate-bounce mx-2" style={{animationDelay: '0.2s'}} />
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default InteractiveCake;
