

const ServicesItem = () => {
    return (
        <div className="w-full flex py-10">
          <div className="w-1/2 pr-10">
                <div className="black-box w-full h-full bg-gray-900 flex justify-end items-center">
                    <h1 className="text-white tracking-widest text-5xl">Estrategia</h1>
                </div>
            </div>
            <div className="w-1/2">
                <p className="text-xs py-10">
                    Lorem ipsum, or lipsum as it is sometimes known, 
                    is dummy text used in laying out print, graphic or web designs. 
                    The passage is attributed to an unknown typesetter in the 15th 
                    century who is thought to have scrambled parts of Cicero's 
                    De Finibus Bonorum et Malorum for use in a type specimen book.
                </p>
            </div>
            <style jsx>{`
            .black-box{

            }
            `}</style>
        </div>
    );
};

export default ServicesItem;