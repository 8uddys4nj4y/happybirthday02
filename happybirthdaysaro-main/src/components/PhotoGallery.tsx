import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Heart, Star, Flower } from 'lucide-react';

const PhotoGallery = () => {
  const [photos] = useState([
    '/lovable-uploads/215b9958-a861-49f7-8144-03791111725c.png',
    '/lovable-uploads/8a7fbb37-4ef3-4515-986f-4867bb2e7f19.png',
    '/lovable-uploads/807e03f2-ef91-46bc-abf8-0b02c49979fa.png',
    '/lovable-uploads/76f6ccc7-c8cc-4671-8ec5-0d9cd8ceb70c.png'
  ]);

  const quotes = [
    "Life is beautiful when we celebrate the moments that matter most 💕",
    "Every memory is a treasure that shines brighter with time ✨",
    "Sisters are the flowers in the garden of life 🌸",
    "The best birthdays are filled with love, laughter, and endless joy 🎉"
  ];

  const frames = [
    { component: Heart, color: 'text-pink-400', fill: true },
    { component: Star, color: 'text-yellow-400', fill: true },
    { component: Flower, color: 'text-purple-400', fill: false },
    { component: Heart, color: 'text-red-400', fill: true }
  ];

  return (
    <div className="py-20 px-4 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gradient mb-4">
          My Beautiful Memories 📸
        </h2>
        <p className="text-xl text-center text-muted-foreground handwriting mb-6">
          Celebrating all the wonderful moments
        </p>
        <h4 className="text-xl text-center text-muted-foreground handwriting mb-2">
          Click on the photos!
        </h4>

        <div className="space-y-8">
          {photos.map((photo, index) => {
            const Frame = frames[index % frames.length];
            return (
              <Card key={index} className="relative p-6 bg-white/80 backdrop-blur-sm border-2 border-pink-200 hover:scale-[1.02] transition-transform duration-300">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  {/* Photo Section */}
                  <div className="relative flex-shrink-0">
                    <div className="absolute -top-3 -right-3 z-10">
                      <Frame.component 
                        size={24} 
                        className={Frame.color}
                        fill={Frame.fill ? "currentColor" : "none"}
                      />
                    </div>
                    
                    <div className="absolute -top-2 -left-2 text-yellow-300 animate-pulse">
                      ✨
                    </div>
                    <div className="absolute -bottom-2 -right-2 text-pink-300 animate-bounce">
                      💖
                    </div>

                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="relative overflow-hidden rounded-lg border-4 border-white shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300">
                          <img
                            src={photo}
                            alt={`Memory ${index + 1}`}
                            className="w-80 h-80 object-cover hover:scale-110 transition-transform duration-500"
                          />
                          
                          <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute top-2 left-2 text-white text-sm animate-pulse">✨</div>
                            <div className="absolute top-2 right-2 text-white text-sm animate-pulse" style={{animationDelay: '0.5s'}}>⭐</div>
                            <div className="absolute bottom-2 left-2 text-white text-sm animate-pulse" style={{animationDelay: '1s'}}>💫</div>
                            <div className="absolute bottom-2 right-2 text-white text-sm animate-pulse" style={{animationDelay: '1.5s'}}>🌟</div>
                          </div>
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[90vh] p-0 bg-black/90 border-none">
                        <div className="relative flex items-center justify-center p-4">
                          <img
                            src={photo}
                            alt={`Memory ${index + 1} - Full Size`}
                            className="max-w-full max-h-[80vh] object-contain rounded-lg"
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>

                  {/* Quote Section */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="relative">
                      <div className="handwriting text-2xl md:text-3xl text-purple-600 leading-relaxed">
                        "{quotes[index]}"
                      </div>
                      <div className="mt-4 flex justify-center md:justify-start gap-2">
                        {[...Array(3)].map((_, i) => (
                          <Heart
                            key={i}
                            className="text-pink-400 animate-pulse"
                            size={16}
                            style={{
                              animationDelay: `${i * 0.3}s`
                            }}
                            fill="currentColor"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="relative mt-8">
          <div className="absolute top-0 left-1/4 text-2xl animate-bounce" style={{animationDelay: '0s'}}>
            🦋
          </div>
          <div className="absolute top-0 right-1/4 text-2xl animate-bounce" style={{animationDelay: '1s'}}>
            🦋
          </div>
          <div className="absolute top-0 left-3/4 text-2xl animate-bounce" style={{animationDelay: '2s'}}>
            🦋
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
