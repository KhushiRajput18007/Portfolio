import { Github, Linkedin, Mail, Coffee, Code } from 'lucide-react';
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
      className="min-h-[85vh] flex items-center justify-center relative overflow-hidden pt-44 pb-32 md:pt-32 md:pb-12"
    >
      {/* Decorative Blob Top Right */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary rounded-bl-full z-0 opacity-60 pointer-events-none"></div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-30">

        {/* Text Content */}
        <div className="space-y-6 animate-fade-in text-center lg:text-left relative z-20">

          {/* "But first..." Badge */}
          <div className="absolute -top-12 -left-4 md:-left-8 rotate-[-10deg] animate-float hidden lg:block">
            <div className="bg-white p-3 shadow-card rounded-xl border-2 border-primary/20 transform rotate-[-5deg] hover:rotate-0 transition-transform duration-300">
              <span className="font-heading text-2xl text-primary block text-center leading-none">But first...</span>
              <span className="font-heading text-4xl text-accent font-bold block text-center leading-none">Coffee</span>
            </div>
          </div>

          <div className="pt-8">
            <h2 className="font-heading text-3xl md:text-4xl text-primary mb-2">Hello! I'm...</h2>
            <h1 className="text-6xl md:text-8xl font-heading font-bold text-foreground leading-[0.9] drop-shadow-sm">
              Khushi<br />
              <span className="text-primary">Rajput</span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl font-body text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Turning caffeine into code and bugs into features. Brewing pixel-perfect experiences with a double shot of creativity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <Button
              onClick={() => scrollToSection('#projects')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg font-heading shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              View Menu (Projects)
            </Button>
            <Button
              onClick={() => scrollToSection('#contact')}
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary/10 rounded-full px-8 py-6 text-lg font-heading bg-transparent"
            >
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 justify-center lg:justify-start pt-6">
            <span className="font-heading text-primary font-bold text-lg">Ingredients:</span>
            <a href="https://github.com/KhushiRajput18007" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full shadow-lg hover:scale-110 transition-transform text-primary border-2 border-primary/20 hover:border-primary">
              <Github size={22} />
            </a>
            <a href="https://linkedin.com/in/khushi-rajput" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full shadow-lg hover:scale-110 transition-transform text-primary border-2 border-primary/20 hover:border-primary">
              <Linkedin size={22} />
            </a>
            <a href="mailto:khushi.rajput.cg@gmail.com" className="p-3 bg-white rounded-full shadow-lg hover:scale-110 transition-transform text-primary border-2 border-primary/20 hover:border-primary">
              <Mail size={22} />
            </a>
          </div>
        </div>

        {/* VS Code Editor Visual - RESTORED TO PRE-LOTTIE STATE */}
        <div className="relative animate-slide-up z-20 mt-10 lg:mt-0">
          {/* Abstract Background for Visual */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/20 rounded-full blur-3xl -z-10 animate-pulse-glow"></div>

          <div className="w-full max-w-2xl mx-auto relative group">
            {/* Glassmorphism glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 -m-2"></div>

            {/* Editor Container */}
            <div className="relative bg-background/80 backdrop-blur-md border border-primary/30 rounded-2xl shadow-2xl overflow-hidden hover:border-primary/50 transition-all duration-500">

              {/* Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-secondary/30 border-b border-primary/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="text-xs text-muted-foreground font-mono">portfolio.tsx</div>
              </div>

              {/* Code Area */}
              <div className="flex bg-background/80 backdrop-blur-md min-h-[320px]">
                {/* Activity Bar */}
                <div className="w-12 border-r border-primary/10 flex flex-col items-center py-4 gap-4 bg-secondary/10">
                  <div className="p-2 text-primary bg-primary/10 rounded-md"><Code className="w-5 h-5" /></div>
                  <div className="p-2 text-muted-foreground/50"><Github className="w-5 h-5" /></div>
                  <div className="p-2 text-muted-foreground/50"><Mail className="w-5 h-5" /></div>
                </div>

                {/* Sidebar (Explorer) */}
                <div className="w-48 border-r border-primary/10 hidden sm:block bg-secondary/5 p-4">
                  <div className="text-xs font-semibold text-muted-foreground mb-4 pl-2">EXPLORER</div>
                  <div className="space-y-2 font-mono text-sm">
                    <div className="flex items-center gap-2 text-primary bg-primary/5 p-1 rounded -mx-1">
                      <span className="text-blue-400">TS</span> portfolio.tsx
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground pl-1">
                      <span className="text-yellow-400">JS</span> config.js
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground pl-1">
                      <span className="text-purple-400">CSS</span> styles.css
                    </div>
                  </div>
                </div>

                {/* Code Area */}
                <div className="p-6 font-mono text-sm overflow-hidden flex-1">
                  <div className="flex gap-4">
                    <div className="flex flex-col text-muted-foreground/40 select-none text-right font-mono">
                      <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-pink-500"><span className="text-purple-500">const</span> <span className="text-yellow-500">developer</span> = <span className="text-purple-500">{`{`}</span></div>
                      <div className="pl-4 text-foreground"><span className="text-blue-400">name</span>: <span className="text-green-500">"Khushi"</span>,</div>
                      <div className="pl-4 text-foreground"><span className="text-blue-400">role</span>: <span className="text-green-500">"Full Stack Developer"</span>,</div>
                      <div className="pl-4 text-foreground"><span className="text-blue-400">passion</span>: <span className="text-green-500">"Coffee & Code"</span>,</div>
                      <div className="pl-4 text-foreground"><span className="text-blue-400">skills</span>: [<span className="text-green-500">"React"</span>, <span className="text-green-500">"Node"</span>, <span className="text-green-500">"Design"</span>],</div>
                      <div className="pl-4 text-foreground"><span className="text-blue-400">drink</span>: <span className="text-yellow-500">()</span> <span className="text-purple-500">=&gt;</span> <span className="text-green-500">"Cappuccino"</span></div>
                      <div className="text-purple-500">{`}`};</div>
                      <div className="mt-2 text-muted-foreground">// Let's brew something amazing!</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -right-8 top-10 animate-float" style={{ animationDelay: '1s' }}>
              <div className="p-3 bg-white rounded-xl shadow-lg border border-primary/10">
                <Coffee className="w-8 h-8 text-primary" />
              </div>
            </div>
            <div className="absolute -left-8 bottom-10 animate-float" style={{ animationDelay: '2s' }}>
              <div className="p-3 bg-white rounded-xl shadow-lg border border-primary/10">
                <Code className="w-8 h-8 text-accent" />
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Decorative Wavy Bottom */}
      <div className="absolute bottom-0 left-0 w-full leading-none z-20 text-background">
        <svg className="block w-full h-[60px] md:h-[100px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
        </svg>
      </div>
    </section >
  );
};

export default Hero;