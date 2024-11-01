import PriceOption from "../PriceOpton/PriceOption";


const PriceOptions = () => {

    const priceOptions=[
        {
          "name": "Basic Membership",
          "id": "001",
          "price": 25,
          "features": [
            "Access to gym equipment",
            "Lockers",
            "Showers",
            "Off-peak hours access"
          ]
        },
        {
          "name": "Standard Membership",
          "id": "002",
          "price": 40,
          "features": [
            "Access to gym equipment",
            "All-day entry",
            "Group classes",
            "Lockers",
            "Showers"
          ]
        },
        {
          "name": "Premium Membership",
          "id": "003",
          "price": 60,
          "features": [
            "Standard membership benefits",
            "Sauna access",
            "Pool access",
            "Specialized workout zones"
          ]
        },
        {
          "name": "Family Package",
          "id": "004",
          "price": 100,
          "features": [
            "Access for up to 4 family members",
            "All Standard membership benefits",
            "Free guest passes"
          ]
        },
        {
          "name": "Student Plan",
          "id": "005",
          "price": 20,
          "features": [
            "Discounted Standard membership",
            "Proof of enrollment required"
          ]
        }
      ]
      

    return (
        <div className="mt-14">
            <h2 className="text-3xl font-bold">Choose your subscription</h2>
            <div className="grid grid-cols-1 md:grid-rows-2 md:grid-cols-3 items-center justify-center gap-4 my-12 mx-10">
            {
                priceOptions.map(option=> <PriceOption key={option.id} option={option}> </PriceOption>)
            }
            </div>
            
        </div>
    );
};

export default PriceOptions;