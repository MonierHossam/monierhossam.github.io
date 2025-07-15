import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger, DialogClose, DialogTitle } from '@/components/ui/dialog';
import { Image, Video, X, Gamepad2, Puzzle, Globe, Code, ArrowLeft, ArrowRight } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

type MediaType = 'images' | 'videos' | 'all';
type MediaItem = {
  type: 'image' | 'video';
  url: string;
  thumbnail?: string;
};

type PortfolioItem = {
  id: string;
  title: string;
  category: string;
  type: 'image' | 'video';
  thumbnail: string;
  content: string;
  description: string;
  gallery: MediaItem[];
};

const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Pharaoh\'s Legacy',
    category: 'rpg',
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1563089145-599997674d42',
    content: 'https://images.unsplash.com/photo-1563089145-599997674d42',
    description: 'An immersive RPG set in ancient Egypt where players embark on a journey to restore balance to the kingdom.',
    gallery: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1563089145-599997674d42' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1608547222369-a23dbcdb8fec' },
      { type: 'video', url: 'https://player.vimeo.com/video/76979871?background=1', thumbnail: 'https://images.unsplash.com/photo-1568532304894-a5d3f9a4d9fb' }
    ]
  },
  {
    id: '2',
    title: 'Pyramid Builder',
    category: 'strategy',
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1590593162201-f67611a13f95',
    content: 'https://images.unsplash.com/photo-1590593162201-f67611a13f95',
    description: 'A strategy game where players manage resources and workers to construct the perfect pyramid.',
    gallery: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1590593162201-f67611a13f95' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1608483983631-fbbc2dba1841' },
      { type: 'video', url: 'https://player.vimeo.com/video/77944313?background=1', thumbnail: 'https://images.unsplash.com/photo-1629123422832-85d93b3c4ebe' }
    ]
  },
  {
    id: '3',
    title: 'Curse of the Mummy',
    category: 'adventure',
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1608547222369-a23dbcdb8fec',
    content: 'https://images.unsplash.com/photo-1608547222369-a23dbcdb8fec',
    description: 'A thrilling adventure game where players solve puzzles to break an ancient curse.',
    gallery: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1608547222369-a23dbcdb8fec' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1563089145-599997674d42' },
      { type: 'video', url: 'https://player.vimeo.com/video/76979871?background=1', thumbnail: 'https://images.unsplash.com/photo-1568532304894-a5d3f9a4d9fb' }
    ]
  },
  {
    id: '4',
    title: 'Nile Racer',
    category: 'arcade',
    type: 'video',
    thumbnail: 'https://images.unsplash.com/photo-1568532304894-a5d3f9a4d9fb',
    content: 'https://player.vimeo.com/video/76979871?background=1',
    description: 'A fast-paced arcade game racing down the Nile River, avoiding obstacles and collecting ancient artifacts.',
    gallery: [
      { type: 'video', url: 'https://player.vimeo.com/video/76979871?background=1', thumbnail: 'https://images.unsplash.com/photo-1568532304894-a5d3f9a4d9fb' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1590593162201-f67611a13f95' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1608483983631-fbbc2dba1841' }
    ]
  },
  {
    id: '5',
    title: 'Gods of Egypt',
    category: 'rpg',
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1608483983631-fbbc2dba1841',
    content: 'https://images.unsplash.com/photo-1608483983631-fbbc2dba1841',
    description: 'A role-playing game where players take on the powers of Egyptian deities to battle mythological creatures.',
    gallery: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1608483983631-fbbc2dba1841' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1608547222369-a23dbcdb8fec' },
      { type: 'video', url: 'https://player.vimeo.com/video/77944313?background=1', thumbnail: 'https://images.unsplash.com/photo-1629123422832-85d93b3c4ebe' }
    ]
  },
  {
    id: '6',
    title: 'Temple Explorer',
    category: 'adventure',
    type: 'video',
    thumbnail: 'https://images.unsplash.com/photo-1629123422832-85d93b3c4ebe',
    content: 'https://player.vimeo.com/video/77944313?background=1',
    description: 'An adventure game that takes players through the mysteries of ancient Egyptian temples.',
    gallery: [
      { type: 'video', url: 'https://player.vimeo.com/video/77944313?background=1', thumbnail: 'https://images.unsplash.com/photo-1629123422832-85d93b3c4ebe' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1608483983631-fbbc2dba1841' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1563089145-599997674d42' }
    ]
  }
];

const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [mediaFilter, setMediaFilter] = useState<MediaType>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [selectedMediaIndex, setSelectedMediaIndex] = useState<number>(0);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  
  const filteredItems = portfolioItems.filter(item => {
    const categoryMatch = activeTab === 'all' || item.category === activeTab;
    const typeMatch = mediaFilter === 'all' || 
      (mediaFilter === 'images' && item.type === 'image') || 
      (mediaFilter === 'videos' && item.type === 'video');
    
    return categoryMatch && typeMatch;
  });

  const handleMediaSelect = (item: PortfolioItem, index: number) => {
    setSelectedItem(item);
    setSelectedMediaIndex(index);
  };

  const handleCarouselChange = (api: any) => {
    if (!api) return;
    setCurrentSlide(api.selectedScrollSnap());
  };
  
  return (
    <section id="portfolio" className="py-20 bg-primary/5 hieroglyph-pattern">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 opacity-0 animate-fade-in">
            Game <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto opacity-0 animate-fade-in animate-delay-100">
            Explore my collection of games inspired by ancient Egyptian mythology and history,
            featuring immersive worlds, engaging gameplay, and stunning visuals.
          </p>
        </div>
        
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <Tabs defaultValue="all" className="w-full sm:w-auto" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-3 sm:grid-cols-5 w-full sm:w-auto">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="rpg">RPG</TabsTrigger>
              <TabsTrigger value="strategy">Strategy</TabsTrigger>
              <TabsTrigger value="adventure">Adventure</TabsTrigger>
              <TabsTrigger value="arcade">Arcade</TabsTrigger>
            </TabsList>
          </Tabs>
          
          <div className="flex items-center gap-2">
            <Button 
              variant={mediaFilter === 'all' ? 'default' : 'outline'} 
              size="sm" 
              onClick={() => setMediaFilter('all')}
              className="bg-primary hover:bg-primary/90"
            >
              All
            </Button>
            <Button 
              variant={mediaFilter === 'images' ? 'default' : 'outline'} 
              size="sm" 
              onClick={() => setMediaFilter('images')}
              className={mediaFilter === 'images' ? "bg-primary hover:bg-primary/90" : ""}
            >
              <Image size={16} className="mr-1" /> Screenshots
            </Button>
            <Button 
              variant={mediaFilter === 'videos' ? 'default' : 'outline'} 
              size="sm" 
              onClick={() => setMediaFilter('videos')}
              className={mediaFilter === 'videos' ? "bg-primary hover:bg-primary/90" : ""}
            >
              <Video size={16} className="mr-1" /> Gameplay
            </Button>
          </div>
        </div>
        
        {/* Auto-playing Main Project Carousel */}
        <div className="mb-12">
          <Card className="border-2 border-primary/20 rounded-lg overflow-hidden shadow-lg">
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              setApi={(api) => {
                api?.on('select', () => handleCarouselChange(api));
              }}
              autoPlay={true}
              autoPlayInterval={5000}
              className="w-full"
            >
              <CarouselContent>
                {filteredItems.map((item) => (
                  <CarouselItem key={item.id} className="basis-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                      {/* Media Showcase */}
                      <div className="relative h-[40vh] lg:h-[70vh]">
                        {item.type === 'image' ? (
                          <img 
                            src={item.content} 
                            alt={item.title} 
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <iframe
                            src={item.content}
                            allow="autoplay; fullscreen; picture-in-picture"
                            className="w-full h-full"
                            title={item.title}
                          ></iframe>
                        )}
                        <div className="absolute top-4 right-4 z-10">
                          <span className="inline-block px-3 py-1 rounded-full bg-primary/80 text-white text-xs">
                            {item.category}
                          </span>
                        </div>
                      </div>
                      
                      {/* Project Info */}
                      <div className="p-8 bg-white dark:bg-gray-800 flex flex-col justify-between">
                        <div>
                          <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                          <p className="text-gray-700 dark:text-gray-300 mb-6">{item.description}</p>
                          
                          {/* Gallery Preview */}
                          <div className="mb-6">
                            <h4 className="text-lg font-semibold mb-3">Gallery</h4>
                            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
                              {item.gallery.map((media, idx) => (
                                <div 
                                  key={idx}
                                  className="flex-shrink-0 cursor-pointer w-20 h-20 rounded overflow-hidden border-2 border-transparent hover:border-primary/50 transition"
                                  onClick={() => handleMediaSelect(item, idx)}
                                >
                                  {media.type === 'image' ? (
                                    <img 
                                      src={media.url}
                                      alt={`${item.title} preview ${idx}`}
                                      className="w-full h-full object-cover"
                                    />
                                  ) : (
                                    <div className="relative w-full h-full">
                                      <img 
                                        src={media.thumbnail || item.thumbnail}
                                        alt={`${item.title} video ${idx}`}
                                        className="w-full h-full object-cover"
                                      />
                                      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                                        <Video size={20} className="text-white" />
                                      </div>
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        {/* Dialog to view selected media */}
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button className="w-full">View Details</Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl p-0 overflow-hidden">
                            <DialogTitle className="sr-only">{item.title}</DialogTitle>
                            <div className="relative">
                              <DialogClose className="absolute top-2 right-2 z-10 bg-black/40 p-1 rounded-full text-white hover:bg-black/60 transition-colors">
                                <X size={20} />
                              </DialogClose>
                              
                              {/* Main Content Display */}
                              <div className="w-full aspect-video relative">
                                {selectedItem === item && selectedItem.gallery[selectedMediaIndex].type === 'image' ? (
                                  <img 
                                    src={selectedItem.gallery[selectedMediaIndex].url} 
                                    alt={selectedItem.title} 
                                    className="w-full h-full object-cover"
                                  />
                                ) : selectedItem === item && selectedItem.gallery[selectedMediaIndex].type === 'video' ? (
                                  <iframe
                                    src={selectedItem.gallery[selectedMediaIndex].url}
                                    allow="autoplay; fullscreen; picture-in-picture"
                                    className="w-full h-full"
                                    title={`${selectedItem.title} video`}
                                  ></iframe>
                                ) : item.type === 'image' ? (
                                  <img 
                                    src={item.content} 
                                    alt={item.title} 
                                    className="w-full h-full object-cover"
                                  />
                                ) : (
                                  <iframe
                                    src={item.content}
                                    allow="autoplay; fullscreen; picture-in-picture"
                                    className="w-full h-full"
                                    title={item.title}
                                  ></iframe>
                                )}
                                
                                {/* Navigation arrows */}
                                {selectedItem === item && (
                                  <>
                                    <Button 
                                      variant="outline" 
                                      size="icon" 
                                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white hover:bg-black/60 border-none"
                                      onClick={() => {
                                        const newIndex = selectedMediaIndex > 0 ? 
                                          selectedMediaIndex - 1 : 
                                          item.gallery.length - 1;
                                        setSelectedMediaIndex(newIndex);
                                      }}
                                    >
                                      <ArrowLeft size={16} />
                                    </Button>
                                    <Button 
                                      variant="outline" 
                                      size="icon" 
                                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white hover:bg-black/60 border-none"
                                      onClick={() => {
                                        const newIndex = (selectedMediaIndex + 1) % item.gallery.length;
                                        setSelectedMediaIndex(newIndex);
                                      }}
                                    >
                                      <ArrowRight size={16} />
                                    </Button>
                                  </>
                                )}
                              </div>
                            </div>
                            
                            <div className="p-6">
                              <div className="flex justify-between items-center mb-4">
                                <h3 className="text-2xl font-bold">{item.title}</h3>
                                <div className="flex items-center gap-2">
                                  <span className="px-3 py-1 rounded-full bg-secondary text-primary text-sm">
                                    {item.category}
                                  </span>
                                </div>
                              </div>
                              
                              <p className="text-gray-700 mb-6">{item.description}</p>
                              
                              <Collapsible>
                                <CollapsibleTrigger asChild>
                                  <Button variant="outline" className="w-full mb-4">
                                    View Gallery ({item.gallery.length} items)
                                  </Button>
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                  <ScrollArea className="h-32 rounded-md border p-4">
                                    <div className="flex gap-2 pb-3">
                                      {item.gallery.map((media, idx) => (
                                        <div 
                                          key={idx} 
                                          className={`cursor-pointer h-24 w-32 relative rounded overflow-hidden ${
                                            selectedItem === item && selectedMediaIndex === idx ? 'ring-2 ring-primary' : ''
                                          }`}
                                          onClick={() => handleMediaSelect(item, idx)}
                                        >
                                          {media.type === 'image' ? (
                                            <img 
                                              src={media.url} 
                                              alt={`${item.title} ${idx + 1}`} 
                                              className="h-full w-full object-cover"
                                            />
                                          ) : (
                                            <>
                                              <img 
                                                src={media.thumbnail || item.thumbnail} 
                                                alt={`${item.title} video ${idx + 1}`} 
                                                className="h-full w-full object-cover"
                                              />
                                              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                                                <Video size={24} className="text-white" />
                                              </div>
                                            </>
                                          )}
                                        </div>
                                      ))}
                                    </div>
                                  </ScrollArea>
                                </CollapsibleContent>
                              </Collapsible>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-1">
                {filteredItems.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                      currentSlide === index ? 'bg-primary' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <div className="hidden md:block">
                <CarouselPrevious className="-left-6" />
                <CarouselNext className="-right-6" />
              </div>
            </Carousel>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
