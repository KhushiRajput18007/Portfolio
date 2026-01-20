import { useState } from 'react';
import { ExternalLink, Github, Star, Filter, Coffee } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Zenova from '@/assets/zenova_tv.png';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Frontend', 'Full-Stack', 'Fun'];

  const projects = [
    {
      id: 1,
      title: 'Zenova TV',
      description: 'A modern movie streaming platform with real-time TMDb API integration, featuring free streaming links and an intuitive user interface.',
      image: Zenova,
      technologies: ['React.js', 'Node.js', 'TMDb API', 'MongoDB', 'Tailwind CSS'],
      category: 'Full-Stack',
      featured: true,
      links: {
        demo: 'https://elaborate-starburst-182776.netlify.app',
        github: '#'
      },
      highlights: [
        'Real-time movie data integration',
        'Free streaming links',
        'Responsive design',
        'User authentication'
      ]
    },
    {
      id: 2,
      title: 'Spotify Clone',
      description: 'A pixel-perfect recreation of Spotify with responsive design and interactive music player interface.',
      image: Zenova,
      technologies: ['React.js', 'CSS3', 'JavaScript'],
      category: 'Frontend',
      featured: false,
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      id: 3,
      title: 'YouTube Clone',
      description: 'Complete YouTube interface clone with video grid, search functionality, and responsive layout.',
      image: Zenova,
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      category: 'Frontend',
      featured: false,
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      id: 4,
      title: 'Static Chess & Ludo',
      description: 'Interactive board games built with vanilla JavaScript, featuring game logic and smooth animations.',
      image: Zenova,
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      category: 'Fun',
      featured: false,
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      id: 5,
      title: 'Random Joke Generator',
      description: 'A fun React app that fetches and displays random jokes with a clean, engaging interface.',
      image: Zenova,
      technologies: ['React.js', 'API Integration', 'CSS3'],
      category: 'Fun',
      featured: false,
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      id: 6,
      title: 'Food Website',
      description: 'Responsive food delivery website with modern design and smooth scrolling animations.',
      image: Zenova,
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      category: 'Frontend',
      featured: false,
      links: {
        demo: '#',
        github: '#'
      }
    }
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const featuredProject = filteredProjects.find(p => p.featured);
  const otherProjects = filteredProjects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 px-6 bg-secondary/20 relative overflow-hidden">
      {/* Background blobs for organic feel */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-[100%] z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-tr-[100%] z-0 pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-white/50 backdrop-blur-sm rounded-full mb-4 shadow-sm">
            <Coffee className="w-6 h-6 text-primary" />
          </div>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-6">
            My <span className="text-primary decoration-wavy underline decoration-accent/50">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A brewed collection of my development journey, featuring full-stack applications to creative frontend experiments.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-16">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? 'default' : 'outline'}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-6 transition-all duration-300 ${activeFilter === filter
                ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                : 'border-primary/30 text-primary hover:bg-primary/10 bg-white/50 backdrop-blur-sm'
                }`}
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Featured Visuals / Video Section */}
        <div className="mb-24 relative">
          <div className="text-center mb-10">
            <h3 className="font-heading text-3xl text-primary mb-2">Featured Visuals</h3>
            <p className="text-muted-foreground">My latest work in motion.</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Laptop Frame Mockup */}
            <div className="bg-foreground rounded-[1.5rem] p-4 shadow-2xl relative z-10 mx-auto w-full aspect-video flex flex-col">
              {/* Screen */}
              <div className="flex-1 bg-black rounded-xl overflow-hidden relative group cursor-pointer inline-block">
                {/* Placeholder for user video */}
                <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 border border-white/10">
                  <div className="text-center p-6">
                    <span className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold mb-4 inline-block shadow-lg">
                      ▶ Play Video
                    </span>
                    <p className="text-zinc-400 text-sm">
                      Your Video URL goes here.<br />
                      (Edit src/components/Projects.tsx to add your iframe)
                    </p>
                  </div>
                </div>
              </div>
              {/* Laptop Logo/Chin */}
              <div className="h-6 flex items-center justify-center">
                <div className="w-16 h-4 bg-white/10 rounded-full"></div>
              </div>
            </div>
            {/* Laptop Base */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[110%] h-4 bg-zinc-700 rounded-b-xl -z-10 shadow-xl"></div>
          </div>
        </div>

        {/* Featured Project */}
        {featuredProject && (
          <div className="mb-20 animate-fade-in">
            <div className="relative group rounded-3xl overflow-hidden border border-white/50 shadow-soft bg-white/40 backdrop-blur-md">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-6">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase">Featured Brew</span>
                  </div>
                  <h3 className="text-4xl font-heading font-bold text-foreground mb-4">{featuredProject.title}</h3>
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">{featuredProject.description}</p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {featuredProject.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="bg-secondary/50 text-foreground/80 hover:bg-primary/10 transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all">
                      <a href={featuredProject.links.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="rounded-full border-primary/30 text-primary hover:bg-primary/5">
                      <a href={featuredProject.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> Code
                      </a>
                    </Button>
                  </div>
                </div>
                <div className="relative h-full min-h-[300px] lg:min-h-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10"></div>
                  <img
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project) => (
            <Card
              key={project.id}
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-white/60 backdrop-blur-sm border-white/50 rounded-2xl overflow-hidden"
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button asChild size="sm" className="rounded-full bg-white/90 text-primary hover:bg-white shadow-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <a href={project.links.demo} target="_blank">View Project</a>
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <CardTitle className="text-xl font-heading text-foreground mb-3">
                  {project.title}
                </CardTitle>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-xs bg-secondary/30 text-muted-foreground">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            variant="outline"
            size="lg"
            className="rounded-full border-primary/30 text-primary hover:bg-primary/5 px-8"
          >
            View More in Github
          </Button>
        </div>

      </div>
    </section>
  );
};

export default Projects;