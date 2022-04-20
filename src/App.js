import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from './layouts'
import {
    AboutPage,
    CommentsPage,
    HomePage, LoginPage,
    NotFoundPage,
    PostDetailsPage,
    PostsPage,
    UserDetailsPage,
    UserPostsPage,
    UsersPage
} from "./pages";
import {RequireAuth} from "./hoc";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'users'} element={
                    <RequireAuth>
                        <UsersPage/>
                    </RequireAuth>
                }>
                    <Route path={':id'} element={<UserDetailsPage/>}>
                        <Route path={'posts'} element={<UserPostsPage/>}/>
                    </Route>
                </Route>
                <Route path={'posts'} element={<PostsPage/>}>
                    <Route path={':id'} element={<PostDetailsPage/>}>
                        <Route path={'comments'} element={<CommentsPage/>}/>
                    </Route>
                </Route>
                <Route path={'about'} element={<AboutPage/>}/>
                <Route path={'login'} element={<LoginPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
