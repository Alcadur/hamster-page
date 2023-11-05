import style from './about-me-portrait.module.css';
import Image from 'next/image';


export function AboutMePortrait() {
    return <section className={style.wrapper}>
        <div className={style.imageContainer}>
            <Image src="/portrait.png" alt="portrait" fill={true} style={{ objectFit: 'cover', objectPosition: 'center' }} />
        </div>
    </section>
}