import PropTypes from "prop-types";


const PriceOption = ({option}) => {
    const {name,price,features}=option
    return (
        <div className="border-2 border-blue-700 bg-blue-500 rounded-xl px-5 py-4 text-white flex flex-col space-y-4 justify-center items-center w-full h-full"> 
            <h2><span className="text-5xl">{price}$</span>
            <span className="text-3xl"> /mon</span>
            </h2>
            <div className="flex-grow">
            <h1 className="text-black font-bold">{name}</h1>
            <p>{features.map(feature  => <p>{feature} </p>)}</p>
            </div>
            <button className="w-full bg-gray-500 py-1 rounded-xl  ">Subscribe Now</button>
            
        </div>
    );
};
PriceOption.protoType={
    option:PropTypes.object
}

export default PriceOption;