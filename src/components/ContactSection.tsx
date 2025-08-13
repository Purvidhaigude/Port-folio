import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  const contactInfo = [
    {
      type: "Email",
      value: "purvi31dhaigude2005@gmail.com",
      icon: "📧",
      href: "mailto:purvi31dhaigude2005@gmail.com"
    },
    {
      type: "Phone",
      value: "+91 8817584994",
      icon: "📱",
      href: "tel:+918817584994"
    },
    {
      type: "Location",
      value: "Indore, Madhya Pradesh, India",
      icon: "📍",
      href: "#"
    },
    {
      type: "LinkedIn",
      value: "Connect with me",
      icon: "💼",
      href: "https://www.linkedin.com/in/purvi-dhaigude-6669b0271/"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-primary font-space-grotesk">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to contribute to your team? I'm actively seeking internship opportunities and would love to discuss how I can add value to your organization.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm currently seeking internship opportunities where I can apply my technical skills, 
                learn from experienced professionals, and contribute to meaningful projects. 
                Whether you have an opportunity or just want to connect, I'd love to hear from you!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((contact, index) => (
                <Card key={index} className="glass p-4 card-hover skill-glow">
                  <a 
                    href={contact.href}
                    className={`flex items-center gap-3 ${contact.href !== '#' ? 'hover:text-primary transition-colors' : ''}`}
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-lg">
                      {contact.icon}
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{contact.type}</div>
                      <div className="text-sm font-medium text-foreground">{contact.value}</div>
                    </div>
                  </a>
                </Card>
              ))}
            </div>

           {/* Quick Actions */}
<Card className="glass p-6">
  <h4 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h4>
  <div className="flex flex-col sm:flex-row gap-3">

    {/* Download Resume Button */}
     <a
      href="/resume_purvi_dhaigude%20(3).pdf" // Public folder me jo file ka naam hai wo same likho
      download="Purvi_Dhaigude_Resume.pdf" // Download hone wale file ka naam
      className="btn-hero flex-1 flex items-center justify-center"
    >
      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
      Download Resume
    </a>

    {/* LinkedIn Button */}
    <a 
      href="https://www.linkedin.com/in/purvi-dhaigude-6669b0271/" //LinkedIn link 
      target="_blank"
      rel="noopener noreferrer"
      className="btn-outline-hero flex-1 flex items-center justify-center"
    >
      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
      LinkedIn Profile
    </a>

  </div>
</Card>


            {/* Availability Status */}
            <Card className="glass p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full pulse-glow"></div>
                <h4 className="text-lg font-semibold text-foreground">Currently Available</h4>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I'm actively seeking internship opportunities starting from winter 2025. 
                Open to frontend development, full-stack development, and software engineering roles.
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="glass p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    First Name
                  </label>
                  <Input 
                    placeholder="John"
                    className="bg-secondary border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Last Name
                  </label>
                  <Input 
                    placeholder="Doe"
                    className="bg-secondary border-border focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Email Address
                </label>
                <Input 
                  type="email"
                  placeholder="john@example.com"
                  className="bg-secondary border-border focus:border-primary"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Subject
                </label>
                <Input 
                  placeholder="Internship Opportunity"
                  className="bg-secondary border-border focus:border-primary"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Message
                </label>
                <Textarea 
                  placeholder="Hi Purvi, I'd like to discuss an internship opportunity..."
                  rows={5}
                  className="bg-secondary border-border focus:border-primary resize-none"
                />
              </div>

              <Button type="submit" className="btn-hero w-full">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Send Message
              </Button>
            </form>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © 2025 Purvi Dhaigude. Designed and developed with ❤️ using React & TypeScript.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;