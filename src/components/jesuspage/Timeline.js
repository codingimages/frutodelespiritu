import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

// time line component
import TimeLineEvent from "../jesuspage/TmelineEvent"

const TimeLine = () => {
    return (
        <Container fluid>
            <Container>
                <Row className="pb-5">
                    <TimeLineEvent
                        eventOrder="1"
                        eventTitle="El Angel Gabriel se aparece a María"
                        eventDescription="El nacimiento de Jesús es anunciado de esta maera, fue la primera vez que el cielo anuncia directamente la llegada de un mesías."
                        eventReference="Lucas 1 26-38"
                    />
                    <TimeLineEvent
                        eventOrder="2"
                        eventTitle="María visita a Elizabeth"
                        eventDescription="Al saludar a Elizabeth, Juan salta en Su vientre y María canta cánticos de alabanza a Dios, dispuestas hacer Su voluntad."
                        eventReference="Lucas 1 39-56"
                    />
                    <TimeLineEvent
                        eventOrder="3"
                        eventTitle="Un Ángel se aparece a José"
                        eventDescription="José aún se encontraba un tanto incrédulo por el embarazo de María, por lo que un Ángel se le aparece también a él para contarle lo que sucedía."
                        eventReference="Mateo 2.18-25"
                    />
                    <TimeLineEvent
                        eventOrder="4"
                        eventTitle="El nacimiento de Jesús"
                        eventDescription="María y José, padres de Jesús, iban de camino a inscribir al niño por orden del gobernador, cuando de repente se cumplen los días de alumbramiento de María, dando a luz en un pesebre ."
                        eventReference="Lucas 2 1-7"
                    />
                    <TimeLineEvent
                        eventOrder="5"
                        eventTitle="Ángeles del Señor hablan a los pastores"
                        eventDescription="Pastores que cuidaban las ovejas reciben la noticia del nacimiento de Jesús, glorifican a Dios por lo sucedido y van a visitarlo."
                        eventReference="Lucas 2 8-15"
                    />
                    <TimeLineEvent
                        eventOrder="6"
                        eventTitle="Jesús es presentado en el templo"
                        eventDescription="Luego de haber sido circuncidado, es presentado en el templo conforme a la ley del Señor."
                        eventReference="Lucas 2.21"
                    />
                    <TimeLineEvent
                        eventOrder="7"
                        eventTitle="La visita de los magos"
                        eventDescription="Unos magos llegan a Jerusalén preguntando al rey Herodes por el rey de los judíos. Herodes les dice que si saben de algo, cuando regresen le avisen.  Por revelación de sueños los magos deciden no regresar por el mismo camino para no decirle a Herodes donde estaba."
                        eventReference="Mateo 2 1.12"
                    />
                    <TimeLineEvent
                        eventOrder="8"
                        eventTitle="Herodes manda matar a los niños"
                        eventDescription="Cuando Herodes se entera de que los magos lo burlaron, manda a matar a todos los niños de la cuidad, pero un Ángel le avisa a María y José para que huyan."
                        eventReference="Mateo 2 13-15"
                    />
                    <TimeLineEvent
                        eventOrder="9"
                        eventTitle="Jesús se cría en Nazaret"
                        eventDescription="María y José se establecen en Nazaret, para que se cumpliese la escritura.  Ahí Jesús pasa su infancia y juentud, creciendo en gracia, incluso debatiendo en el templo."
                        eventReference="Mateo 2 19-23"
                    />
                    <TimeLineEvent
                        eventOrder="10"
                        eventTitle="Jesús es bautizado por Juan"
                        eventDescription="Por un timepo Juan estuvo profetizando de Jesús, llega el momento en el que se encuentra con Él para bautizarlo y lo proclama el Mesías."
                        eventReference="Marcos 1 9-11"
                    />
                    <TimeLineEvent
                        eventOrder="11"
                        eventTitle="Jesús es tentado por Satanás"
                        eventDescription="Luego de un tiempo de ayuno, Jesús es guiado al desierto donde es tentado por Satanás."
                        eventReference="Mateo 4 1-11"
                    />
                    <TimeLineEvent
                        eventOrder="12"
                        eventTitle="Jesús comienza Su ministerio"
                        eventDescription="Cuando Jesús se entera de que Juan estaba preso, comienza a predicar, escoge a Sus discípulos y su ministerio crece porque le seguía mucha gente."
                        eventReference="Mateo 4 17"
                    />
                    <TimeLineEvent
                        eventOrder="13"
                        eventTitle="Jesús realiza su primer milagro"
                        eventDescription="Según el evangelio de Juan, el primer milagro registrado fue en las bodas de Canán, donde Jesús convierte el agua en vino."
                        eventReference="Juan 2"
                    />
                    <TimeLineEvent
                        eventOrder="14"
                        eventTitle="Jesús purifica el templo de mercaderes"
                        eventDescription="Cuando Jesús halla mercaderes en el templo se enfurece de gran manera haciendo énfasis en no hacer la casa del Padre casa de mercadeo."
                        eventReference="Juan 2 13"
                    />

                    <TimeLineEvent
                        eventOrder="15"
                        eventTitle="Jesús purifica el templo de mercaderes"
                        eventDescription="Cuando Jesús halla mercaderes en el templo se enfurece de gran manera haciendo énfasis en no hacer la casa del Padre casa de mercadeo."
                        eventReference="Juan 2 13"
                    />
                </Row>
            </Container>
        </Container >
    )
}

export default TimeLine