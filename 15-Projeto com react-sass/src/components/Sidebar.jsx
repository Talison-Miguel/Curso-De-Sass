import Avatar from '../img/Eu.jpg'

import { SocialNetworks } from './SocialNetworks'
import '../styles/components/sidebar.sass'
import { InformationContainer } from './InformationContainer'

export function Sidebar() {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="Tálison Miguel" />
            <p className="title">Desenvolvedor</p>
            <SocialNetworks/>
            <InformationContainer />
            <a href="" className="btn">
                Download currículo
            </a>
        </aside>
    )
}