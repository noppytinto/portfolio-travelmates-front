import logo from './logo.svg';
import './App.scss';
//
import { Route, Routes, Navigate } from 'react-router-dom';
import * as assets from './utils/assets-manager';
// pages
import Timeline from './pages/Timeline/Timeline';


function App() {


    ///////////////////////////////////
    // JSX
    ///////////////////////////////////
    return (
        <div className="App">
            <Routes>
                <Route path={assets.pathRoot} element={<Timeline />} />
                <Route index element={<Timeline />} />


                {/* <Route path={assets.pathRoot} element={<WithMainHeader />}>
                    <Route index element={<ExplorePage />} />
                    <Route path={assets.pathExplorePage} element={<ExplorePage />} />
                    <Route path={assets.pathFeedsPage} element={<FeedsPage />} />
                    <Route path={assets.pathSearchPage} element={<SearchPage />} />

                    <Route path={assets.pathPlayground} element={<PlaygroundPage />} />
                    <Route path={assets.pathTest} element={<Navigate to={assets.pathPlayground} />} />
                    <Route path={assets.pathAny} element={<Error404Page />} />
                </Route> */}

                {/* <Route path={assets.pathRoot} element={<WithoutMainHeader />}>
                    <Route path={assets.pathNotificationPage} element={<NotificationPage />} />
                    <Route path={assets.pathMovieInfoPageWithId} element={<MoviePage />} />
                    <Route path={assets.pathSinUpPage} element={<SignUpPage />} />
                    <Route path={assets.pathLoginPage} element={<LoginPage />} />
                    <Route path={assets.pathProfilePage} element={<ProfilePage />} />
                    <Route path={assets.pathExploreList} element={<ExplorePageList />} />
                </Route> */}
            </Routes>
        </div>
    );
}// App

export default App;
