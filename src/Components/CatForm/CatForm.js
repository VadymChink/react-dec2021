import {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";

import {catAction} from "../../redux";

const CatForm = () => {
    const {catForUpdate} = useSelector(({cats}) => cats);
    const name = useRef();
    const dispatch = useDispatch();

    useEffect(() => {
        if (catForUpdate) {
            name.current.value = catForUpdate.nameCat
        }
    }, [catForUpdate])

    const saveCats = () => {
        if (catForUpdate) {
            const newCat = name.current.value
            dispatch(catAction.updateCat({id: catForUpdate.id, name: newCat}))
        } else {
            const newCat = name.current.value
            dispatch(catAction.add({cat: newCat}))
        }
        name.current.value = ''
    }

    return (
        <div>
            <label>Cat:
                <input type="text" ref={name} placeholder={'Cat name'}/>
            </label>
            <button onClick={() => saveCats()}>{catForUpdate ? 'update' : 'create'}</button>
        </div>
    );
};

export {
    CatForm
};