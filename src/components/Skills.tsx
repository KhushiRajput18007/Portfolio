import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript', 'Responsive Design'],
      icon: '🎨',
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'RESTful APIs', 'JWT Auth'],
      icon: '⚙️',
    },
    {
      title: 'Languages',
      skills: ['JavaScript', 'C', 'C++', 'HTML', 'CSS'],
      icon: '💻',
    },
    {
      title: 'Tools & Design',
      skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Figma', 'ShadCN'],
      icon: '🛠️',
    },
  ];

  return (
    <section id="skills" className="py-24 bg-secondary/10 relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 font-heading">
              Tech <span className="text-primary italic">Stack</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The ingredients I use to brew perfect applications
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="group relative bg-white/60 backdrop-blur-md rounded-[2rem] p-6 border border-white/60 shadow-sm hover:shadow-card hover:-translate-y-1 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-primary to-accent text-white rounded-full flex items-center justify-center text-xl shadow-lg group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>

                <div className="mt-8 text-center">
                  <h3 className="text-xl font-bold text-foreground mb-4 font-heading">{category.title}</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-secondary/40 text-muted-foreground text-sm rounded-full border border-secondary/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
