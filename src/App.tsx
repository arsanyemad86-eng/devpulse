import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';

const Feed = lazy(() => import('./pages/Feed').then((m) => ({ default: m.Feed })));
const Profile = lazy(() => import('./pages/Profile').then((m) => ({ default: m.Profile })));
const PostDetail = lazy(() => import('./pages/PostDetail').then((m) => ({ default: m.PostDetail })));
const CreatePost = lazy(() => import('./pages/CreatePost').then((m) => ({ default: m.CreatePost })));

function PageFallback() {
  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <div className="h-6 w-32 bg-surface rounded animate-pulse" />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <Suspense fallback={<PageFallback />}>
                <Feed />
              </Suspense>
            }
          />
          <Route
            path="/profile/:userId"
            element={
              <Suspense fallback={<PageFallback />}>
                <Profile />
              </Suspense>
            }
          />
          <Route
            path="/post/:postId"
            element={
              <Suspense fallback={<PageFallback />}>
                <PostDetail />
              </Suspense>
            }
          />
          <Route
            path="/create"
            element={
              <Suspense fallback={<PageFallback />}>
                <CreatePost />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;