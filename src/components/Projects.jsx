import { motion } from "framer-motion";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export const Projects = () => {
    return (
        <motion.section
            id="projects"
            className="projects"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <motion.h2 variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
                My Projects
            </motion.h2>
            <motion.div
                className="project-grid"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
            >
                <motion.div
                    className="project-card"
                    variants={fadeInUp}
                    whileHover={{ y: -10, transition: { duration: 0.2 } }}
                >
                    <motion.div
                        className="project-image"
                        style={{ backgroundImage: "url('/projects/expense_man.png')" }}
                        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    />
                    <h3>Expense Manager</h3>
                    <p>
                        A modern Expense Manager web app built using React.js, Sails.js, and Material‑UI, offering
                        intuitive UI and efficient expense tracking features.
                    </p>
                    <div className="project-tech">
                        <span>ReactJs</span>
                        <span>SailsJs</span>
                        <span>MaterialUI</span>
                    </div>
                </motion.div>

                <motion.div
                    className="project-card"
                    variants={fadeInUp}
                    whileHover={{ y: -10, transition: { duration: 0.2 } }}
                >
                    <motion.div
                        className="project-image"
                        style={{
                            backgroundImage: "url('/projects/QueueMan.png')",
                        }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    />
                    <h3>Advanced Queue Management System</h3>
                    <p>
                        A powerful system designed to efficiently manage customer queues with real-time tracking, smart
                        scheduling, and enhanced user experience for both staff and clients.
                    </p>
                    <div className="project-tech">
                        <span>React</span>
                        <span>Reactstrap</span>
                        <span>Socket.io</span>
                    </div>
                </motion.div>

                <motion.div
                    className="project-card"
                    variants={fadeInUp}
                    whileHover={{ y: -10, transition: { duration: 0.2 } }}
                >
                    <motion.div
                        className="project-image"
                        style={{
                            backgroundImage: "url('/projects/jobfounder.png')",
                        }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    />
                    <h3>Career Boosters Web Application</h3>
                    <p>
                        A career development platform offering personalized resources, job preparation tools,
                        skill-building modules, and progress tracking to help users boost their professional journey.
                    </p>
                    <div className="project-tech">
                        <span>React</span>
                        <span>Bootstrap</span>
                        <span>Socket.io</span>
                    </div>
                </motion.div>
            </motion.div>
        </motion.section>
    );
};
