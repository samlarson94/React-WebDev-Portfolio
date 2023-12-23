import React from "react";

import { Section, ProfileImage} from '../../styles/GlobalComponents'

const ProfilePicture = (props) => (
    <Section>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
        <ProfileImage src="/images/headshot2023.jpeg" />
        </div>
    </Section>
)

export default ProfilePicture