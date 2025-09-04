import { ArrowDown, Download, Github, Linkedin, Mail, Sparkles, Code, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-accent/10"
    >
      {/* Modern background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
        
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary/20 to-secondary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-accent/15 to-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-secondary/20 to-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Geometric accents */}
        <div className="absolute top-1/4 right-1/4 w-8 h-8 border border-primary/30 rotate-45 animate-float"></div>
        <div className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-accent/40 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 right-1/3 w-4 h-12 bg-secondary/40 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
      </div>
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Content */}
        <div className="space-y-10 animate-fade-in">
          <div className="space-y-6">
            {/* Greeting with modern pill design */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-background/20 backdrop-blur-sm border border-primary/20 rounded-full">
              <Sparkles className="w-4 h-4 text-primary" />
              <p className="text-primary font-medium tracking-wide text-sm">
                Hello there, nice to meet you 👋 I am
              </p>
            </div>
            
            {/* Enhanced name typography */}
            <div className="space-y-2">
              <h1 className="text-6xl lg:text-8xl font-bold text-foreground leading-none tracking-tight">
                Khushi
              </h1>
              <h1 className="text-6xl lg:text-8xl font-bold text-primary leading-none tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Rajput
              </h1>
            </div>
            
            {/* Modern role card with glassmorphism */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-background/30 backdrop-blur-md border border-primary/30 p-6 rounded-2xl hover:bg-background/40 transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <Code className="w-5 h-5 text-primary" />
                  <Palette className="w-5 h-5 text-accent" />
                </div>
                <p className="text-xl lg:text-2xl font-semibold text-foreground">
                  Full-Stack Developer | UI/UX Enthusiast
                </p>
                <div className="mt-3 flex gap-2">
                  <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                  <div className="w-8 h-1 bg-secondary/50 rounded-full"></div>
                  <div className="w-4 h-1 bg-primary/30 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced description */}
          <div className="space-y-4">
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed font-light">
              Crafting seamless digital experiences from front to back. 
            </p>
            <p className="text-lg text-muted-foreground/80 max-w-2xl leading-relaxed">
              I specialize in building dynamic and scalable applications with a passion 
              for clean UI and intuitive user experiences.
            </p>
          </div>

          {/* Enhanced buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={() => scrollToSection('#projects')}
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent text-primary-foreground hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                View My Work
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
            <Button 
              onClick={() => scrollToSection('#contact')}
              variant="outline"
              size="lg"
              className="group relative border-2 border-primary/50 text-primary hover:bg-primary/10 hover:border-primary hover:scale-105 transition-all duration-300 backdrop-blur-sm"
            >
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Let's Connect
              </span>
            </Button>
          </div>

          {/* Enhanced social links */}
          <div className="flex items-center gap-8 pt-6">
            <p className="text-sm text-muted-foreground font-medium">Follow me:</p>
            <div className="flex gap-4">
              <a 
                href="https://github.com/KhushiRajput18007" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative p-3 bg-background/20 backdrop-blur-sm border border-primary/20 rounded-full text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300 hover:scale-110"
              >
                <Github size={20} />
                <div className="absolute inset-0 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a 
                href="https://linkedin.com/in/khushi-rajput" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative p-3 bg-background/20 backdrop-blur-sm border border-primary/20 rounded-full text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={20} />
                <div className="absolute inset-0 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a 
                href="mailto:khushi.rajput.cg@gmail.com"
                className="group relative p-3 bg-background/20 backdrop-blur-sm border border-primary/20 rounded-full text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300 hover:scale-110"
              >
                <Mail size={20} />
                <div className="absolute inset-0 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>
        </div>

        {/* VS Code Style Editor */}
        <div className="relative animate-slide-up">
          <div className="w-full max-w-2xl mx-auto relative group">
            {/* Glassmorphism glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 -m-2"></div>
            
            {/* VS Code Editor mockup */}
            <div className="relative bg-background/20 backdrop-blur-md border border-primary/30 rounded-2xl shadow-2xl overflow-hidden group-hover:border-primary/50 group-hover:bg-background/30 transition-all duration-500">
              
              {/* VS Code Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-background/30 backdrop-blur-sm border-b border-primary/20">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-red-400 to-red-500 rounded-full shadow-sm"></div>
                    <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full shadow-sm"></div>
                    <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-green-500 rounded-full shadow-sm"></div>
                  </div>
                  <span className="text-xs text-muted-foreground/60 ml-2">Portfolio - Visual Studio Code</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-4 h-4 flex items-center justify-center text-muted-foreground/60 hover:bg-primary/10 rounded transition-colors">
                    <Code className="w-2 h-2" />
                  </div>
                </div>
              </div>

              <div className="flex">
                {/* VS Code Sidebar */}
                <div className="w-12 bg-background/10 backdrop-blur-sm border-r border-primary/20 flex flex-col items-center py-3 gap-3">
                  <div className="w-6 h-6 flex items-center justify-center text-primary bg-primary/20 rounded-sm">
                    <Code className="w-3 h-3" />
                  </div>
                  <div className="w-6 h-6 flex items-center justify-center text-muted-foreground/60 hover:text-primary transition-colors">
                    <Github className="w-3 h-3" />
                  </div>
                  <div className="w-6 h-6 flex items-center justify-center text-muted-foreground/60 hover:text-primary transition-colors">
                    <Sparkles className="w-3 h-3" />
                  </div>
                </div>

                {/* File Explorer */}
                <div className="w-48 bg-background/5 backdrop-blur-sm border-r border-primary/20 p-3">
                  <div className="text-xs font-semibold text-foreground/80 mb-2 uppercase tracking-wide">Explorer</div>
                  <div className="space-y-1 text-xs">
                    <div className="flex items-center gap-2 text-muted-foreground/80">
                      <ArrowDown className="w-3 h-3" />
                      <span>src</span>
                    </div>
                    <div className="flex items-center gap-2 ml-4 text-muted-foreground/60">
                      <div className="w-3 h-3 bg-blue-500/60 rounded-sm flex items-center justify-center text-white text-[8px]">TS</div>
                      <span>components</span>
                    </div>
                    <div className="flex items-center gap-2 ml-8 text-primary bg-primary/10 px-1 rounded">
                      <div className="w-3 h-3 bg-blue-500 rounded-sm flex items-center justify-center text-white text-[8px] font-bold">TS</div>
                      <span>portfolio.tsx</span>
                    </div>
                    <div className="flex items-center gap-2 ml-4 text-muted-foreground/60">
                      <div className="w-3 h-3 bg-orange-500/60 rounded-sm flex items-center justify-center text-white text-[8px]">JS</div>
                      <span>utils.ts</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground/60">
                      <div className="w-3 h-3 bg-green-500/60 rounded-sm"></div>
                      <span>package.json</span>
                    </div>
                  </div>
                </div>

                {/* Code Editor Area */}
                <div className="flex-1">
                  {/* Tab Bar */}
                  <div className="flex items-center bg-background/10 backdrop-blur-sm border-b border-primary/20">
                    <div className="flex items-center gap-2 px-4 py-2 bg-background/20 border-r border-primary/20 text-sm">
                      <div className="w-3 h-3 bg-blue-500 rounded-sm flex items-center justify-center text-white text-[8px] font-bold">TS</div>
                      <span className="text-foreground">portfolio.tsx</span>
                      <button className="text-muted-foreground/60 hover:text-foreground ml-2">×</button>
                    </div>
                  </div>
                  
                  {/* Code Content */}
                  <div className="p-4 space-y-2 font-mono text-sm bg-gradient-to-br from-background/5 to-background/10 min-h-[280px]">
                    <div className="flex items-center gap-3">
                      <span className="text-muted-foreground/40 w-6 text-right">1</span>
                      <span className="text-purple-400">import</span>
                      <span className="text-foreground">React</span>
                      <span className="text-purple-400">from</span>
                      <span className="text-green-400">'react'</span><span className="text-muted-foreground">;</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-muted-foreground/40 w-6 text-right">2</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-muted-foreground/40 w-6 text-right">3</span>
                      <span className="text-blue-400">const</span>
                      <span className="text-yellow-300">developer</span>
                      <span className="text-muted-foreground">=</span>
                      <span className="text-yellow-400">{"{"}</span>
                    </div>
                    <div className="flex items-center gap-3 ml-6">
                      <span className="text-muted-foreground/40 w-6 text-right">4</span>
                      <span className="text-red-300">name</span><span className="text-muted-foreground">:</span>
                      <span className="text-green-400">"Khushi Rajput"</span><span className="text-muted-foreground">,</span>
                    </div>
                    <div className="flex items-center gap-3 ml-6">
                      <span className="text-muted-foreground/40 w-6 text-right">5</span>
                      <span className="text-red-300">role</span><span className="text-muted-foreground">:</span>
                      <span className="text-green-400">"Full-Stack Developer"</span><span className="text-muted-foreground">,</span>
                    </div>
                    <div className="flex items-center gap-3 ml-6">
                      <span className="text-muted-foreground/40 w-6 text-right">6</span>
                      <span className="text-red-300">skills</span><span className="text-muted-foreground">:</span>
                      <span className="text-yellow-400">[</span>
                    </div>
                    <div className="flex items-center gap-3 ml-12">
                      <span className="text-muted-foreground/40 w-6 text-right">7</span>
                      <span className="text-green-400">"React"</span><span className="text-muted-foreground">,</span>
                      <span className="text-green-400">"TypeScript"</span><span className="text-muted-foreground">,</span>
                      <span className="text-green-400">"Node.js"</span>
                    </div>
                    <div className="flex items-center gap-3 ml-6">
                      <span className="text-muted-foreground/40 w-6 text-right">8</span>
                      <span className="text-yellow-400">]</span><span className="text-muted-foreground">,</span>
                    </div>
                    <div className="flex items-center gap-3 ml-6">
                      <span className="text-muted-foreground/40 w-6 text-right">9</span>
                      <span className="text-red-300">status</span><span className="text-muted-foreground">:</span>
                      <span className="text-green-400">"Available for hire"</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-muted-foreground/40 w-6 text-right">10</span>
                      <span className="text-yellow-400">{"}"}</span><span className="text-muted-foreground">;</span>
                    </div>
                    
                    {/* Animated cursor */}
                    <div className="flex items-center gap-3">
                      <span className="text-muted-foreground/40 w-6 text-right">11</span>
                      <div className="w-2 h-5 bg-primary animate-pulse shadow-lg shadow-primary/50"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* VS Code Status Bar */}
              <div className="flex items-center justify-between px-4 py-1 bg-background/40 backdrop-blur-sm border-t border-primary/20 text-xs">
                <div className="flex items-center gap-4 text-muted-foreground/60">
                  <span className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    main
                  </span>
                  <span>TypeScript React</span>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground/60">
                  <span>Ln 11, Col 1</span>
                  <span>UTF-8</span>
                </div>
              </div>
            </div>
            
            {/* VS Code Extension Icons */}
            <div className="absolute -top-6 -left-6 flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 text-blue-400 rounded-lg flex items-center justify-center shadow-lg animate-float hover:bg-blue-500/30 transition-all">
                <Code className="w-4 h-4" />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 text-orange-400 rounded-lg flex items-center justify-center shadow-lg animate-float hover:bg-orange-500/30 transition-all" style={{ animationDelay: '1s' }}>
                <Palette className="w-4 h-4" />
              </div>
            </div>
            <div className="absolute top-1/4 -right-12 flex items-center gap-2">
              <div className="w-8 h-8 bg-green-500/20 backdrop-blur-sm border border-green-500/30 text-green-400 rounded-lg flex items-center justify-center shadow-lg animate-float hover:bg-green-500/30 transition-all" style={{ animationDelay: '2s' }}>
                <Github className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('#about')}
          className="flex flex-col items-center text-primary hover:text-primary/80 transition-colors"
        >
          <span className="text-sm mb-2">Scroll down</span>
          <ArrowDown size={20} />
        </button>
      </div>
    </section>
  );
};

export default Hero;