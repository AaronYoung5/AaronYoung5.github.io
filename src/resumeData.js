let resumeData = {
  imagebaseurl: "https://AaronYoung5.github.io/",
  name: "Aaron Young",
  role: "Mechanical and Software Engineer",
  roleDescription:
    "I am an ambitious undergraduate student at the University of Wisconsin - Madison. As a Mechanical Engineering and Computer Science major, I focus on balancing a rigorous course load with an enriching extracurricular experience. At UW-Madison, I have joined three student organizations that augment the education I receive in the classroom.",
  socialLinks: [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/aaronryoung5/",
      className: "fa fa-linkedin",
    },
    {
      name: "github",
      url: "http://github.com/AaronYoung5",
      className: "fa fa-github",
    },
  ],
  aboutme:
    "I am an ambitious undergraduate student at the University of Wisconsin - Madison. As a Mechanical Engineering and Computer Science major, I focus on balancing a rigorous course load with an enriching extracurricular experience. At UW-Madison, I have joined three student organizations that augment the education I receive in the classroom.",
  address: "9328 Spirit St, Middleton WI, 53562",
  phone: "(608) 512-9796",
  website: "https://rbhatia46.github.io",
  education: [
    {
      UniversityName: "University of Wisconsin - Madison",
      specialization: "BS Mechanical Engineering & BS Computer Science",
      MonthOfStarting: "Sept",
      YearOfStarting: "2018",
      MonthOfLeaving: "May",
      YearOfLeaving: "2022",
      GPA: "3.9",
      Achievements:
        "Dean's List each semester <br>David C. Sparker Scholarship Recipient<br>Pashelk, August and Jane Scholarship Recipient<br>Rexford Fluno SAE Scholarship Recipient<br>",
    },
  ],
  work: [
    {
      CompanyName: "Tesla",
      specialization: "ADAS Testing Engineer Intern",
      MonthOfStarting: "June",
      YearOfStarting: "2021",
      description:
        "- Supporting Active Safety team on track days, assisting with various ADAS related tests\n- Working with Autopilot team to create simulation scenarios that model domestic and international ADAS rating protocols such as NHTSA, IIHS, and Euro NCAP\n- Building a portable computer to analyze data on the track and reduce the need to configure sensors on each test day",
    },
    {
      CompanyName: "Simulation Based Engineering Laboratory (SBEL)",
      specialization: "Undergraduate Researcher",
      MonthOfStarting: "May",
      YearOfStarting: "2019",
      description:
        "- Working with the open source, physics based simulation framework Project Chrono\n- Researching and implementing end-to-end reinforcement learning based autonomous algorithms to control simulated vehicles through complex environments\n- Developing a scalable, multi-agent framework for ProjectChrono as a means to distribute vehicle dynamic computation between independent computers",
    },
    {
      CompanyName: "Wisconsin Autonomous",
      specialization: "President",
      MonthOfStarting: "September",
      YearOfStarting: "2018",
      description:
        "-Leading 30 undergraduate students to compete against numerous domestic and international universities in competitions such as the Indy Autonomous Challenge and AutoDrive Challenge II\n-Developing an open source, multi-platform and multi-purpose simulation framework utilized by team members to test complete or partial software stacks\n-Researching and implementing optimization based control strategies, deep learning image recognition models and mapping algorithms for autonomous racing applications",
    },
    {
      CompanyName: "NASA Jet Propulsion Laboratory",
      specialization: "Software Engineering Intern",
      MonthOfStarting: "Feb",
      YearOfStarting: "2021",
      MonthOfLeaving: "May",
      YearOfLeaving: "2021",
      description:
        "- Worked in the DARTS Lab, which focused on the development of a simulation infrastructure to be used to test algorithms for terrestrial and space robots\n- Designed and implemented a real-time, physics based sensor modeling pipeline built on top of the OptiX ray tracing engine\n- Collaborated with other JPL teams, including Small Bodies and Terrain Relative Navigation",
    },
    {
      CompanyName: "Argo AI",
      specialization: "Software Engineering Intern",
      MonthOfStarting: "May",
      YearOfStarting: "2020",
      MonthOfLeaving: "Nov",
      YearOfLeaving: "2020",
      description: "<em>Located in their Munich offices.</em>",
      Achievements: "NOTE: CANCELLED DUE TO COVID19",
    },
  ],
  skillsDescription: "",
  skillLists: [
    {
      name: "CS Languages",
      skills: [
        {
          skillname: "C/C++",
          score: 5,
        },
        {
          skillname: "Python",
          score: 5,
        },
        {
          skillname: "JavaScript",
          score: 3,
        },
        {
          skillname: "Java",
          score: 3,
        },
      ],
    },
    {
      name: "General CS Stuff",
      skills: [
        {
          skillname: "Linux",
          score: 4,
        },
        {
          skillname: "ROS/ROS2",
          score: 5,
        },
        {
          skillname: "Arduino",
          score: 4,
        },
        {
          skillname: "IoT",
          score: 4,
        },
      ],
    },
    {
      name: "CAD",
      skills: [
        {
          skillname: "SolidWorks",
          score: 4,
        },
        {
          skillname: "Fusion 360",
          score: 3,
        },
        {
          skillname: "AutoDesk Inventor",
          score: 3,
        },
      ],
    },
    {
      name: "Equipment",
      skills: [
        {
          skillname: "Lathe",
          score: 3,
        },
        {
          skillname: "Mill",
          score: 3,
        },
        {
          skillname: "Oscilliscope",
          score: 4,
        },
        {
          skillname: "CNC Mill",
          score: 4,
        },
      ],
    },
  ],
  portfolio: [
    {
      name: "Chrono ROS Interface",
      keywords: "C++, ROS, Autonomous Vehicles",
      media: {
        type: "image",
        content: "images/portfolio/ros_interface/sidebyside_perception.png",
      },
      description:
        "This project was in conjunction with the Simulation-Based Engineering Lab (SBEL). Utilizing ProjectChrono, a highly dynamic physics engine, I created an API that allowed users to interface the simulation environment with Robot Operating System (ROS). The primary focus of this project was to provide support for testing control policies of the simulated vehicles within the Chrono::Vehicle module. A drag-and-drop interface could then be utilized, where the control stack used in reality was identical to that in the simulation. A secondary goal of the project was to validate the accuracy of the simulation using a scale vehicle, of which was controled by ROS.",
      imgurl: "images/portfolio/ros_interface/chrono_vehicle_generic.jpg",
    },
    {
      name: "Autonomous RC Car",
      keywords: "Autonomous Vehicles, Arduino, ROS, Mechatronics",
      media: {
        type: "video",
        content: "https://www.youtube.com/embed/JvSR3P9g7RA",
      },
      description:
        "This project was initially faciliated by the Simulation-Based Engineering Lab (SBEL) and continued development was made by Wisconsin Autonomous (WA). The initial focus of this project was to create a platform for validating simulation performance through a phsyical test bed. For the Machine-Ground Interaction Consortium, a poster was submitted that demonstrated the use of this scale vehicle. As seen in the video, a ZED stereo camera was used for sensing, of which was simulated in the Chrono environment and a control policy was derived from that same environment. The submission was awarded the third place prize. I then replicated the same vehicle to be used for WA to provide a quality testing platform for team members to test algorithms related to the Indy Autonomous Challenge and the evGrand Prix.",
      imgurl: "images/portfolio/rc_car/rc_car.png",
    },
    {
      name: "Autonomous HMMWV Convoy",
      keywords:
        "Python, Machine Learning, Reinforcement Learning, Autonomous Vehicles",
      media: {
        type: "video",
        content: "https://www.youtube.com/watch?v=FY-hD6RgHSw",
      },
      description:
        'This project began in the summer of 2020 and utilized the open source simulator ProjectChrono to create a scalable framework to be used for reinforcement learning training and testing. First, a scenario was decided on: train a "follower" vehicle to follow in the tracks of a leader, where the "follower\'s" controller utilizes end-to-end rl control (takes in sensor data, outputs control inputs). To increase generality of the resulting control strategy, four total vehicles were used with multiple configurations for leaders (L) and followers (F): 1L+3F, 2L+3F, and 3L+1F. To begin, a leader would be placed at one corner and then acts as a "human" driver, following a path to get to the other corner. The followers were then trained to follow the leader along it\'s path, dodging obstacles along the way. Testing utilized rigid flat and hilly terrains with various ground textures and random obstacle placement. In the testing phase, we then introduced deformable terrain models implemented from the Soil Contact Model (SCM). The follower\'s inputs included a 80x45 camera image and communicated GPS data from its direct leader. We saw good performance overall, where various metrics were analyzed to quantitatively determine performance. <a href="http://gvsets.ndia-mich.org/documents/AAIR/2020/AAIR_1150_Enabling%20Artificial%20Intelligence%20Studies%20in%20Off-Road%20Mobility%20through%20Physics-Based%20Simulation%20of%20Multi-Agent%20Scenarios_Paper.pdf">A full writeup of the paper can be found here</a>.',
      imgurl: "images/portfolio/rl/rl.png",
    },
    {
      name: "Personal Website",
      keywords: "Javascript, React, Web Development",
      description:
        "I wanted to revamp my existing personal portfolio website which utilized vanilla Javascript, so I created this website using modern React paradigms. It was heavily influenced by other existing personal portfolio's I found on github, but I developed the majority of the code (credit given on the github repo containing the source). Overall, this was my first real project where I utilized React in a creative way. I learned a lot, including Javascript.",
      imgurl: "images/portfolio/website/home.png",
    },
    {
      name: "SynChrono",
      keywords: "C++, MPI, DDS, Open Source",
      media: {
        type: "image",
        content: "images/portfolio/synchrono/full_loop_frame06.png",
      },
      description:
        'This was a long term project that was again done in the Simulation-Based Engineering Lab (SBEL). The ProjectChrono simulator was primarily developed to provide high fidelity dynamics for a variaty of situations, including vehicle and robotic applications. In most real-life scenarios that contain vehicles and/or robots, there are multiple present (i.e. robotic warehouse or busy highway). There for, to accurately develop control strategies for these agents, it\'s desired to be able to model multiple entities in the same simulation at the same level of fidelity. I was the main contributor for the module, creating a scalable and multi-purpose infrastructure that decreased the scaling of multi-agent Chrono scenarios from worse the O(n) to better than O(log(n)). I used C++, MPI, DDS, FlatBuffers, threads and many other concepts to create the package. <a href="https://sc20.supercomputing.org/proceedings/tech_poster/poster_files/rpost135s2-file2.pdf">A poster writeup is available here.</a><a href="http://ras.papercept.net/images/temp/IROS/files/1235.pdf">An IROS submission detailing the module can also be found here.</a>',
      imgurl: "images/portfolio/synchrono/park_intersection.png",
    },
    {
      name: "Off-Road RL Control",
      keywords:
        "Python, Machine Learning, Reinforcement Learning, Autononous Vehicles",
      media: {
        type: "video",
        content: "https://youtu.be/XGLYrZ6s3O0",
      },
      description:
        "This project again utilized reinforcement learning (RL) as a means for end-to-end control for an off-road autonomous vehicle. In this case, the autonomous vehicle was a Gator model and the terrain was a mixture of rigid/deformable and flat/hilly. Training was conducted in PyChrono and GymChrono, the python interface to the C++ ProjectChrono simulator and the integration of PyChrono into OpenAI's Gym RL infrastructure, respectively. To begin each trial, the gator was placed at one end of the terrain and informed by a 45x90 rgb camera image and the location of the goal (which was placed at the other corner of the terrain). The camera was modeled by Chrono::Sensor which utilizes the OptiX ray tracing engine. We were able to acheive reasonable performance, where success rate varied depending on the difficulty of the terrain. The testing scenario utilized deformable terrain, which wasn't used in testing. This saw about 50% succes rate, depending on the number of random obstacles placed along the way.",
      imgurl: "images/portfolio/gator/scm_soft.png",
    },
    {
      name: "WA Simulator",
      keywords: "Python, Open Source, Autonomous Vehicles",
      media: {
        type: "video",
        content: "https://www.youtube.com/watch?v=yyEqYxJYCOs",
      },
      description:
        'This project was done for the Wisconsin Autonomous student organization at the University of Wisconsin - Madison. As President of the organization, which had 30-35 undergraduate members, our goal was to develop autonomous algorithms for autonomous racing applications. To help facilitate this development, I created WA Simulator. It is meant to be an open source, multi-purpose simulation framework built in Python that all members, new and old, could use. I designed and implemented entire framework. Furthermore, to help document the process and the code base, <a href="https://wisconsinautonomous.github.io/wa_simulator/">I created this site</a>. It is underactive development and uses Sphinx auto documentation.',
      imgurl: "images/portfolio/wa_simulator/go_kart_barriers.png",
    },
    // {
    //   name: "IRIS",
    //   keywords: "Python, C++, Computer Graphics",
    //   description: "",
    //   imgurl: "images/portfolio/phone.jpg",
    // },
  ],
};

export default resumeData;
