import {useDispatch} from "react-redux";
import {catAction} from "../../redux";

const Cat = ({cat}) => {
    const {id, nameCat}= cat
const dispatch = useDispatch();
    return (
        <div>
            {id} -- {nameCat}
            <button onClick={()=>dispatch(catAction.setCatFor({cat}))}>update</button>
            <button onClick={()=>dispatch(catAction.delCat({id}))}>delete</button>
        </div>
    );
};

export {
    Cat
};