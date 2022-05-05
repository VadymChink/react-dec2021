import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./Layouts";
import {CarsPage, NotFoundPage} from "./pages";
import {CarDetailsPage} from "./pages/CarDetailsPage/CarDetailsPage";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'/cars'}/>}/>
                <Route path={'cars'} element={<CarsPage/>}>
                    <Route path={':id'} element={<CarDetailsPage/>}/>
                </Route>
                <Route path="*" element={<NotFoundPage/>}/>
            </Route>

        </Routes>
    );
}

export default App;
