import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Feed } from './pages/Feed';
import { Profile } from './pages/Profile';
import { PostDetail } from './pages/PostDetail';
import { CreatePost } from './pages/CreatePost';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Feed />} />
          <Route path="/profile/:userId" element={<Profile />} />
          <Route path="/post/:postId" element={<PostDetail />} />
          <Route path="/create" element={<CreatePost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;