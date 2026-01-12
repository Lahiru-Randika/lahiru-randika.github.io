import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const Projects = () => {

  useEffect(() => {
    ScrollReveal().reveal('.exp-item', {
      origin: 'bottom',
      distance: '40px',
      duration: 900,
      delay: 200,
      easing: 'ease-in-out',
      reset: false
    });
  }, []);

  return (
    <div className="projects py-5">
      <div className="container">

        {/* Section Header – unchanged */}
        <div className="section text-center mb-5 mt-5">
          <h1>The <span>PATH</span> SO FAR</h1>
          <span>
            A journey shaped by companies, challenges, late fixes, and lessons that only real work can teach.
          </span>
        </div>

        {/* Experience Timeline */}
        <div className="experience">
          <div className="experience-timeline">

            {/* Experience 1 */}
            <div className="exp-item row align-items-start">
              <div className="col-md-2 exp-year">
                <span>2024 Dec - 2025 May</span>
              </div>

              <div className="col-md-10">
                <div className="exp-card">
                    <h5>Intern Software Engineer</h5>
                    <h6>Scienter Technologies Pte</h6>

                    <ul className="exp-list">
                        <li>
                        Contributed to real-world software systems, working on features that moved
                        from development to production rather than staying as isolated experiments.
                        </li>
                        <li>
                        Gained hands-on experience in debugging, improving existing codebases,
                        and understanding how small changes can impact large, scalable systems.
                        </li>
                        <li>
                        Collaborated within an agile team environment, learning how planning,
                        reviews, and communication shape successful software delivery.
                        </li>
                        <li>
                        Learned industry best practices by working closely with senior engineers
                        and adapting to production-level standards and workflows.
                        </li>
                    </ul>

                    <p className="exp-tech">
                        Tech Stack: <span className="tech-stack">Angular, .NET, SQL Databases</span>
                    </p>
                </div>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="exp-item row align-items-start">
              <div className="col-md-2 exp-year">
                <span>2025 Sep - 2025 Nov</span>
              </div>

              <div className="col-md-10">
                <div className="exp-card">
                    <h5>Part-Time Software Engineer</h5>
                    <h6>Maverick Intelligence · Project-Based</h6>

                    <ul className="exp-list">
                        <li>
                        Designed and developed an Internal Work Management System (IWMS) to centralize
                        core company workflows and improve task tracking and coordination.
                        </li>
                        <li>
                        Translated real operational requirements into functional features by
                        working closely with feedback from users and senior engineers.
                        </li>
                        <li>
                        Built and integrated backend APIs with a modern frontend, ensuring smooth
                        data flow, reliability, and maintainability across the system.
                        </li>
                        <li>
                        Gained practical insight into how decisions, iterations, and real users
                        ultimately shape the direction and quality of software products.
                        </li>
                    </ul>

                    <p className="exp-tech">
                        Tech Stack: <span className="tech-stack">Next.js, Flask, NeonDB</span>
                    </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;
