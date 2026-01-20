import { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Send, MapPin, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'khushi.rajput.cg@gmail.com', href: 'mailto:khushi.rajput.cg@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 9638647776', href: 'tel:+919638647776' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send your message.",
        variant: "destructive",
      });
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Footer-like organic wave at bottom can be added via SVG if needed, but for now specific blob */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 font-heading">
              Let's <span className="text-primary italic">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-xl mx-auto">
              Grab a virtual coffee with me. I'm always open to discussing new projects, creative ideas or opportunities.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 bg-white/50 backdrop-blur-md border border-white/60 rounded-[3rem] p-8 lg:p-12 shadow-soft">

            {/* Contact Info Side */}
            <div className="lg:col-span-2 space-y-8 flex flex-col justify-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Contact Details</h3>
                {contactInfo.map((contact) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    className="flex items-center gap-4 p-4 bg-white/60 rounded-2xl hover:bg-white hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                      <contact.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">{contact.label}</p>
                      <p className="font-medium text-foreground">{contact.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="pt-8 border-t border-dashed border-primary/20">
                <h4 className="text-lg font-semibold mb-4">Social Profiles</h4>
                <div className="flex gap-4">
                  <a href="https://github.com/KhushiRajput18007" target="_blank" className="w-10 h-10 bg-secondary/50 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all"><Github className="w-5 h-5" /></a>
                  <a href="https://linkedin.com/in/khushi-rajput" target="_blank" className="w-10 h-10 bg-secondary/50 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all"><Linkedin className="w-5 h-5" /></a>
                </div>
              </div>
            </div>

            {/* Separator Line */}
            <div className="hidden lg:block w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent"></div>

            {/* Form Side */}
            <div className="lg:col-span-2 space-y-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground ml-1">Name</label>
                    <Input
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="rounded-xl border-primary/10 bg-white/50 focus:bg-white transition-colors h-12"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground ml-1">Email</label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="rounded-xl border-primary/10 bg-white/50 focus:bg-white transition-colors h-12"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground ml-1">Message</label>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="rounded-xl border-primary/10 bg-white/50 focus:bg-white transition-colors resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground h-12 shadow-lg hover:shadow-xl transition-all"
                >
                  {isSubmitting ? 'Sending...' : <span className="flex items-center gap-2"><Send className="w-4 h-4" /> Send Message</span>}
                </Button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;