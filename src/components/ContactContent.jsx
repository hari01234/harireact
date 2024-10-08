
import "./ContactContent.css";
import { motion } from "framer-motion";
import propTypes from "prop-types";
function ContactContent({ onMouseEnter, onMouseLeave }) {
    return (
        <div className="contact-content">
            <motion.h1
                initial={{
                    x: -100,
                    opacity: 0,
                }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                }}
                transition={{ duration: 0.5, delay: 0 }}
                className="contact-heading"
            >
                Contact
            </motion.h1>
            <div className="contact-container">
                <motion.div
                    initial={{
                        x: -100,
                        opacity: 0,
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 1,
                    }}
                    transition={{ duration: 0.5 }}
                    className="contact-item"
                >
                    <h6 className="media">e-mail</h6>
                    <h1
                        className="media-address"
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                        onClick={() => {
                            window.open('mailto:hari29734@gmail.com').focus();
                        }}
                    >
                        Hariharan_N
                    </h1>
                </motion.div>
                <motion.div
                    initial={{
                        x: 100,
                        opacity: 0,
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 1,
                    }}
                    transition={{ duration: 0.5 }}
                    className="contact-item"
                >
                    <h1 className="media">linkedin</h1>
                    <h1
                        className="media-address"
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                        onClick={() => {
                            window.open('https://www.linkedin.com/in/hariharan-n-65a400224/', '_blank').focus();
                        }}
                    >
                        @Hariharan_N
                    </h1>
                </motion.div>
                <motion.div
                    initial={{
                        x: -100,
                        opacity: 0,
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 1,
                    }}
                    transition={{ duration: 0.5 }}
                    className="contact-item"
                >
                    <h1 className="media">github</h1>
                    <h1
                        className="media-address"
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                        onClick={() => {
                            window.open('https://github.com/hari01234', '_blank').focus();
                        }}
                    >
                        @Hariharan-N
                    </h1>
                </motion.div>
            </div>
        </div>
    );
}

export default ContactContent;

ContactContent.propTypes = {
    onMouseEnter: propTypes.func,
    onMouseLeave: propTypes.func,
};
