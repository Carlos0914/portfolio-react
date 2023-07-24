import LocalizedStrings from "react-localization";

export const strings = new LocalizedStrings({
  en: {
    other: {
      here: "here",
    },
    navbar: {
      about: "About me",
      history: "Work history",
      projects: "Projects",
      contact: "Contact me",
      services: "Services",
    },
    home: {
      line1:
        "Welcome to my personal website! My name is Carlos López. I'm an applied mathematics graduate who developed a keen interest in programming early on in my career, leading me to venture into the software development market.",
      line2:
        "With over three years of experience, I specialize in backend-focused full-stack web development. I am passionate about staying up to date with the latest trends in technology and continuously expanding my knowledge.",
      line3:
        "On this page, you will find details about my educational background, including my degree and certifications, as well as information about my tech stack.",
      line4:
        "If you're interested in exploring my projects or learning about my work history, you can find more details on the dedicated pages: {0} and {1}. These pages provide a comprehensive overview of the exciting projects I've worked on and my professional journey so far. Feel free to click on the respective links to dive deeper into my past accomplishments and see the tangible results of my expertise.",
      education: "Education",
      degree: "Bachelor of Sciences, Applied Mathematics",
      university: "Autonomous University of Coahuila",
      note: "Graduated with honors",
      techStack: "My Tech Stack",
      main: "Main Stack",
      programming_languages: "Programming Languages",
      databases: "Databases",
    },
    history: {
      clickit: {
        date: "2021 - Today",
        role: "Full-stack developer",
        line: "Web application development",
        tech: "NodeJS, SQL & NoSQL databases, React, Javascript, Typescript",
      },
      bilbo: {
        role: "Backend web developer",
        line: "Web application development",
        tech: "Ruby, Rails, PostgreSQL, JQuery",
      },
    },
    projects: {
      labels: {
        tasks: "Key tasks performed",
        tech: "Technologies",
      },
      lozmar: {
        description:
          "Management platform for cargo shipments and their invoices",
        dates: ["2021 - today", "Currently providing support"],
        tasks: [
          "Bux fixing and troubleshooting",
          "Updated integration with invoice stamp service to comply with new law regulations",
          "File managment feature using AWS S3",
          "Worked on several parts of the dashboard for users and administrators",
        ],
      },
      stellarmenus: {
        description:
          "Restaurant management tool to create, edit and manage both digital and printed menus",
        dates: ["2022 - 2023", "1 Year"],
        tasks: [
          "Created a React frontend with hooks for state management",
          "Implemented multiple backend APIs (microservices architecture) in NodeJs using Express and Serverless frameworks",
          "Developed RESTful endpoints that interacts with database tables through MongoDB queries",
          "Designed user-friendly UI components such as modals, forms etc.",
        ],
      },
      brandverge: {
        description:
          "Marketing platform to connect media owners with advertisers",
        dates: ["2022 - 2023", "~ 15 months"],
        tasks: [
          "Bux fixing and troubleshooting",
          "Developed an RFP feature using NodeJs and an SQL database",
          "Created an analytics dashboard for administrators and users",
          "Improved user management and user registration flow",
        ],
      },
      "8stem": {
        description: "Music and audio remixes creation platform",
        dates: ["2022", "~ 1 month"],
        tasks: [
          "Recovery of files from a snapshot due to a data loss",
          "Update and troubleshoot dependencies for a Ruby on Rails Application",
          "Worked with a DevOps engineer to put the aplication back online after the data loss",
        ],
      },
      elevate: {
        description: "Real state real-time trading on the UK",
        dates: ["2022", "~ 1 month"],
        tasks: [
          "Update and troubleshoot dependencies for a Ruby on Rails Application",
          "Bux fixing and troubleshooting",
        ],
      },
      bilbo: {
        description:
          "Marketing platform to connect digital media owners with advertisers and automate ad scheduling",
        dates: ["2020 - 2021", "~ 17 months"],
        tasks: [
          "Developed an algorithm to automate ad scheduling based on user specifications",
          "Integrated the algorithm with the backend of the application",
          "Used ElectronJS to create a desktop ad player for windows",
          "Create and integrate dynamic forms with HAML and ERB",
        ],
      },
    },
    contact: {
      headline:
        "If you have any question or want to discuss any idea, you can send me a message using the form below",
      send: "Send",
      contactLinkedin: "Alternatively, you can contact me via {0}",
      nameLabel: "Your name",
      namePH: "Ex. John Doe",
      emailLabel: "Your email",
      emailPH: "Ex. your@mail.com",
      messageLabel: "Message",
      messagePH: "Your message",
      success: "Message sent successfully!",
      errors: {
        name: "This field is required",
        email: "Please, enter a valid email address",
        message: "Please, type at least 20 characters",
        form: "There was a problem while sending your message, please try again in a few seconds",
      },
    },
    services: {
      headline: "What I can do for you or your business",
      titles: [
        "Custom Static Website Creation and Hosting",
        "Full Stack Web Application Development",
        "Staff Augmentation",
        "Bug Fixing & Troubleshooting",
      ],
      items: [
        "I will build a static website for your business, based on your preferred design. The site will be fast, secure, and responsive to different devices. I will also assist with domain selection and getting it online. Get a professional web presence in no time!",
        "I offer comprehensive Full Stack Web Application Development services to bring your ideas to life. From front-end user interfaces to back-end server logic, I will build a robust and scalable application tailored to your needs. With expertise in various programming languages and frameworks, I ensure seamless integration and an exceptional user experience.",
        "Enhance your team's productivity and efficiency with my Staff Augmentation services. I can seamlessly integrate into your existing workforce as a back-end, front-end, or full-stack developer, depending on your needs. I provide flexible engagement models, working with your team to accelerate project timelines and achieve outstanding results.",
        "Resolve technical issues swiftly and effectively with my Bug Fixing & Troubleshooting services. I have a keen eye for detail and a deep understanding of various technologies, allowing me to identify and resolve bugs and other problems efficiently. Whether it's debugging code or resolving complex technical issues, I'll get your system back on track.",
      ],
    },
    meta: {
      home: "Home | Carlos Lopez",
      history: "Work history | Carlos Lopez",
      projects: "Projects | Carlos Lopez",
      contact: "Contact | Carlos Lopez",
      services: "Services | Carlos Lopez",
    },
  },
  es: {
    other: {
      here: "aquí",
    },
    navbar: {
      about: "Sobre mí",
      history: "Historia laboral",
      projects: "Proyectos",
      contact: "Contacto",
      services: "Servicios",
    },
    home: {
      line1:
        "¡Bienvenido a mi sitio personal! Mi nombre es Carlos López, soy un Licenciado en Matemáticas Aplicadas que desarrolló un gran interes en la programación muy temprano durante mi carrera, llevandome a aventurarme en el mercado de desarrollo de sotware.",
      line2:
        "Con más de tres años de experiencia, me especializo en el desarrollo web full-stack con un mayor enfoque en el backend. Me apasiona mantenerme al día con las últimas novedades en tecnología y expandir mi conocimiento continuamente.",
      line3:
        "En esta página encontrarás detallers sobre mi formación académica, incluyendo mi título y certificaciones, así como información sobre mi tech stack.",
      line4:
        "Si te interesa explorar mis proyectos o conocer más sobre mi historia laboral, puedes encontrar mas detalles en sus respectivas páginas: {0} y {1}. Estas páginas proveen una descripción general de los proyectos en los que he trabajado y de mi experiencia profesional al día de hoy. No dude en dar clic en los respectivos enlaces para profundizar en mis logros pasados y ver los resultados tangibles de mi experiencia.",
      education: "Formación académica",
      degree: "Licenciado en Matemáticas Aplicadas",
      university: "Universidad Autónoma de Coahuila",
      note: "Graduado con mención honorífica",
      techStack: "Mi stack tecnológico",
      main: "Stack principal",
      programming_languages: "Lenguajes de programación",
      databases: "Bases de datos",
    },
    history: {
      clickit: {
        date: "2021 - Hoy",
        role: "Desarrollador full-stack",
        line: "Desarrollo de aplicaciones web",
        tech: "NodeJS, bases de datos SQL y NoSQL, React, Javascript, Typescript",
      },
      bilbo: {
        role: "Desarrollador web backend",
        line: "Desarrollo de aplicaciones web",
        tech: "Ruby, Rails, PostgreSQL, JQuery",
      },
    },
    projects: {
      labels: {
        tasks: "Principales tareas realizadas",
        tech: "Tecnologías",
      },
      lozmar: {
        description:
          "Plataforma de administración para transporte de carga y sus facturas",
        dates: ["2021 - Hoy", "Actualmente brindando soporte"],
        tasks: [
          "Corrección de errores y solución de problemas",
          "Actualización de la integración con el servicio de timbrado para cumplir nuevas regulaciones",
          "Función de administración de archivos utilizando el servicio S3 de AWS",
          "Trabajé en multiples partes del panel de control para usuarios y administradores",
        ],
      },
      stellarmenus: {
        description:
          "Herramienta para restaurantes para crear, editar y administrar menús impresos y digitales",
        dates: ["2022 - 2023", "1 Año"],
        tasks: [
          "Creación de un React frontend con hooks para manejo de estados",
          "Implementación de múltiples APIs (arquitectura de microservicios) en NodeJs usando los frameworks de Express y Serverless",
          "Desarrollo de API endpoints para interactuar con la base de datos utilizando MongoDB",
          "Diseño de una interfaz de usuario amigable con componentes como modales, formularios, etc.",
        ],
      },
      brandverge: {
        description:
          "Plataforma de marketing para conectar dueños de medios con anunciantes",
        dates: ["2022 - 2023", "~ 15 meses"],
        tasks: [
          "Corrección de errores y solución de problemas",
          "Desarrollo de una función de solicitud de propuestas usando NodeJS y una base de datos SQL",
          "Creación de un panel de análisis para administradores y usuarios",
          "Mejoras en la administración de usuarios y proceso de registro",
        ],
      },
      "8stem": {
        description: "Plataforma de creación de remixes de música y audio",
        dates: ["2022", "~ 1 mes"],
        tasks: [
          "Recuperación de archivos desde una snapshot debido a una pérdida de datos",
          "Actualicación y solución de dependencias para una aplicación escrita en Ruby on Rails",
          "Trabajé con un ingeniero DevOps para poner la aplicación en linea después de la pérdida de datos",
        ],
      },
      elevate: {
        description: "Comercio inmobiliario en tiempo real en el Reino Unido",
        dates: ["2022", "~ 1 mes"],
        tasks: [
          "Actualicación y solución de dependencias para una aplicación escrita en Ruby on Rails",
          "Corrección de errores y solución de problemas",
        ],
      },
      bilbo: {
        description:
          "Plataforma de marketing para conectar dueños de medios digitales con anunciantes",
        dates: ["2020 - 2021", "~ 17 meses"],
        tasks: [
          "Desarrollo de un algoritmo para automatizar la programación de anuncios según las especificaciones del usuario",
          "Integración del algoritmo con el backend de la aplicación",
          "Uso de ElectronJS para crear un reproductor de anuncios para windows",
          "Creación e integración de formularios dinámicos con HAML y ERB",
        ],
      },
    },
    contact: {
      headline:
        "Si tienes alguna pregunta o quieres discutir alguna idea, puedes enviarme un mensage utlizando el formulario a continuación",
      send: "Enviar",
      contactLinkedin: "Si lo deseas, también puedes contactarme via {0}",
      nameLabel: "Nombre",
      namePH: "Ej. Carlos López",
      emailLabel: "Correo electrónico",
      emailPH: "Ej. tu@correo.com",
      messageLabel: "Mensaje",
      messagePH: "Tu mensaje",
      success: "Mensaje enviado exitosamente",
      errors: {
        name: "Este campo es requerido",
        email: "Por favor, ingrese una dirección de correo válida",
        message: "Por favor, ingrese al menos 20 caracteres",
        form: "Hubo un problema al enviar tu mensaje, por favor intenta de nuevo en unos segundos",
      },
    },
    services: {
      headline: "Lo que puedo hacer por tí o tu negocio",
      titles: [
        "Creación y alojamiento de sitios web estáticos personalizados",
        "Desarrollo de Aplicaciones Web Full Stack",
        "Ampliación de Personal",
        "Corrección de Errores y Solución de Problemas",
      ],
      items: [
        "Crearé un sitio web estático para tu negocio, basado en tu diseño preferido. El sitio será rápido, seguro y compatible con diferentes dispositivos. También ofreceré soporte para la elección del dominio y su puesta en línea. ¡Tendrás una presencia profesional en la web en poco tiempo!",
        "Ofrezco servicios completos de Desarrollo de Aplicaciones Web Full Stack para dar vida a tus ideas. Desde interfaces de usuario en el front-end hasta la lógica del servidor en el back-end, construiré una aplicación sólida y escalable adaptada a tus necesidades. Con experiencia en diversos lenguajes de programación y marcos de trabajo, garantizo una integración perfecta y una experiencia de usuario excepcional.",
        "Optimiza la productividad y eficiencia de tu equipo con mis servicios de Ampliación de Personal. Puedo integrarme sin problemas en tu fuerza laboral existente como desarrollador back end, front end o full stack, según lo requieras. Proporciono modelos de compromiso flexibles, trabajando con tu equipo para acelerar los plazos del proyecto y lograr resultados sobresalientes.",
        "Resuelve problemas técnicos de forma rápida y efectiva con mis servicios de Corrección de Errores y Solución de Problemas. Tengo un ojo agudo para los detalles y una comprensión profunda de diversas tecnologías, lo que me permite identificar y resolver errores y otros problemas de manera eficiente. Ya sea depurar código o resolver problemas técnicos complejos, pondré tu sistema de nuevo en marcha.",
      ],
    },
    meta: {
      home: "Inicio | Carlos López",
      history: "Historia laboral | Carlos López",
      projects: "Proyectos | Carlos López",
      contact: "Contacto | Carlos López",
      services: "Servicios | Carlos López",
    },
  },
});
