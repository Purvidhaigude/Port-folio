import { Card } from '@/components/ui/card';

const EducationSection = () => {
  const education = [
    {
      period: "Jul 2022 - Present",
      degree: "B.Tech in Computer Science",
      institution: "Raja Gandhi Proudyogiki Vishwavidyalaya (GPA: 6.65)",
      description: "Currently pursuing Bachelor of Technology in Computer Science with focus on software development, data structures, algorithms, and web technologies.",
      status: "In Progress",
      highlights: ["Web Development", "Data Structures", "Software Engineering", "Database Systems"]
    },
    {
      period: "Jul 2019 - May 2022",
      degree: "XII in PCMB/Board",
      institution: "GPA: 66.66",
      description: "Completed higher secondary education with Physics, Chemistry, Mathematics, and Biology, building strong analytical and problem-solving foundation.",
      status: "Completed",
      highlights: ["Mathematics", "Physics", "Chemistry", "Biology"]
    }
  ];

  const timeline = [
    {
      year: "2024",
      title: "Advanced Projects & Internship Prep",
      description: "Building complex full-stack applications and preparing for internship opportunities",
      icon: "🚀"
    },
    {
      year: "2023",
      title: "Specialized Learning",
      description: "Deep dive into React.js, Python development, and AI/ML fundamentals",
      icon: "📚"
    },
    {
      year: "2022",
      title: "Started B.Tech Journey",
      description: "Began Computer Science degree, learned programming fundamentals",
      icon: "🎓"
    },
    {
      year: "2021",
      title: "Web Development Discovery", 
      description: "First introduction to HTML, CSS, and web development concepts",
      icon: "💻"
    }
  ];

  const certifications = [
    {
      title: "HackerRank Certificate in Python",
      issuer: "HackerRank",
      date: "2023",
      description: "Validated proficiency in Python programming with problem-solving and coding challenges",
      icon: "🐍"
    },
    {
      title: "8-Year Diploma in Kathak",
      issuer: "Dance Academy",
      date: "Completed",
      description: "Classical Indian dance form certification demonstrating discipline, creativity, and performance skills",
      icon: "💃"
    }
  ];

  return (
    <section id="education" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-primary font-space-grotesk">
            Education & Timeline
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey and professional development milestones
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">Education</h3>
            {education.map((edu, index) => (
              <Card key={index} className="glass p-6 card-hover">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="text-sm text-primary font-medium mb-1">{edu.period}</div>
                      <h4 className="text-lg font-semibold text-foreground mb-1">{edu.degree}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{edu.institution}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      edu.status === 'Completed' ? 'bg-green-500/20 text-green-300' : 'bg-yellow-500/20 text-yellow-300'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((highlight, hIndex) => (
                      <span 
                        key={hIndex}
                        className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Timeline */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">Learning Timeline</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/30"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-start gap-4 pb-8">
                  {/* Timeline dot */}
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-sm z-10">
                    {item.icon}
                  </div>
                  
                  {/* Content */}
                  <Card className="glass p-4 flex-1 card-hover">
                    <div className="text-sm text-primary font-medium mb-1">{item.year}</div>
                    <h4 className="text-base font-semibold text-foreground mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">Certifications</h3>
            {certifications.map((cert, index) => (
              <Card key={index} className="glass p-6 card-hover skill-glow">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-lg">
                      {cert.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground mb-1">{cert.title}</h4>
                      <p className="text-sm text-primary font-medium mb-1">{cert.issuer}</p>
                      <p className="text-xs text-muted-foreground mb-3">{cert.date}</p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </Card>
            ))}

            {/* Additional Info */}
            <Card className="glass p-6">
              <h4 className="text-lg font-semibold text-foreground mb-4">Academic Achievements</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-xs">📊</span>
                  </div>
                  <span className="text-sm text-muted-foreground">Consistent academic performance</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-xs">💻</span>
                  </div>
                  <span className="text-sm text-muted-foreground">Active in coding projects and assignments</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-xs">🎯</span>
                  </div>
                  <span className="text-sm text-muted-foreground">Focus on practical application of concepts</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;