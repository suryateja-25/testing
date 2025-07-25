/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000, // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true, // Set to false to use static SVG
};

const greeting = {
  username: "Surya Karri",
  title: "Hello all, I am Surya Karri",
  subTitle: emoji(
    "I am pursuing my Master's in Computer Science at the University of Nebraska at Omaha, passionate about building impactful software solutions and exploring cloud technologies."
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/saisahiti",
  linkedin: "https://www.linkedin.com/in/sahiti-chittem/",
  gmail: "schittem@buffalo.edu",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Innovative software developer with three years of hands-on experience in application design, testing, data visualization tools, and data science technologies. Well-versed in Agile methodologies and coding languages, dedicated to developing creative solutions that align with business goals and requirements.",
  skills: [],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

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
      skillName: "C",
      fontAwesomeClassname: "fas fa-terminal",
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-code",
    },
    {
      skillName: "R",
      fontAwesomeClassname: "fas fa-server",
    },
    {
      skillName: "OOPs",
      fontAwesomeClassname: "far fa-user",
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University at Buffalo",
      logo: require("./assets/images/ub logo.png"),
      subHeader: "Master of Science in Computer Science and Information",
      duration: "August 2022 - December 2023",
      desc: "Coursework",
      descBullets: [
        "Statistical Data Mining I (Unsupervised and Supervised Learning), Python Programming",
        "Probability Data Analysis Using R, DBMS, Cybersecurity Privacy and ethics, Machine Learning, Deep Learning",
      ],
    },
    {
      schoolName: "Chaitanya Bharathi Institute of Technology",
      logo: require("./assets/images/cbit logo.png"),
      subHeader: "Bachelor of Engineering in Computer Science",
      duration: "August 2020 - September 2020",
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend",
      progressPercentage: "70%",
    },
    {
      Stack: "Programming",
      progressPercentage: "60%",
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Research Assistant",
      company: "University at Buffalo",
      companylogo: require("./assets/images/bull_logo.jpeg"),
      date: "May 2023 – August 2023",
      descBullets: [
        "Analyzed TEDS data to determine Opioid Use Disorder (OUD) prevalence and identified key trends, informing healthcare policies for OUD crisis management",
        "Innovated the use of Generative Adversarial Networks (GANs) to replicate real-world OUD data patterns, achieving a 70% accuracy in generating synthetic OUD data",
      ],
    },
    {
      role: "Software Engineer II",
      company: "JPMorgan Chase",
      companylogo: require("./assets/images/jpmc logo.png"),
      date: "August 2020 – July 2022",
      descBullets: [
        "Leveraged a Spring-Boot API for ADLDS and Sybase database interfacing, resulting in an 80% efficiency boost in transfers",
        "Developed a Python script that accurately compared over 10,000 records across multiple databases with an impressive 95% accuracy rate.",
        "Enhanced Migration application to facilitate seamless communication among various databases, handling over 100,000 records efficiently.",
        "Created a ReactJS-Spring Boot dashboard that significantly improved team productivity by 40%, serving more than 50 team members.",
        "Collaborated with a nonprofit website, boosting engagement by 25% for the Center for Historic Houses.",
        "Embraced agile practices which improved overall product development productivity",
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "JPMorgan Chase",
      companylogo: require("./assets/images/jpmc logo.png"),
      date: "Jan 2020 – July 2020",
      descBullets: [
        "Gained expertise in Core Java, LDAP, and Spring Boot through dedicated professional development, enhancing technical skills",
        "Proficiently implemented a Spring-Boot application, facilitating seamless cross-database interaction",
        "Mastered software testing via unit and integration testing across multiple projects",
        "Acquired proficiency in setting up and maintaining CI/CD pipelines using Jenkins, resulting in increased efficiency",
        "Demonstrated an in-depth understanding of nuances like Splunk dashboard and Swagger configurations",
      ],
    },
  ],
};

// Some big projects you have worked on

const projects = {
  title: "Academic Projects",
  projects: [
    {
      image: require("./assets/images/xgboost.png"),
      projectName: "Prediction of House Prices using XGBoost",
      //projectDesc: "Constructed and assessed various machine learning models, including XGBoost, Ridge, Lasso, and Random Forest, to predict property prices. After rigorous evaluation, the XGBoost model emerged as the top performer, achieving an impressive 90% accuracy rate. This success was achieved while working with a housing dataset comprising 1,460 rows and 81 diverse features related to housing. The utilization of XGBoost in this context not only demonstrates its superior predictive capabilities but also underscores its suitability for handling complex real estate datasets",
      projectDesc: (
        <ul>
          <li>
            <b>Skills/Technologies Used: </b> R, XGBoost,Random Forest, Jupyter
            Notebook{" "}
          </li>
          <li>
            <b>Brief Description: </b>Constructed and assessed various machine
            learning models, including XGBoost, Ridge, Lasso, and Random Forest,
            to predict property prices.
          </li>
        </ul>
      ),
      footerLink: [
        {
          name: "Visit Github Repo",
          url: "https://github.com/saisahiti/houseprices-prediction",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require("./assets/images/crime-analysis.jpeg"),
      projectName: "Crime Data Analysis in Baltimore",
      projectDesc: (
        <ul>
          <li>
            <b>Skills/Technologies Used:</b> Python, SQL, Matplotlib, Seaborn,
            Folium
          </li>
          <li>
            <b>Brief Description: </b> Analyzed and visualized crime data to
            pinpoint hotspots and enhance community safety through data-driven
            insights{" "}
          </li>
        </ul>
      ),
      footerLink: [
        {
          name: "Visit Github Repo",
          url: "https://github.com/saisahiti/crime-data-analysis",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require("./assets/images/captcha-image.png"),
      projectName: "Captcha Recognition using Deep Learning",
      projectDesc: (
        <ul>
          <li>
            <b>Skills/Technologies Used:</b> Python, TensorFlow, OpenCV, Deep
            Learning
          </li>
          <li>
            <b>Brief Description: </b> Enhanced web security with an advanced
            multi-CNN system, effectively safeguarding sensitive user data and
            countering evolving cybersecurity threats{" "}
          </li>
        </ul>
      ),
      footerLink: [
        {
          name: "Visit Github Repo",
          url: "https://github.com/saisahiti/captcha-recognition",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require("./assets/images/sql.jpeg"),
      projectName: "Wireless Inventory Management System",
      projectDesc: (
        <ul>
          <li>
            <b>Skills/Technologies Used:</b> SQL, Database Management, Lucid
            Chart
          </li>
          <li>
            <b>Brief Description: </b> Designed an agile SQL-based inventory
            management system with optimized database structures, ER diagrams,
            and UML diagrams, enhancing operational efficiency and reliability
          </li>
        </ul>
      ),
      footerLink: [
        {
          name: "Visit Github Repo",
          url: "https://github.com/saisahiti/crime-data-analysis",
        },
        //  you can add extra buttons here.
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
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
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements, Certifications and Hackathons 🏆 "),
  subtitle:
    "Achievements, Certifications, Hackathons and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Code for Good Hackathon 2019",
      subtitle: (
        <div>
          <p>
            Earning the 2nd prize in the 2019 Code for Good hackathon was a
            rewarding achievement, underscoring the effective teamwork of our
            six-member group in crafting a Java-Firebase Android app.{" "}
            <b>
              <a
                href="https://github.com/hyderabad19/team-6"
                target="_blank"
                rel="noreferrer"
              >
                GitHub Link
              </a>
            </b>
          </p>
        </div>
      ),
      image: require("./assets/images/cfg.jpeg"),
    },
    {
      title: "AWS Certified Developer",
      subtitle: (
        <div>
          <p>
            Proud to have achieved te AWS Certified Developer Associate
            certification, this validates my expertise in developing and
            deploying applications on the Amazon web services cloud platform.{" "}
            <b>
              <a
                href="https://udemy-certificate.s3.amazonaws.com/image/UC-00793609-0079-41f7-b9c2-78ba34b9ea8a.jpg"
                target="_blank"
                rel="noreferrer"
              >
                View my Certificate
              </a>
            </b>
          </p>
        </div>
      ),
      image: require("./assets/images/aws.png"),
    },
    {
      title: "Apache Kafka V3 Certification",
      subtitle: (
        <div>
          <p>
            Proud to have earned the Apache Kafka V3 certification, showcases my
            proficiency in utilizing Kafka powerful streaming platform for
            building real-time data pipelines and event-driven applications.{" "}
            <b>
              <a
                href="https://udemy-certificate.s3.amazonaws.com/image/UC-7b437d91-064b-402a-a0d8-d6fcc80075a3.jpg"
                target="_blank"
                rel="noreferrer"
              >
                View my Certificate
              </a>
            </b>
          </p>
        </div>
      ),
      image: require("./assets/images/kafka.jpeg"),
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Thanks for checking out my portfolio! I'm always open to new opportunities, collaborations, or just a good tech conversation. Feel free to connect with me on LinkedIn or drop me an email.",
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
