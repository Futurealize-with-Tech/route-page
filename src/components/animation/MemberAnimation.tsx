'use client'

import styles from './animation.module.css';
import Lottie from "lottie-react";
import memberAnimation from '@/animation/member.json';

export default function MemberAnimation() {
    return (
        <div className={styles['container']}>
            <Lottie
                animationData={memberAnimation}
                loop={true}
                autoplay={true}
            />
        </div>
    );
};
