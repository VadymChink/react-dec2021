import {Link} from "react-router-dom";

const Car = ({car,car:{id,model}}) => {

    return (
        <div>
            {id}--{model}
            <Link to={id.toString()} state={car}>
                <button>Get Details</button>
            </Link>
        </div>
    );
};

export {
    Car
};