import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {AboutPage, CommentsPage, HomePage, NotFoundPage, PostPages, SinglePostPage, UserPage} from "./pages";
function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'users'} element={<UserPage/>}/>
                <Route path={'posts'} element={<PostPages/>}>
                    <Route path={':id'} element={<SinglePostPage/>}>
                        <Route path={':id'} element={<CommentsPage/>}/>
                    </Route>
                </Route>
                <Route path={'about'} element={<AboutPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
