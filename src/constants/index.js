import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    aqiinsight,
    livesentimentanalysis,
    chatpdfaws,
    javaapplication,
    safesurfai,
    trafficflow,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "about",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Data Structures and Algorithms",
      icon: web,
    },
    {
      title: "Machine Learning",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Object Oriented Programming",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Java",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Machine Learning",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Figma",
      icon: figma,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Chat PDF using AWS Bedrock",
      description:
        "An application enabling users to Chat with PDF using AWS Bedrock. Integrated 2 models Llama2 and Claude. Used Python Flask, HTML/CSS, JavaScript, and AWS Bedrock for seamless frontend-backend integration. User-friendly interface for chatting with PDFs. Providing clear answers utilizing Generative AI Concepts.",
      tags: [
        {
          name: "AWS",
          color: "blue-text-gradient",
        },
        {
          name: "Flask",
          color: "green-text-gradient",
        },
        {
          name: "HTML/CSS",
          color: "pink-text-gradient",
        },
      ],
      image: chatpdfaws,
      source_code_link: "https://github.com/umangmtiwari/chatpdfaws",
    },
    {
      name: "AQI Insight",
      description:
        "Developed a React JS application, that provides real-time and prediction of AQI for any locations worldwide. Optimized to achieve a GTmetrix Performance Grade of 97% and Lighthouse Web Vitals with a swift Loading Speed (LCP) of 628 ms. Utilized ML to predict pollutant levels like O3, PM 1.0, PM 2.5 for next 8 Days.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "Machine Learning",
          color: "pink-text-gradient",
        },
      ],
      image: aqiinsight,
      source_code_link: "https://github.com/umangmtiwari/AQI-Insight",
    },
    {
      name: "Live Sentiment Analysis",
      description:
        "Real-Time sentiment analysis on Live Voice using Flask, Natural Language Processing, JavaScript, and HTML/CSS. Deployed optimized algorithms to achieve displaying results within 240 ms. Live points of Negative, Neutral, Positive & Compound are displayed based upon the speech.",
      tags: [
        {
          name: "Natural Language Processing",
          color: "blue-text-gradient",
        },
        {
          name: "Flask",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: livesentimentanalysis,
      source_code_link: "https://github.com/umangmtiwari/Sentiment-Analysis",
    },
    {
      name: "Java Chatting Application",
      description:
        "Chatting client-server architecture for seamless communication between two users using Java Swing and Server Socket programming. Utilized Java’s I/O streams and socket connections achieving an average message transmission latency of 10 milliseconds.",
      tags: [
        {
          name: "Java Swing",
          color: "blue-text-gradient",
        },
        {
          name: "Server Socket Programming",
          color: "green-text-gradient",
        },
        {
          name: " Java’s I/O Streams",
          color: "pink-text-gradient",
        },
      ],
      image: javaapplication,
      source_code_link: "https://github.com/umangmtiwari/Java-Chatting-Application",
    },
    {
      name: "SafeSurfAI",
      description:
        "Spearheaded the development of SafeSurfAI, a Phishing Website Detection system using Python, Flask, JavaScript, RandomForestClassifier and HTML/CSS. Analyzing URLs based on 16+ parameters, using ML techniques like RandomForestClassifier, achieving average accuracy rate of 95%. Integrated a Telegram Bot for mobile users for URL analysis on mobile handsets on-the-go",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "HTML/CSS",
          color: "green-text-gradient",
        },
        {
          name: "RandomForestClassifier",
          color: "pink-text-gradient",
        },
      ],
      image: safesurfai,
      source_code_link: "https://github.com/umangmtiwari/SafeSurfAI",
    },
    {
      name: "Traffic Flow Monitoring and Prediction using Artificial Intelligence",
      description:
        "AI-driven system to monitor and predict traffic flow, utilizing real-time vehicle monitoring for efficient traffic management. Implemented alert based on vehicle count, once triggered alert message is directly send to mobile devices with photo of the congestion. Designed data logging functionality to store vehicle count data, enabling detailed analysis and using machine learning to forecast future traffic patterns.",
      tags: [
        {
          name: "YOLO",
          color: "blue-text-gradient",
        },
        {
          name: "Machine Learning",
          color: "green-text-gradient",
        },
        {
          name: "Telegram APIs",
          color: "pink-text-gradient",
        },
      ],
      image: trafficflow,
      source_code_link: "https://github.com/umangmtiwari/Traffic-Flow-Monitoring-and-Prediction-using-Artificial-Intelligence",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  