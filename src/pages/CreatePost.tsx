import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Post, PostType } from '../types';
import { usePostsStore } from '../features/posts/postsStore';

const typeLabels: Record<PostType, string> = {
  'build-log': 'Build Log',
  'question': 'Question',
  'showcase': 'Showcase',
};

export function CreatePost() {
  const navigate = useNavigate();
  const addPost = usePostsStore((state) => state.addPost);
  const currentUserId = 'u1';

  const [postType, setPostType] = useState<PostType>('build-log');
  const [content, setContent] = useState('');

  // build-log fields
  const [projectName, setProjectName] = useState('');
  const [progressPercentage, setProgressPercentage] = useState('');

  // question fields
  const [title, setTitle] = useState('');
  const [tagsInput, setTagsInput] = useState('');

  // showcase fields
  const [projectTitle, setProjectTitle] = useState('');
  const [projectUrl, setProjectUrl] = useState('');
  const [repoUrl, setRepoUrl] = useState('');

  const isValid = content.trim() !== '' && (
    (postType === 'build-log' && projectName.trim() !== '') ||
    (postType === 'question' && title.trim() !== '') ||
    (postType === 'showcase' && projectTitle.trim() !== '')
  );

  const handleSubmit = () => {
    if (!isValid) return;

    const base = {
      id: `p${Date.now()}`,
      authorId: currentUserId,
      content: content.trim(),
      createdAt: new Date().toISOString(),
      likesCount: 0,
      commentsCount: 0,
    };

    let newPost: Post;

    if (postType === 'build-log') {
      newPost = {
        ...base,
        type: 'build-log',
        projectName: projectName.trim(),
        progressPercentage: progressPercentage ? Number(progressPercentage) : undefined,
      };
    } else if (postType === 'question') {
      newPost = {
        ...base,
        type: 'question',
        title: title.trim(),
        tags: tagsInput.split(',').map((t) => t.trim()).filter(Boolean),
        isResolved: false,
      };
    } else {
      newPost = {
        ...base,
        type: 'showcase',
        projectTitle: projectTitle.trim(),
        projectUrl: projectUrl.trim() || undefined,
        repoUrl: repoUrl.trim() || undefined,
      };
    }

    addPost(newPost);
    navigate('/');
  };

  return (
    <div className="max-w-2xl mx-auto py-8 px-4 space-y-6">
      <h1 className="text-2xl font-bold text-zinc-100">Create Post</h1>

      {/* Type Selector */}
      <div className="flex gap-2">
        {(Object.keys(typeLabels) as PostType[]).map((type) => (
          <button
            key={type}
            onClick={() => setPostType(type)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              postType === type
                ? 'bg-primary text-white'
                : 'bg-surface text-zinc-400 hover:text-zinc-100'
            }`}
          >
            {typeLabels[type]}
          </button>
        ))}
      </div>

      {/* Type-specific fields */}
      {postType === 'build-log' && (
        <div className="space-y-3">
          <input
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            placeholder="Project name"
            className="w-full bg-surface border border-border rounded-lg px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-primary"
          />
          <input
            value={progressPercentage}
            onChange={(e) => setProgressPercentage(e.target.value)}
            type="number"
            min={0}
            max={100}
            placeholder="Progress % (optional)"
            className="w-full bg-surface border border-border rounded-lg px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-primary"
          />
        </div>
      )}

      {postType === 'question' && (
        <div className="space-y-3">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Question title"
            className="w-full bg-surface border border-border rounded-lg px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-primary"
          />
          <input
            value={tagsInput}
            onChange={(e) => setTagsInput(e.target.value)}
            placeholder="Tags (comma separated, e.g. react, css)"
            className="w-full bg-surface border border-border rounded-lg px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-primary"
          />
        </div>
      )}

      {postType === 'showcase' && (
        <div className="space-y-3">
          <input
            value={projectTitle}
            onChange={(e) => setProjectTitle(e.target.value)}
            placeholder="Project title"
            className="w-full bg-surface border border-border rounded-lg px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-primary"
          />
          <input
            value={projectUrl}
            onChange={(e) => setProjectUrl(e.target.value)}
            placeholder="Live demo URL (optional)"
            className="w-full bg-surface border border-border rounded-lg px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-primary"
          />
          <input
            value={repoUrl}
            onChange={(e) => setRepoUrl(e.target.value)}
            placeholder="Repo URL (optional)"
            className="w-full bg-surface border border-border rounded-lg px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-primary"
          />
        </div>
      )}

      {/* Shared content field */}
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your post content..."
        rows={4}
        className="w-full bg-surface border border-border rounded-lg px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-primary resize-none"
      />

      <button
        onClick={handleSubmit}
        disabled={!isValid}
        className="px-5 py-2.5 rounded-lg bg-primary text-white text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors"
      >
        Publish
      </button>
    </div>
  );
}