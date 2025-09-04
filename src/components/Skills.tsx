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
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              My <span className="text-primary">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <Card
                key={category.title}
                className="group hover:shadow-lg transition-all duration-300 hover:scale-105 glass-card hover-lift animate-fade-in border-primary/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <CardTitle className="text-xl text-foreground">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="w-full justify-center py-1 bg-secondary/50 hover:bg-accent/50 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Skill Highlights with Progress Bars */}
          <div className="space-y-6">
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

