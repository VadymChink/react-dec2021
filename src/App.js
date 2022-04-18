import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {
    AboutPage,
    CommentsPage,
    HomePage,
    NotFoundPage,
    PostsPages,
    SinglePostPage,
    UsersPage
} from "./pages";
import {UserDetailsPage} from "./pages/UserDetailsPage/UserDetailsPage";
import {UserPostPage} from "./pages/UserPosts/UserPostPage";

function App() {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'users'} element={<UsersPage/>}>
                    <Route path={':id'} element={<UserDetailsPage/>}>
                        <Route path={':userid'} element={<UserPostPage/>}/>
                    </Route>
                </Route>
                <Route path={'posts'} element={<PostsPages/>}>
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
