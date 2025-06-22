import { BadgeCheck, Code2, Rocket, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section className="px-6 py-16 bg-gradient-to-br from-white to-indigo-50" id="about">
      <div className="max-w-4xl mx-auto bg-white border border-indigo-100 shadow-xl rounded-2xl p-8 space-y-6">
        <div className="flex items-center gap-2 text-indigo-600 font-semibold text-lg">
          <BadgeCheck className="w-5 h-5" />
          About Me
        </div>

        <p className="text-gray-700 text-base leading-relaxed">
          I'm a <strong className="text-indigo-700">MERN stack developer</strong> passionate about building high-performance full-stack applications.
          I also work with technologies like <strong>Go</strong>, <strong>Fiber</strong>, <strong>Next.js</strong>, <strong>TypeScript</strong>, and <strong>DevOps</strong>.
          My focus is on scalable systems, clean code, and intuitive user experiences.
        </p>

        <div>
          <h3 className="font-semibold text-gray-900 flex items-center gap-2 text-lg mb-2">
            <Rocket className="w-5 h-5 text-purple-500" />
            Projects I'm Building
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>
              <span className="font-medium text-gray-800">Smart Interview Platform</span> – An AI-driven platform to simulate, score, and improve interview readiness.
            </li>
            <li>
              <span className="font-medium text-gray-800">GitHub Issue Checker</span> – A live tool to monitor GitHub issues across multiple repositories and alert developers in real-time.
            </li>
          </ul>
        </div>

        <div className="flex flex-wrap gap-4 pt-4 text-indigo-600">
          <div className="flex items-center gap-2">
            <Code2 className="w-4 h-4" />
            Writing clean, maintainable code.
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            Exploring the latest in web innovation.
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
