'use client'

import { returnAnimation } from '@/lib/returnAnimation';
import styles from './container.module.css';
import { useRouter } from 'next/navigation';

export default function Container({
    text, url,
}: {
    text: string, url: string,
}) {
    const router = useRouter();
    const animation = returnAnimation(text);

    const handleRouter = () => {
        router.push(url);
    };

    return (
        <div className={styles['container']}>
            <p className={styles['title']}>{text}</p>
            <div className={styles['image-container']}>
            {animation}
            </div>
            <div className={styles['button']} onClick={handleRouter}>こちらから</div>
        </div>
    );
};
