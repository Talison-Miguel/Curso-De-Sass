import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai'

import '../styles/components/informationcontainer.sass'

const informationItens = [
    {
        title: 'Telefone',
        description: 33984198044,
        icon: <AiFillPhone id='phone-icon'/>,
    },
    {
        title: 'E-mail',
        description: 'talisonmiguel84@gmail.com',
        icon: <AiOutlineMail id='email-icon'/>,
    },
    {
        title: 'Localização',
        description: 'Manhuaçu - MG',
        icon: <AiFillEnvironment id='pin-icon'/>,
    }
]

export const InformationContainer = () => {
    return (
        <section id="information-container">
            {
                informationItens.map(item => {
                    return (
                        <div className="info-card" key={item.title}>
                            {item.icon}
                            <div>
                                <h3>{item.title}</h3>
                                <span>{item.description}</span>
                            </div>
                        </div>
                    )
                })
            } 
        </section>
    )
}