import style from './personal-data.module.css';
import classNames from 'classnames';
import { headerFont } from '@/utils/fonts';
import { ContactData } from '@/components/personal-card/contact-data';
import { PersonalInfo } from '@/components/personal-card/personal-info';

export function PersonalCard({ className }) {
    const wrapperClasses = classNames(style.personalCard, className);
    const contentClasses = classNames(headerFont.className, style.content);

    return <section className={wrapperClasses}>
        <div className={style.photo}></div>
        <div className={contentClasses}>
            <PersonalInfo />

            <ContactData />
        </div>
    </section>
}