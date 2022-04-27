import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {dogsActions} from "../../redux";

const DogForm = () => {
    const [name, setName] = useState('');
    const {dogForUpdate} = useSelector(({dogs}) => dogs);
    const dispatch = useDispatch();

    useEffect(() => {
        if (dogForUpdate) {
            setName(dogForUpdate.dogName)
        }
    }, [dogForUpdate])

    function saveDog() {
        if (dogForUpdate) {
            dispatch(dogsActions.update({id:dogForUpdate.id, name}))
        } else {
            dispatch(dogsActions.add({dog: name}))
        }
        setName('');
    }

    return (
        <div>
            <label> Dog :
                <input type="text" placeholder={'Dog name'} onChange={({target}) => setName(target.value)}
                value={name}/>
            </label>
            <button onClick={() => saveDog()}>{dogForUpdate ? 'update' : 'create'}</button>
        </div>
    );
};

export {
    DogForm
};