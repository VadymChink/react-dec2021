import axios from "axios";

import baseURL from "../Constsnts/link";

export const axiosService = axios.create({baseURL})