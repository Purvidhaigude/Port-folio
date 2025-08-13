import { Card } from '@/components/ui/card';

const SkillsSection = () => {
  const technicalSkills = [
    {
      category: "Frontend Development",
      skills: [
        { name: "HTML5", level: 90, icon: "🌐" },
        { name: "CSS3", level: 85, icon: "🎨" },
        { name: "JavaScript", level: 80, icon: "⚡" },
        { name: "React.js", level: 75, icon: "⚛️" },
        { name: "Responsive Design", level: 85, icon: "📱" }
      ]
    },
    {
      category: "Backend & Languages",
      skills: [
        { name: "Python", level: 80, icon: "🐍" },
        { name: "SQL", level: 75, icon: "🗄️" },
        { name: "Node.js", level: 60, icon: "🚀" },
        { name: "REST APIs", level: 65, icon: "🔗" }
      ]
    },
    {
      category: "Tools & Frameworks",
      skills: [
        { name: "VS Code", level: 90, icon: "💻" },
        { name: "Figma", level: 70, icon: "🎯" },
        { name: "Bootstrap", level: 80, icon: "🌟" },
        { name: "Git & github", level: 70, icon: "📂" }
      ]
    }
  ];

  const softSkills = [
    { name: "Problem Solving", icon: "🧩" },
    { name: "Team Collaboration", icon: "👥" },
    { name: "Communication", icon: "💬" },
    { name: "Adaptability", icon: "🔄" },
    { name: "Time Management", icon: "⏰" },
    { name: "Critical Thinking", icon: "🎯" }
  ];

  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-primary font-space-grotesk">
            Skills & Tools
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I use to bring ideas to life
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {technicalSkills.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="glass p-6 card-hover skill-glow">
              <h3 className="text-xl font-semibold mb-6 text-foreground flex items-center gap-2">
                <span className="text-primary">⚡</span>
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary to-primary-glow h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-foreground">Soft Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {softSkills.map((skill, index) => (
              <Card key={index} className="glass p-4 text-center card-hover skill-glow">
                <div className="text-2xl mb-2">{skill.icon}</div>
                <div className="text-sm font-medium text-foreground">{skill.name}</div>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications & Achievements */}
        <Card className="glass p-8">
          <h3 className="text-2xl font-bold mb-6 text-center text-foreground">Certifications & Achievements</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary text-sm">🏆</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">HackerRank Certificate in Python</h4>
                  <p className="text-sm text-muted-foreground">Validated proficiency in Python programming</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary text-sm">📜</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">8-Year Diploma in Kathak</h4>
                  <p className="text-sm text-muted-foreground">Classical Indian dance form - demonstrates discipline & creativity</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary text-sm">🎯</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Academic Excellence</h4>
                  <p className="text-sm text-muted-foreground">Consistent performance in Computer Science coursework</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary text-sm">💡</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Project Portfolio</h4>
                  <p className="text-sm text-muted-foreground">Multiple full-stack web applications and frontend projects</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default SkillsSection;