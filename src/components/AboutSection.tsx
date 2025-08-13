import { Card } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - About content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-primary font-space-grotesk">
                About Me
              </h2>
              <div className="w-20 h-1 bg-primary rounded-full mb-6"></div>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate <span className="text-primary font-medium">Full Stack Developer</span> and 
              fourth-year B.Tech Computer Science student with a strong foundation in web development. 
              I love creating responsive, user-friendly interfaces that combine functionality with 
              beautiful design.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey in tech is driven by curiosity and a desire to solve real-world problems 
              through code. I'm constantly learning new technologies and frameworks to stay current 
              with industry trends and best practices.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">What I bring to the table:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Strong problem-solving skills and analytical thinking</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Passion for clean, maintainable code and best practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Eager to learn and adapt to new technologies quickly</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Team collaboration and effective communication skills</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right side - Stats and highlights */}
          <div className="space-y-6">
            <Card className="glass p-6 card-hover">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">3+</div>
                  <div className="text-sm text-muted-foreground">Years of Study</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">4+</div>
                  <div className="text-sm text-muted-foreground">Projects Built</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">GPA</div>
                  <div className="text-sm text-muted-foreground">6.65</div>
                </div>
              </div>
            </Card>

            <Card className="glass p-6 card-hover">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Current Focus</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-sm">🎯</span>
                  </div>
                  <span className="text-muted-foreground">Seeking internship opportunities</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-sm">📚</span>
                  </div>
                  <span className="text-muted-foreground">Learning advanced React patterns</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary text-sm">🚀</span>
                  </div>
                  <span className="text-muted-foreground">Building full-stack projects</span>
                </div>
              </div>
            </Card>

            <Card className="glass p-6 card-hover">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Beyond Coding</h3>
              <p className="text-muted-foreground mb-3">
                I'm also passionate about <span className="text-primary font-medium">Kathak dance</span>, 
                which has taught me discipline, creativity, and attention to detail - skills that 
                translate beautifully into my approach to software development.
              </p>
              <div className="flex items-center gap-2 text-sm text-primary">
                <span>🏆</span>
                <span>8-Year Diploma in Kathak</span>
                <span>Gracefull dancing through 10+ Years of kathak</span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;