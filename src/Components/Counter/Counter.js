import {useDispatch, useSelector} from "react-redux";
import {counterActions} from "../../redux";
const Counter = () => {
    const {counter1} = useSelector(({counter})=>counter);
    const dispatch = useDispatch();
    return (
        <div>
            {counter1}
            <button onClick={()=>dispatch(counterActions.inc1())}>inc</button>
            <button onClick={()=>dispatch(counterActions.dec1())}>dec</button>
            <button onClick={()=>dispatch(counterActions.reset1())}>reset</button>
        </div>
    );
};

export {
    Counter
};