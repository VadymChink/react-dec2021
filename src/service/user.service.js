import {placeholder} from "../constants";

export const userService = {
    getAllUser: ()=> fetch(placeholder.apiUrl +'users').then(value => value.json())
}
