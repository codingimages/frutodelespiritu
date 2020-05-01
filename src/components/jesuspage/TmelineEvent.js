import React from "react"
import Col from "react-bootstrap/Col"

const TimeLineEvent = ({ eventOrder, imgUrl, imgDescription, eventTitle, eventDescription, eventReference }) => {
    return (
        <>
            <Col
                data-sal="slide-right"
                data-sal-easing="ease"
                className="p-0 my-auto text-center" xs={1} ß>
                <p style={{ height: 32, width: 32 }} className="bg-primary text-light d-inline-block p-2 rounded-circle d-flex align-items-center justify-content-center">{eventOrder}</p>
            </Col>
            <Col
                data-sal="slide-left"
                data-sal-easing="ease"
                className="p-0" xs={11}>
                <div className="card text-white bg-primary mb-3">
                    <div className="card-header">{eventTitle}</div>
                    <div className="p-3">
                        <p className="card-text">{eventDescription}</p>
                        <p className="card-text">{eventReference}</p>
                    </div>
                </div>
            </Col>
        </>
    )
}

export default TimeLineEvent