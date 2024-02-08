'use client'

import styles from './animation.module.css';
import Lottie from "lottie-react";
import mentorAnimation from '@/animation/mentor.json';

export default function MentorAnimation() {
    return (
        <div className={styles['container']}>
            <Lottie
                animationData={mentorAnimation}
                loop={true}
                autoplay={true}
            />
        </div>
    );
};
