const sampleProfiles = [
  {
    id: "1",
    name: "Sarah Johnson",
    avatar: "/1.jpeg",
    gender: "Female",
    age: 32,
    pronouns: "She/Her",
    bio: "Senior Product Designer with 7 years of experience creating user-centered digital products.",
    email: "sarah.johnson@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    jobTitle: "Senior Product Designer",
    company: "Innovate Tech",
    skills: ["Figma", "Adobe XD", "User Research", "Prototyping", "UI/UX Design"],
    socialLinks: {
      linkedin: "linkedin.com/in/sarahjohnson",
      github: "github.com/sarahjohnson",
      twitter: "@sarahjohnson"
    },
    website: "sarahjohnson.design",
    about: `I am Sarah Johnson, a passionate Senior Product Designer with over seven years of experience in crafting user-centered digital solutions. 
    My expertise lies in turning complex problems into simple, elegant, and accessible interfaces that enhance user satisfaction. 
    At Innovate Tech, I’ve led cross-functional teams to design applications that improved customer engagement by 35%. 
    I have a strong background in design tools like Figma, Adobe XD, and InVision, which I use to bring concepts to life quickly and effectively. 
    Beyond technical skills, I emphasize user research and testing to ensure every product resonates with its intended audience. 
    I thrive in collaborative environments where creativity meets functionality. 
    My career highlights include redesigning a fintech app that increased daily active users by 50% within six months. 
    I am also passionate about mentoring junior designers and advocating for inclusive design practices. 
    Outside of work, I enjoy sketching, hiking, and volunteering for design workshops in local communities. 
    My ultimate goal is to continue creating meaningful products that not only solve problems but also bring joy to users.`
  },
  {
    id: "2",
    name: "Emily Davis",
    avatar: "/2.jpeg",
    gender: "Female",
    age: 28,
    pronouns: "She/Her",
    bio: "Full Stack Developer specializing in modern web technologies and cloud architecture.",
    email: "emily.davis@example.com",
    phone: "+1 (555) 987-6543",
    location: "New York, NY",
    jobTitle: "Full Stack Developer",
    company: "Cloud Solutions Inc.",
    skills: ["JavaScript", "React", "Node.js", "AWS", "Python", "Docker"],
    socialLinks: {
      linkedin: "linkedin.com/in/emilydavis",
      github: "github.com/emilydavis",
      twitter: "@emilydavis"
    },
    website: "emilydavis.dev",
    about: `I am Emily Davis, a Full Stack Developer with six years of hands-on experience in building scalable, cloud-based applications. 
    I specialize in React and Node.js, leveraging AWS infrastructure to deploy modern, secure, and reliable systems. 
    At Cloud Solutions Inc., I have contributed to projects that served over a million active users, ensuring performance optimization and fault-tolerant design. 
    I am an active open-source contributor, with several of my tools being used by developers across the globe. 
    Mentoring is a big part of my professional life — I have trained over 30 junior developers who now thrive in their careers. 
    I am passionate about automation, CI/CD pipelines, and creating developer-friendly environments. 
    My notable achievements include migrating a legacy system to microservices, reducing downtime by 80%. 
    I enjoy experimenting with new technologies like serverless computing and edge functions. 
    Outside of coding, I love photography, writing blogs about tech trends, and attending hackathons. 
    My vision is to build impactful digital products while nurturing the next generation of engineers.`
  },
  {
    id: "3",
    name: "Michael Chen",
    avatar: "/3.jpeg",
    gender: "Male",
    age: 35,
    pronouns: "He/Him",
    bio: "Software Engineering Manager with expertise in agile methodologies and team leadership.",
    email: "michael.chen@example.com",
    phone: "+1 (555) 456-7890",
    location: "Seattle, WA",
    jobTitle: "Engineering Manager",
    company: "Tech Growth Corp",
    skills: ["Leadership", "Agile", "Java", "Spring Boot", "Team Management"],
    socialLinks: {
      linkedin: "linkedin.com/in/michaelchen",
      github: "github.com/michaelchen",
      twitter: "@michaelchen"
    },
    website: "michaelchen.tech",
    about: `I am Michael Chen, an Engineering Manager with more than a decade of experience leading software teams toward excellence. 
    My core strength lies in building high-performing teams that thrive in agile environments. 
    At Tech Growth Corp, I lead a team of 25 engineers delivering enterprise-grade solutions using Java and Spring Boot. 
    I take pride in fostering a culture of collaboration, innovation, and continuous learning. 
    Over the years, I’ve successfully scaled engineering teams, implemented agile frameworks, and improved delivery speed by 40%. 
    My leadership philosophy emphasizes empathy, transparency, and empowerment. 
    One of my proudest achievements is leading a digital transformation project that helped a Fortune 500 client modernize its systems, saving millions in annual costs. 
    I believe in balancing technical depth with people management skills to ensure both product and personal growth. 
    I regularly speak at tech conferences on topics like leadership and organizational scaling. 
    Outside of work, I enjoy reading about history, mentoring startups, and hiking in the Pacific Northwest.`
  },
  {
    id: "4",
    name: "David Wilson",
    avatar: "/4.jpeg",
    gender: "Male",
    age: 41,
    pronouns: "He/Him",
    bio: "Data Scientist and Machine Learning Engineer passionate about AI applications.",
    email: "david.wilson@example.com",
    phone: "+1 (555) 234-5678",
    location: "Boston, MA",
    jobTitle: "Data Scientist",
    company: "AI Research Labs",
    skills: ["Python", "TensorFlow", "PyTorch", "Machine Learning", "Statistics"],
    socialLinks: {
      linkedin: "linkedin.com/in/davidwilson",
      github: "github.com/davidwilson",
      twitter: "@davidwilson"
    },
    website: "davidwilson.ai",
    about: `I am David Wilson, a Data Scientist and Machine Learning Engineer with over 12 years of experience in harnessing data for business impact. 
    At AI Research Labs, I focus on creating predictive models and deploying AI solutions that solve real-world challenges. 
    My expertise includes deep learning, natural language processing, and recommendation systems. 
    I have developed models that improved customer retention for e-commerce platforms by over 20%. 
    My approach combines solid statistical foundations with practical implementation skills using TensorFlow and PyTorch. 
    I have published several research papers in top AI journals and frequently collaborate with academic institutions. 
    Beyond technical work, I am passionate about ethical AI and regularly advocate for responsible data practices. 
    Teaching is another area I deeply value — I conduct workshops for aspiring data scientists worldwide. 
    I thrive in solving complex, unstructured problems that require innovative thinking. 
    When I’m not working, you’ll find me playing chess, exploring classical music, or cycling around Boston.`
  },
  {
    id: "5",
    name: "Robert Taylor",
    avatar: "/5.jpeg",
    gender: "Male",
    age: 29,
    pronouns: "He/Him",
    bio: "DevOps Engineer with focus on cloud infrastructure and automation pipelines.",
    email: "robert.taylor@example.com",
    phone: "+1 (555) 876-5432",
    location: "Austin, TX",
    jobTitle: "DevOps Engineer",
    company: "Infrastructure Solutions",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Linux"],
    socialLinks: {
      linkedin: "linkedin.com/in/roberttaylor",
      github: "github.com/roberttaylor",
      twitter: "@roberttaylor"
    },
    website: "roberttaylor.devops",
    about: `I am Robert Taylor, a DevOps Engineer passionate about automating infrastructure and improving deployment pipelines. 
    With six years of experience, I’ve designed cloud-native solutions that scale effortlessly and support mission-critical applications. 
    At Infrastructure Solutions, I specialize in Kubernetes, Docker, and Terraform to deliver resilient and self-healing systems. 
    My philosophy is to bridge the gap between development and operations, ensuring seamless collaboration. 
    I’ve built CI/CD pipelines that reduced deployment time from hours to just minutes, significantly increasing team productivity. 
    Security and observability are key areas I prioritize in every solution I deliver. 
    I love exploring new DevOps practices and experimenting with Infrastructure as Code tools. 
    My notable contributions include leading a cloud migration project that improved system uptime by 99.9%. 
    Outside of work, I actively contribute to DevOps communities, write blogs, and create tutorials for beginners. 
    In my free time, I enjoy rock climbing, traveling, and exploring Austin’s vibrant tech ecosystem.`
  }
];

module.exports = sampleProfiles;
