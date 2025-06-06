import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Heart, Star, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

interface Wish {
  id: number;
  name: string;
  message: string;
  timestamp: Date;
}

const MemoryCorner = () => {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [newWish, setNewWish] = useState({ name: '', message: '' });

  const addWish = () => {
    if (!newWish.name.trim() || !newWish.message.trim()) {
      toast("Please fill in both name and message! 💌");
      return;
    }

    const wish: Wish = {
      id: Date.now(),
      name: newWish.name.trim(),
      message: newWish.message.trim(),
      timestamp: new Date()
    };

    setWishes([wish, ...wishes]);
    setNewWish({ name: '', message: '' });
    toast("Birthday wish for Sarojini added! 🎉");
  };

  return (
    <div className="py-20 px-4 bg-gradient-to-br from-yellow-50 to-pink-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gradient mb-4">
          My Memory Notes 💌
        </h2>
        <p className="text-xl text-center text-muted-foreground handwriting mb-12">
          Birthday wishes from friends and family
        </p>

        {/* Add New Wish */}
        <Card className="p-6 mb-8 bg-white/90 backdrop-blur-sm border-2 border-pink-200">
          <h3 className="text-2xl font-semibold text-purple-600 mb-4 flex items-center gap-2">
            <MessageCircle className="text-pink-500" />
            Leave a Birthday Wish for Sarojini
          </h3>
          
          <div className="space-y-4">
            <Input
              placeholder="Your name"
              value={newWish.name}
              onChange={(e) => setNewWish(prev => ({ ...prev, name: e.target.value }))}
              className="border-pink-200 focus:border-pink-400"
            />
            
            <Textarea
              placeholder="Write your birthday message here..."
              value={newWish.message}
              onChange={(e) => setNewWish(prev => ({ ...prev, message: e.target.value }))}
              className="border-pink-200 focus:border-pink-400 min-h-[100px]"
            />
            
            <Button
              onClick={addWish}
              className="bg-pink-500 hover:bg-pink-600 text-white w-full md:w-auto"
            >
              Add Wish 💕
            </Button>
          </div>
        </Card>

        {/* Wishes Display */}
        <div className="space-y-6">
          {wishes.map((wish, index) => (
            <Card
              key={wish.id}
              className="p-6 bg-white/80 backdrop-blur-sm border-2 border-purple-200 hover:scale-105 transition-transform duration-300 relative"
            >
              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 text-yellow-400 animate-pulse">
                ✨
              </div>
              <div className="absolute -bottom-2 -left-2 text-pink-400 animate-bounce">
                💖
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {wish.name.charAt(0).toUpperCase()}
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-semibold text-purple-600 text-lg">
                      {wish.name}
                    </h4>
                    <Heart size={16} className="text-pink-400" fill="currentColor" />
                  </div>
                  
                  <p className="text-gray-700 handwriting text-lg leading-relaxed">
                    {wish.message}
                  </p>
                  
                  <div className="flex items-center gap-1 mt-3 text-sm text-gray-500">
                    <Star size={14} className="text-yellow-400" fill="currentColor" />
                    <span>Birthday wish #{wishes.length - index}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Floating decorations */}
        <div className="relative mt-12 text-center">
          <div className="text-4xl space-x-4">
            <span className="inline-block animate-bounce">🎈</span>
            <span className="inline-block animate-bounce" style={{animationDelay: '0.2s'}}>🎉</span>
            <span className="inline-block animate-bounce" style={{animationDelay: '0.4s'}}>🎂</span>
            <span className="inline-block animate-bounce" style={{animationDelay: '0.6s'}}>🎁</span>
            <span className="inline-block animate-bounce" style={{animationDelay: '0.8s'}}>🎈</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoryCorner;
