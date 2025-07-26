import { getPostBySlug, getCommentsByPostId } from '@api/wordpress/service';
import Head from 'next/head';
import BlogPostHeader from '@/components/blogPostHeader';
import Breadcrumbs from '@/components/blogBreadcrumbs';



export default function BlogPost({ post, comments }) {
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <Head>
        <title> {post.seo?.title || post.title} | Neon Cobra 🐍 </title>
        <meta name="description" content={post.seo?.metaDesc || ''} />
        <meta name="keywords" content={post.seo?.focuskw || ''} />
        <meta property="og:title" content={post.seo?.opengraphTitle || post.seo?.title || post.title} />
        <meta property="og:description" content={post.seo?.opengraphDescription || post.seo?.metaDesc || ''} />
        <meta property="og:url" content={post.seo?.opengraphUrl || ''} />
        <meta property="og:image" content={post.seo?.opengraphImage?.link || ''} />
      </Head>

      <main className="bg-neutrals-0">
        <div className="relative mx-auto flex w-full flex-col items-start">
          <BlogPostHeader
            title={post.title}
            date={post.date}
            author={post.author?.node?.name}
            coverImage={post.featuredImage?.node?.sourceUrl || null}
            tags={post.tags}
          />
        </div>


        <div className="text-neutrals-800 mx-auto flex w-full flex-col justify-center gap-10 p-6 md:p-12 xl:w-3/4">
          <Breadcrumbs title={post.title} />
          <section>
            <div
              className="post-content mx-auto w-full space-y-6 py-6 text-base sm:w-4/5 xl:w-3/5"
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></div>
          </section>


        </div>
      </main>
    </>
  );
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  try {
    const post = await getPostBySlug(slug);
    const comments = await getCommentsByPostId(slug);

    if (!post) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        post,
        comments,
      },
      revalidate: 60, // Revalidate every 60 seconds
    };
  } catch (error) {
    console.error('Error fetching post:', error);
    return {
      notFound: true,
    };
  }
}

export async function getStaticPaths() {
  // Vous pouvez retourner des paths vides et utiliser fallback: 'blocking'
  // pour générer les pages à la demande
  return {
    paths: [],
    fallback: 'blocking',
  };
}