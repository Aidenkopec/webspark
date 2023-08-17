import React from "react";
import Tilt from "react-tilt";
import {motion} from "framer-motion";

import {styles} from "../styles";
import {services} from "../constants";
import {SectionWrapper} from "../hoc";
import {fadeIn, textVariant} from "../utils/motion";

const ServiceCard = ({index, title, icon}) => (
    <Tilt className='xs:w-[250px] w-full'>
        <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
            <div
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
            >
                <img
                    src={icon}
                    alt='web-development'
                    className='w-16 h-16 object-contain'
                />

                <h3 className='text-white text-[20px] font-bold text-center'>
                    {title}
                </h3>
            </div>
        </motion.div>
    </Tilt>
);

const About = () => {
    return (
        <>
            <h2 className= {styles.sectionHeadText}>Our Services.</h2>


            <div className='mt-10 flex flex-wrap gap-10'>
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>

            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} mt-20`}>Introduction</p>

                <h2 className={styles.sectionHeadText}>Who we are.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-10 text-secondary text-[17px] max-w-3xl leading-[30px]'
            >
                At Webspark Solutions, we ignite your digital presence with cutting-edge web and mobile solutions. As a
                premier web agency, we specialize in creating bespoke websites that captivate your audience and drive
                results. Our team of skilled developers and designers craft visually stunning and highly functional
                websites that reflect your brand's unique identity. With a keen eye for detail and a passion for
                innovation, we deliver web designs that are not only aesthetically pleasing but also user-friendly and
                responsive.
                <br/>
                <br/>
                But we don't stop there. We understand that a great website is only the beginning. That's why we offer
                comprehensive SEO optimization services to ensure your website ranks high on search engines, attracting
                more visitors and converting them into loyal customers. Our SEO experts employ proven strategies and
                techniques to enhance your online visibility and drive organic traffic to your site.

                <br/>
                <br/>
                In addition to web development and design, we also offer top-notch mobile app development services. Our
                team of seasoned app developers creates intuitive and engaging mobile apps that offer a seamless user
                experience across all devices. Whether you need a native app for iOS or Android or a cross-platform app,
                we've got you covered.
                <br/>
                <br/>
                At Webspark Solutions, we are committed to delivering exceptional digital solutions that spark growth
                and success for your business. Let us be the spark that ignites your digital transformation journey.
            </motion.p>
            <br className='mt-12'></br>


        </>
    );
};

export default SectionWrapper(About, "about");
