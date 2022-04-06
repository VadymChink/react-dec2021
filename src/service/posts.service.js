import {placeholder} from "../constants";

export const postsService = {
    getAllPosts: ()=> fetch(placeholder.apiUrl +'posts').then(value => value.json())
}
