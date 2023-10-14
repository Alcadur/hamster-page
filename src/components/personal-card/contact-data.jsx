import { BiPhoneCall } from 'react-icons/bi';
import { BsMailbox } from 'react-icons/bs';
import { GrLinkedinOption, GrMapLocation } from 'react-icons/gr';
import { SiGithub } from 'react-icons/si';

export function ContactData() {
    const contactData = [
        { IconComponent: BiPhoneCall, label: <a href="tel:+48785161244">+48 785 161 244</a> },
        { IconComponent: BsMailbox, label: <a href="mailto:chelmicki.p@gmail.com">chelmicki.p@gmail.com</a> },
        {
            IconComponent: GrMapLocation,
            label: <a href="https://maps.app.goo.gl/qh9y1jPd3mkfs3rV6" target="_blank">Gdańsk in Poland</a>
        },
        { IconComponent: SiGithub, label: <a href="https://github.com/Alcadur" target="_blank">github.com/Alcadur</a> },
        {
            IconComponent: GrLinkedinOption,
            label: <a href="https://www.linkedin.com/in/piotr-che%C5%82micki-a582b0a4/"
                      target="_blank">piotr-chełmicki-a582b0a4</a>
        },
    ];

    return <ul>
        {contactData.map(({ IconComponent, label }) =>
            <li key={label}><IconComponent />{label}</li>
        )}
    </ul>;
}