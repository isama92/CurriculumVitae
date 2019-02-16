import React from 'react';

import Separator from '../../../components/Separator/Separator';
import Section from './Section/Section';
import Subsection from './Subsection/Subsection';
import Company from './Company/Company';

import classes from './Content.module.css';
import { injectIntl, defineMessages, FormattedMessage } from 'react-intl';

const messages = defineMessages({
    section_title: {
        id: 'section_title',
        defaultMessage: 'section title',
    },
    about_translation_test: {
        id: 'about.translation_test',
        defaultMessage: 'translation test',
    },
    title_about: {
        id: 'about.title',
        defaultMessage: 'about me',
    },
    sub_translation: {
        id: 'g.sub_translation',
        defaultMessage: 'sub translation',
    },
    fullstack_php_developer: {
        id: 'g.fullstack_php_developer',
        defaultMessage: 'php fullstack developer',
    },
});


const content = props => {
    const {intl:{formatMessage}} = props;
    return (
        <div className={classes.Container}>
            <Section title={formatMessage(messages.title_about)}>
                <p><FormattedMessage
                    id="about.i_am"
                    defaultMessage="About me section example. {fullstack}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a interdum ipsum. Integer sagittis rutrum commodo. {translation_test} translation test."
                    values={{
                        fullstack: <strong>fullstack</strong>,
                        translation_test: <strong>{formatMessage(messages.about_translation_test)}</strong>,
                    }}
                />.</p>
            </Section>
            <Separator/>
            <Section title={formatMessage(messages.section_title)}>
                <Subsection
                    title={formatMessage(messages.fullstack_php_developer)}
                    subtitle={<Company name="Your company" from={new Date('2019-01')} to={new Date('2019-12')}/>}
                    subtitle_link="https://www.google.com/">
                    <ul>
                        <li><FormattedMessage
                            id="professional_experience.my_company.management"
                            defaultMessage="What did {sub_translation}"
                            values={{
                                sub_translation: <strong>{formatMessage(messages.sub_translation)}</strong>,
                            }}
                        /></li>
                    </ul>
                </Subsection>
            </Section>
        </div>
    );
};

export default injectIntl(content);
