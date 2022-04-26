import {useDispatch, useSelector} from "react-redux";
import {counterAction} from "../redux";

const Counter = () => {

    const {count1, count2} = useSelector(state => state.counter);

    const dispatch = useDispatch();

    return (
        <div>
            <h2>{count1}</h2>
            <button onClick={()=>dispatch(counterAction.incCount1())}>Inc</button>
            <button onClick={()=>dispatch(counterAction.decCount1())}>Dec</button>
            <button onClick={()=>dispatch(counterAction.resetCount1())}>Reset</button>
            <h2>{count2}</h2>
            <button onClick={()=>dispatch(counterAction.incCount2())}>Inc</button>
            <button onClick={()=>dispatch(counterAction.decCount2())}>Dec</button>
            <button onClick={()=>dispatch(counterAction.resetCount2(10))}>Reset</button>
        </div>
    );
};

export {
    Counter
};