import { Palette, Film, Plane, Music, PenTool, Code, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const hobbies = [
    { icon: Code, title: 'UI/UX Designing', description: 'Creating intuitive interfaces' },
    { icon: Film, title: 'Sci-fi Movies', description: 'Exploring futuristic narratives' },
    { icon: Plane, title: 'Traveling', description: 'Discovering new places' },
    { icon: Music, title: 'Music', description: 'Finding inspiration in melodies' },
    { icon: PenTool, title: 'Sketching', description: 'Bringing ideas to life' },
  ];

  return (
    <section id="about" className="py-24 bg-background relative">

      {/* Decorative Blob */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-64 h-64 bg-accent/20 rounded-l-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 font-heading">
              About <span className="text-primary italic">Me</span>
            </h2>
            <div className="w-20 h-1 bg-primary/30 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Bio Content */}
            <div className="space-y-8 animate-slide-up">
              <div className="bg-white/50 backdrop-blur-sm p-8 rounded-[2rem] border border-white/60 shadow-soft relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary fill-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  The Story So Far
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4 text-justify">
                  I’m Khushi Rajput, an aspiring software engineer from Planpur and a dedicated Full-Stack Developer with expertise in React, Node.js, and modern web technologies. My passion lies in building dynamic, user-centric applications that seamlessly integrate frontend aesthetics with backend efficiency.
                </p>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  Currently, I’m specializing in crafting scalable solutions and ensuring secure, authentication-driven web applications. I love utilizing tools like Figma and Tailwind CSS to create intuitive interfaces. Let’s connect and create something impactful!
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-4 bg-secondary/30 rounded-2xl border border-secondary/50">
                  <div className="text-3xl font-bold text-primary mb-1">1st</div>
                  <div className="text-xs uppercase tracking-wide text-muted-foreground">Year Student</div>
                </div>
                <div className="text-center p-4 bg-secondary/30 rounded-2xl border border-secondary/50">
                  <div className="text-3xl font-bold text-primary mb-1">10+</div>
                  <div className="text-xs uppercase tracking-wide text-muted-foreground">Projects</div>
                </div>
                <div className="text-center p-4 bg-secondary/30 rounded-2xl border border-secondary/50">
                  <div className="text-3xl font-bold text-primary mb-1">∞</div>
                  <div className="text-xs uppercase tracking-wide text-muted-foreground">Passion</div>
                </div>
              </div>
            </div>

            {/* Hobbies & Interests */}
            <div className="space-y-6 animate-slide-up">
              <h3 className="text-2xl font-semibold text-foreground mb-6 pl-4 border-l-4 border-primary/40">
                Hobbies & Interests
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {hobbies.map((hobby, index) => (
                  <div
                    key={hobby.title}
                    className="group flex items-center p-4 rounded-2xl bg-white/40 border border-white/60 hover:bg-white/80 hover:shadow-md transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/20 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <hobby.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{hobby.title}</h4>
                      <p className="text-sm text-muted-foreground">{hobby.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;