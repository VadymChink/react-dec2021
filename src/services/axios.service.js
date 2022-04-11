import axios from "axios";

import baseURL from "../constants/constants";

export const axiosService = axios.create({baseURL});