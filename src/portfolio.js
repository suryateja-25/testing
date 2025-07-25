import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000,
};

const illustration = {
  animated: true,
};

const greeting = {
  username: "Surya Karri",
  title: "Hello all, I am Surya Karri",
  subTitle: emoji(
    "I am pursuing my Master's in Computer Science at the University of Nebraska at Omaha, passionate about building impactful software solutions and exploring cloud technologies."
  ),
  resumeLink: "",
  displayGreeting: true,
};

const socialMediaLinks = {
  github: "https://github.com/suryateja-25",
  linkedin: "https://www.linkedin.com/in/suryateja25/",
  gmail: "k.suryateja05@gmail.com",
  display: true,
};

const skillsSection = {
  title: "What I do",
  subTitle:
    "Cloud-focused full-stack developer with 3 years of experience designing and deploying scalable applications using React, .NET, AWS, and Snowflake. Adept at building efficient, secure solutions and leveraging modern data platforms to drive business insights.",
  skills: [],

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java",
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "C#",
      fontAwesomeClassname: "fas fa-code",
    },
    {
      skillName: "OOPs",
      fontAwesomeClassname: "far fa-user",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "Vue.js",
      fontAwesomeClassname: "fab fa-vuejs",
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fas fa-code-branch",
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "Snowflake",
      fontAwesomeClassname: "fas fa-snowflake",
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws",
    },
    {
      skillName: "Terraform",
      fontAwesomeClassname: "fas fa-server",
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fas fa-cogs",
    },
  ],
  display: true,
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University of Nebraska at Omaha",
      logo: require("./assets/images/uno.png"),
      subHeader: "Master of Science in Management Information Systems (MIS)",
      duration: "August 2022 - May 2024",
      desc: "Coursework",
      descBullets: [
        "Coursework included DBMS, Cybersecurity, Privacy and Ethics, Machine Learning, and Deep Learning",
        "Hands-on experience with AWS, React, Vue.js, and Django through academic and personal projects",
      ],
    },
    {
      schoolName: "Jawaharlal Nehru Technological University, Kakinada",
      logo: require("./assets/images/Jntuk.png"),
      subHeader:
        "Bachelor of Technology in Electronics and Communication Engineering (ECE)",
      duration: "August 2018 - May 2022",
    },
  ],
};

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Backend C#",
      progressPercentage: "90%",
    },
    {
      Stack: "Frontend REACT NEXT.JS",
      progressPercentage: "70%",
    },
    {
      Stack: "Cloud Computing",
      progressPercentage: "60%",
    },
  ],
  displayCodersrank: true,
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Developer I",
      company: "OneStaff Medical",
      companylogo: require("./assets/images/osm.png"),
      date: "July 2024 – Present",
      descBullets: [
        "Developing responsive front-end features using React, Next.js, and Material-UI to support staffing operations",
        "Building secure REST APIs with ASP.NET Core and integrating AWS services like S3 and Cognito",
        "Working with recruiters and internal teams to deliver features that improve efficiency",
        "Managing CI/CD pipelines with Jenkins, version control with Bitbucket, and monitoring with Grafana",
        "Following Agile practices and writing unit tests using GenFu, with API documentation in Swagger",
      ],
    },
    {
      role: "Software Development Intern",
      company: "Physicians Mutual",
      companylogo: require("./assets/images/pmic.png"),
      date: "June 2023 – July 2024",
      descBullets: [
        "Developed internal web applications using React, MUI, and .NET to streamline business workflows",
        "Built and integrated RESTful APIs to support data-driven features across multiple departments",
        "Implemented CI/CD pipelines using Jenkins to automate deployments and improve release efficiency",
        "Worked with AWS services like S3 and CloudWatch for application deployment and monitoring",
        "Collaborated with product managers and senior engineers to deliver scalable, production-ready features",
      ],
    },
    {
      role: "Student Worker & Grader",
      company: "University of Nebraska at Omaha",
      companylogo: require("./assets/images/uno.png"),
      date: "August 2022 – April 2023",
      descBullets: [
        "Assisted faculty in grading assignments and exams for graduate-level MIS courses, ensuring accurate and timely feedback for students",
        "Provided support with academic and administrative tasks including data entry, documentation, and organizing class materials",
      ],
    },
  ],
};

const projects = {
  title: "Academic Projects",
  projects: [
    {
      image: require("./assets/images/cORA.png"),
      projectDate: "Jan 2023 – May 2024",
      projectName: "cORA25 - Commingled Remains Analytics",
      projectDesc: (
        <ul>
          <li>
            <b>Skills/Technologies Used:</b> Python, SQL, Matplotlib, Seaborn,
            Folium
          </li>
          <li>
            <b>Brief Description:</b> Designed an interactive data analysis tool
            to explore Baltimore crime datasets. Leveraged visualization
            libraries like Seaborn and Folium to identify crime trends,
            geographic hotspots, and provide actionable insights for improving
            public safety and resource allocation.
          </li>
        </ul>
      ),
    },
    {
      image: require("./assets/images/PPBT.png"),
      projectDate: "Aug 2023 – Dec 2023",
      projectName: "PBBT Benchmarking Tool",
      projectDesc: (
        <ul>
          <li>
            <b>Skills/Technologies Used:</b> Laravel, Vue.js, PHP, Docker,
            Cypress, CI/CD, Postman, Terraform
          </li>
          <li>
            <b>Brief Description:</b> Developed a web-based benchmarking
            platform to evaluate school performance using IDEPS and POLTS data.
            Implemented automated testing with Cypress, integrated APIs using
            Postman, and deployed the application using Laravel Forge with CI/CD
            pipelines.
          </li>
        </ul>
      ),
    },
    {
      image: require("./assets/images/cK.png"),
      projectDate: "Jan 2023 – May 2023",
      projectName: "CK Real Estate Platform",
      projectDesc: (
        <ul>
          <li>
            <b>Skills/Technologies Used:</b> Django, JavaScript, HTML, CSS,
            Agile Methodologies, Test Automation
          </li>
          <li>
            <b>Brief Description:</b> Developed a dynamic real estate web
            platform using Django to help users search for rental and sale
            properties based on preferences. Implemented user-friendly
            interfaces, robust search functionalities, and followed Agile
            development practices to ensure timely delivery and efficient
            collaboration.
          </li>
        </ul>
      ),
    },
    {
      image: require("./assets/images/wordPress.png"),
      projectDate: "Aug 2022 – Sep 2023",
      projectName: "WordPress Website on AWS",
      projectDesc: (
        <ul>
          <li>
            <b>Skills/Technologies Used:</b> WordPress, AWS EC2, S3, Route 53,
            MySQL, VPC, CloudWatch
          </li>
          <li>
            <b>Brief Description:</b> Deployed a secure and scalable WordPress
            website using AWS services. Hosted the frontend on an EC2 instance,
            managed media and backups in S3, configured DNS with Route 53, and
            set up a MySQL database in a private subnet. Ensured high
            availability, cost efficiency, and real-time performance monitoring
            with CloudWatch.
          </li>
        </ul>
      ),
    },
  ],
  display: true,
};

const personalProjects = {
  title: "Personal Projects",
  projects: [
    {
      image: require("./assets/images/stock-trading.jpeg"),
      projectName: "Real-Time NYSE Stock Trading Platform",
      projectDesc: (
        <ul>
          <li>
            <b>Skills/Technologies Used:</b> React.js, JavaScript, Kafka,
            Python, MongoDB{" "}
          </li>
          <li>
            <b>Brief Description: </b>Employs React.js and Kafka to deliver
            real-time data streams and interactive stock charts, providing
            traders with valuable insights for informed decision-making
          </li>
        </ul>
      ),
    },
    {
      image: require("./assets/images/supply-chain.jpg"),
      projectName: "Automated Supply Chain Management System",
      projectDesc: (
        <ul>
          <li>
            <b>Skills/Technologies Used:</b> Java, OOPs, JSP, MYSQL, Tomcat{" "}
          </li>
          <li>
            <b>Brief Description: </b>Innovative project automates and optimizes
            supply chain management, ensuring accuracy and timely deliveries
            using Java, MySQL, and structured software engineering
          </li>
        </ul>
      ),
    },
  ],
  display: false,
};

const achievementSection = {
  title: emoji("Certifications 🏆 "),

  achievementsCards: [
    {
      title: "AWS Certified Solutions Architect",
      subtitle: (
        <div>
          <p>
            Successfully earned the AWS Certified Solutions Architect –
            Associate credential, demonstrating expertise in designing scalable
            and resilient cloud solutions on AWS.{" "}
            <b>
              <a
                href="https://www.credly.com/badges/3413a341-d4c4-42ac-ab9f-80ce6f30003e/linked_in_profile"
                target="_blank"
                rel="noreferrer"
              >
                View my Badge
              </a>
            </b>
          </p>
        </div>
      ),
      image: require("./assets/images/aws.png"),
    },
    {
      title: "Snowflake SnowPro Core Certification",
      subtitle: (
        <div>
          <p>
            Successfully achieved the SnowPro Core Certification, validating
            deep knowledge in Snowflake architecture, data loading, performance
            optimization, and secure data sharing within the cloud data
            platform.{" "}
            <b>
              <a
                href="https://achieve.snowflake.com/b91d46ef-a163-4468-9a03-577534b11299#acc.lts0v4RQ"
                target="_blank"
                rel="noreferrer"
              >
                View my Certificate
              </a>
            </b>
          </p>
        </div>
      ),
      image: require("./assets/images/snowFlake.png"),
    },
  ],
  display: true,
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "I'm always open to new opportunities, collaborations, or just a good tech conversation. Feel free to connect with me on LinkedIn or drop me an email.",
  number: "+1 402-504-2914",
  email_address: "k.suryateja05@gmail.com",
};
export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  projects,
  personalProjects,
  achievementSection,
  contactInfo,
};
