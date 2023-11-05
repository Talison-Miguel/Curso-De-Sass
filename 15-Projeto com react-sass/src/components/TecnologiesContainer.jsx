import '../styles/components/tecnologiescontainer.sass'
import { DiHtml5, DiCss3, DiJsBadge, DiNodejsSmall, DiMysql, DiReact } from 'react-icons/di'

const tecnologies = [
    { id: 'html', name: 'HTML5', icon: <DiHtml5 /> },
    { id: 'css', name: 'CSS3', icon: <DiCss3 /> },
    { id: 'js', name: 'JavaScript', icon: <DiJsBadge /> },
    { id: 'node', name: 'Node.js', icon: <DiNodejsSmall /> },
    { id: 'mysql', name: 'MySQL', icon: <DiMysql /> },
    { id: 'react', name: 'React', icon: <DiReact /> },
]

export function TecnologiesContainer() {
    return (
        <section className='tecnologies-container'>
            <h2>Tecnologias</h2>
            <div className="tecnologies-grid">
                {tecnologies.map(tec => (
                    <div className="teclogies-card" id={tec.id} key={tec.id}>
                        {tec.icon}
                        <div className="teclogies-info">
                            <h3>{tec.name}</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, totam atque magni. </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}