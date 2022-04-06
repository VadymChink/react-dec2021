import {placeholder} from "../constants";

export const commentsService = {
    getAllComments: () => fetch(placeholder.apiUrl + 'comments').then(value => value.json())
}
