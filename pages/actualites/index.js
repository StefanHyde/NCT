import { Suspense, useEffect, useState } from 'react';
import { getPosts } from '@api/wordpress/service';
import Head from 'next/head';
import Hero from '@components/hero';
import BlogPostBlock from '@components/blogPostBlock';
import coverImg from '../../public/img/actualites/NCT-68.jpg'



const POSTS_PER_PAGE = 8;

// Créer un composant pour la liste des posts
function BlogPostList({ posts }) {
  return (
    <div >
      {posts.map((post) => (
        <BlogPostBlock key={post.id} post={post} />
      ))}
    </div>
  );
}

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      const allPosts = await getPosts(50);
      setPosts(allPosts);
      setTotalPosts(allPosts.length);
      setIsLoading(false);
    };

    fetchPosts();
  }, []);

  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const visiblePosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        <title>Actualités | Neon Cobra 🐍</title>
        <meta name="description" content="Toutes les actualités et nouveautés de notre salon de tatouage" />
      </Head>

      <div className="mt-18">
        <Hero title="Nos actualités" description="Toutes les actualités et nouveautés de notre salon de tatouage" src={coverImg} place="xl:ml-40" />
      </div>
      <div className="flex justify-center py-12 bg-neutrals-0 space-y-4">
        <div className="w-full p-6 md:w-2/3 xl:w-1/2 font-poppins text-start text-neutrals-1000">
          <BlogPostList posts={posts} />
        </div>
      </div>
    </>
  );
}