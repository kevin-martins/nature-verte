import React from "react"
import Button from "./Button"

const Card = ({ plant }) => {
    return (
        <div className="">
            <h2>{plant.name}</h2>
            <Button
                type="button"
                text="Acheter"
                className=""
            />
            {/* <img
                href=""
                alt=""
                className=""
            /> */}
            <p>{plant.description}</p>
            <section>
                <p>{plant.review}</p>
                <p>{plant.price}</p>
            </section>
        </div>
    )
}

export default Card
