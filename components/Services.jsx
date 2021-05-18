const { default: ServicesItem } = require("./ServicesItem")


const Services = () => {
    return (
        <div id="services" className="container">
            <div className="w-full px-10 py-10 font-bold">
                <h2 className="px-10">
                    Lorem ipsum, or lipsum as it is sometimes known, 
                    is dummy text used in laying out print, graphic or web designs. 
                    The passage is attributed to an unknown typesetter in the 15th century 
                    who is thought to have scrambled parts of Cicero's 
                    De Finibus Bonorum et Malorum for use in a type specimen book.
                </h2>
                <ServicesItem />
                <ServicesItem />
                <ServicesItem />
                <ServicesItem />
            </div>
        </div>
    )
};

export default Services;