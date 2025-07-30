import React, { useState, useEffect } from 'react';
import projectsData from '../data/projects_json.json';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
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
type MediaItem =
  | {
      type: 'image';
      url: string;
      thumbnail?: string;
    }
  | {
      type: 'video';
      url: string;
      thumbnail?: string;
    }
  | {
      type: 'youtube';
      url: string;
      thumbnail: string;
      videoId: string;
    };

type ReviewObj = {
  review: string;
  date: string;
};

type PortfolioItem = {
  id: string;
  title: string;
  category?: string;
  type?: 'image' | 'video';
  thumbnail?: string;
  content?: string;
  description?: string;
  endDate?: string;
  gallery?: MediaItem[];
  reviews?: ReviewObj[];
  clientName?: string;
  rating?: number;
  tech?: string[];
  field?: string;
  link?: string;
};

type ProjectJson = {
  id?: number | string;
  title?: string;
  clientName?: string;
  review?: string;
  reviews?: { review: string; date: string }[];
  rating?: number;
  techStack?: string[];
  imgs?: string[];
  description?: string;
  endDate?: string;
  field?: string;
  link?: string | string[];
};

const portfolioItems: PortfolioItem[] = (projectsData.projects || []).map((proj: ProjectJson) => {
  let gallery: MediaItem[] = [];
  const isPersonal = !proj.clientName || proj.clientName.trim() === '';
  if (proj.imgs && Array.isArray(proj.imgs)) {
    gallery = proj.imgs.map((img): MediaItem => {
      if (typeof img === 'string' && (img.includes('youtube.com') || img.includes('youtu.be'))) {
        let videoId = '';
        // Try to extract videoId from all common formats
        const regexes = [
          /(?:youtube\.com\/watch\?v=|youtube\.com\/embed\/|youtu\.be\/|youtube\.com\/shorts\/)([\w-]{11})/, // watch?v=, embed/, youtu.be/, shorts/
          /youtube\.com\/v\/([\w-]{11})/, // /v/
        ];
        for (const re of regexes) {
          const match = img.match(re);
          if (match && match[1]) {
            videoId = match[1];
            break;
          }
        }
        // Fallback: try to get after 'watch?v=' if not matched
        if (!videoId && img.includes('watch?v=')) {
          const v = img.split('watch?v=')[1];
          if (v) videoId = v.substring(0, 11);
        }
        // Fallback: try to get after 'youtu.be/'
        if (!videoId && img.includes('youtu.be/')) {
          const v = img.split('youtu.be/')[1];
          if (v) videoId = v.substring(0, 11);
        }
        return {
          type: 'youtube',
          url: img,
          thumbnail: videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : '',
          videoId,
        };
      } else if (typeof img === 'string' && img.endsWith('.mp4')) {
        return {
          type: 'video',
          url: isPersonal ? `/imgs/personalProjects/${img}` : `/imgs/projects/${img}`
        };
      } else {
        return {
          type: 'image',
          url: isPersonal ? `/imgs/personalProjects/${img}` : `/imgs/projects/${img}`
        };
      }
    });
  }
  let projectLink = '';
  if (typeof proj.link === 'string') {
    projectLink = proj.link;
  } else if (Array.isArray(proj.link) && proj.link.length > 0) {
    projectLink = proj.link[0];
  }
  return {
    id: proj.id?.toString() ?? '',
    title: proj.title,
    category: '',
    type: 'image',
    thumbnail: gallery[0]?.url || '',
    content: gallery[0]?.url || '',
    description: proj.description || '',
    endDate: proj.endDate || '',
    gallery,
    reviews: Array.isArray(proj.reviews) ? proj.reviews : [],
    clientName: proj.clientName || '',
    rating: proj.rating,
    tech: proj.techStack,
    field: proj.field,
    link: projectLink,
  };
});

const Portfolio: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [selectedMediaIndex, setSelectedMediaIndex] = useState<number>(0);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<'client' | 'personal'>('client');

  // Split items
  const clientProjects = portfolioItems.filter(item => item.clientName && item.clientName.trim() !== '');
  const personalProjects = portfolioItems.filter(item => !item.clientName || item.clientName.trim() === '');
  const filteredItems = activeTab === 'client' ? clientProjects : personalProjects;

  const handleMediaSelect = (item: PortfolioItem, index: number) => {
    setSelectedItem(item);
    setSelectedMediaIndex(index);
  };

  const handleCarouselChange = (api: { selectedScrollSnap: () => number } | null) => {
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
            Explore some of my personal and clients projects and their reviews. Take a look at some of my personal and client projects, and see what others have said about working with me.
          </p>
        </div>

        {/* Tabs for Client/Personal Projects */}
        <div className="flex justify-center mb-8">
          <button
            className={`px-6 py-2 rounded-t-lg font-semibold transition-colors duration-200 border-b-2 ${activeTab === 'client' ? 'border-primary text-primary bg-white' : 'border-transparent text-gray-500 bg-primary/10'}`}
            onClick={() => setActiveTab('client')}
          >
            Client Projects
          </button>
          <button
            className={`px-6 py-2 rounded-t-lg font-semibold transition-colors duration-200 border-b-2 ${activeTab === 'personal' ? 'border-primary text-primary bg-white' : 'border-transparent text-gray-500 bg-primary/10'}`}
            onClick={() => setActiveTab('personal')}
          >
            Personal Projects
          </button>
        </div>

        <div className="mb-12">
          <Card className="border-2 border-primary/20 rounded-lg overflow-hidden shadow-lg">
            {filteredItems.length === 0 ? (
              <div className="p-8 text-center text-gray-500">No projects found for this tab.</div>
            ) : (
              <Carousel
                opts={{
                  align: "center",
                  loop: true,
                }}
                setApi={(api) => {
                  api?.on('select', () => handleCarouselChange(api));
                }}
                autoPlay={true}
                autoPlayInterval={15000}
                className="w-full"
              >
                <CarouselContent>
                  {filteredItems.map((item) => (
                    <CarouselItem key={item.id} className="basis-full">
                      <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        {/* ...existing code... */}
                        <div className="p-6">
                          <div className="mb-6">
                            <div className="flex items-center gap-3 mb-1">
                              <h3 className="text-2xl font-bold m-0 p-0">{item.title}</h3>
                              {item.endDate && (
                                <span className="text-xs text-gray-500">
                                  {(() => {
                                    const date = new Date(item.endDate!);
                                    return !isNaN(date.getTime()) ? date.toLocaleString('default', { month: 'short', year: 'numeric' }) : '';
                                  })()}
                                </span>
                              )}
                              {item.field && (
                                <span className="ml-2 px-2 py-1 rounded bg-primary/10 text-primary text-xs font-semibold border border-primary/20">{item.field}</span>
                              )}
                            </div>
                            {item.description && (
                              <div className="text-gray-700 mb-4 leading-relaxed">
                                {item.description.split(/\r?\n/).map((line, idx) => (
                                  <React.Fragment key={idx}>
                                    {line}
                                    {idx < item.description.split(/\r?\n/).length - 1 && <br />}
                                  </React.Fragment>
                                ))}
                              </div>
                            )}
                            {item.link && (
                              <div className="mb-4">
                                <a
                                  href={item.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-primary underline hover:text-primary/80 text-sm font-medium"
                                >
                                  Visit Project
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 3h7m0 0v7m0-7L10 14m-7 7h7a2 2 0 002-2v-7" /></svg>
                                </a>
                              </div>
                            )}
                            {item.tech && (
                              <div className="flex flex-wrap gap-2">
                                {item.tech.map(tech => (
                                  <span key={tech} className="inline-block bg-primary/10 text-primary border border-primary/20 rounded-full px-3 py-1 text-sm font-medium">{tech}</span>
                                ))}
                              </div>
                            )}
                          </div>

                          <div className="mb-6">
                            <h4 className="text-lg font-semibold mb-3 text-gray-800">Project Gallery</h4>
                            <div className="relative w-full">
                              <Carousel opts={{ align: 'start', loop: false }} className="w-full">
                                <CarouselContent>
                                {item.gallery.map((media, index) => (
                                  <CarouselItem key={index} className="basis-2/3 md:basis-1/3">
                                    {media.type === 'image' ? (
                                      <Dialog>
                                        <DialogTrigger asChild>
                                          <div className="aspect-video w-full max-w-full bg-gray-100 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                                            <img 
                                              src={media.url} 
                                              alt={`${item.title} gallery ${index + 1}`} 
                                              className="w-full h-auto max-h-60 object-contain bg-black mx-auto"
                                            />
                                          </div>
                                        </DialogTrigger>
                                        <DialogContent className="flex items-center justify-center bg-black/80 p-0 max-w-3xl">
                                          <div className="flex items-center justify-center w-full h-full max-h-[80vh] max-w-[90vw]">
                                            <img src={media.url} alt={`${item.title} gallery ${index + 1}`} className="object-contain w-full h-full max-h-[80vh] max-w-[90vw] rounded-lg" />
                                          </div>
                                        </DialogContent>
                                      </Dialog>
                                    ) : media.type === 'video' && media.url.endsWith('.mp4') ? (
                                      <div className="relative w-full h-full aspect-video bg-gray-100 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                                        <img 
                                          src={media.thumbnail || ''} 
                                          alt={`${item.title} video ${index + 1}`} 
                                          className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                                          <Video className="w-8 h-8 text-white" />
                                        </div>
                                      </div>
                                    ) : media.type === 'youtube' ? (
                                      <Dialog>
                                        <DialogTrigger asChild>
                                          <div className="relative w-full h-full aspect-video bg-gray-100 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                                            <img 
                                              src={media.thumbnail} 
                                              alt={`${item.title} YouTube video ${index + 1}`} 
                                              className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                                              <Video className="w-8 h-8 text-white" />
                                            </div>
                                          </div>
                                        </DialogTrigger>
                                        <DialogContent className="flex items-center justify-center bg-black/80 p-0 max-w-3xl">
                                          <div className="flex items-center justify-center w-full h-full max-h-[80vh] max-w-[90vw]">
                                            <iframe
                                              width="100%"
                                              height="480"
                                              src={`https://www.youtube.com/embed/${media.videoId}?autoplay=1`}
                                              title="YouTube video player"
                                              frameBorder="0"
                                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                              allowFullScreen
                                              className="w-full h-[40vw] max-h-[80vh] max-w-[90vw] rounded-lg bg-black"
                                            ></iframe>
                                          </div>
                                        </DialogContent>
                                      </Dialog>
                                    ) : (
                                      <div className="relative w-full h-full aspect-video bg-gray-100 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                                        <img 
                                          src={media.thumbnail || media.url} 
                                          alt={`${item.title} video ${index + 1}`} 
                                          className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                                          <Video className="w-8 h-8 text-white" />
                                        </div>
                                      </div>
                                    )}
                                  </CarouselItem>
                                ))}
                                </CarouselContent>
                                {item.gallery.length > 1 && (
                                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                                    <CarouselPrevious className="!static !w-10 !h-10 !bg-primary/80 !text-white hover:!bg-primary" />
                                    <CarouselNext className="!static !w-10 !h-10 !bg-primary/80 !text-white hover:!bg-primary" />
                                  </div>
                                )}
                              </Carousel>
                            </div>
                          </div>

                          {item.reviews && item.reviews.length > 0 && (
                            <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-6 rounded-lg border border-primary/20">
                              <h4 className="text-lg font-semibold mb-3 text-gray-800">Client Review{item.reviews.length > 1 ? 's' : ''}</h4>
                              <div className={`flex flex-col md:flex-row gap-6`}>
                                {item.reviews.map((reviewObj, idx) => (
                                  <div key={idx} className="flex-1">
                                    <div className="flex items-center mb-2">
                                      <span className="font-semibold text-primary mr-3">{item.clientName}</span>
                                      {typeof item.rating === 'number' && (
                                        <div className="flex items-center">
                                          {[...Array(5)].map((_, i) => (
                                            <span key={i} className={`text-lg ${i < Math.round(item.rating) ? 'text-yellow-500' : 'text-gray-300'}`}>★</span>
                                          ))}
                                        </div>
                                      )}
                                    </div>
                                    <blockquote className="text-gray-700 italic text-lg leading-relaxed mb-1">
                                      "{reviewObj.review}"
                                    </blockquote>
                                    <div className="text-xs text-gray-500">
                                      {(() => {
                                        const date = new Date(reviewObj.date);
                                        return !isNaN(date.getTime()) ? date.toLocaleString('default', { month: 'short', year: 'numeric' }) : '';
                                      })()}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
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

                <div className="block">
                  <CarouselPrevious className="!left-2 !w-12 !h-12 !bg-primary/80 !text-white hover:!bg-primary z-20" />
                  <CarouselNext className="!right-2 !w-12 !h-12 !bg-primary/80 !text-white hover:!bg-primary z-20" />
                </div>
              </Carousel>
            )}
          </Card>
        </div>
      </div>
    </section>
  );

};
export default Portfolio;
