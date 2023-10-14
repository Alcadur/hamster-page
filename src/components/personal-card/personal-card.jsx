import style from './personal-data.module.css';
import classNames from 'classnames';
import { headerFont } from '@/utils/fonts';
import { ContactData } from '@/components/personal-card/contact-data';
import { PersonalInfo } from '@/components/personal-card/personal-info';

export function PersonalCard() {
    const contentClasses = classNames(headerFont.className, style.content);

    return <section className={style.personalCard}>
        <div className={style.photo}></div>
        <div className={contentClasses}>
            <PersonalInfo />

            <ContactData />
        </div>
    </section>
}