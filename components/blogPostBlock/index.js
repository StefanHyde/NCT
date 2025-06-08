import Link from 'next/link';

export default function BlogPostBlock({ post }) {
  return (
    <Link href={`/blog/posts/${post.slug}`}>
      <article
        key={post.id}
        className="group border-2 border-neutrals-1000 rounded-md hover:border-primary-300 transition-all duration-300 ease-in-out mb-8"
      >

        <div className="flex h-1/2 flex-col justify-around p-4 mb-8">
          <h3 className=" group-hover:text-primary-300 font-scified text-xl md:text-3xl font-normal text-neutrals-1000 mb-6 transition-all duration-300 ease-in-out">
            {post.title}
          </h3>
          <div className="mb-3 flex flex-wrap gap-2 text-sm text-gray-500">
            {post.tags.nodes.map((tag) => (
              <span
                key={tag.name}
                className="bg-primary-200 text-neutrals-900 rounded-sm p-1 text-xs"
              >
                {tag.name}
              </span>
            ))}
          </div>
          <p className="text-sm font-thin mb-6">{`le 
          ${new Date(post.date).toLocaleDateString('fr-FR', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}`}</p>

          <div className="flex flex-col">
            <div
              className="font-poppins text-neutrals-1000 font-light"
              dangerouslySetInnerHTML={{ __html: post.excerpt }}
            />
          </div>

        </div>
      </article>
    </Link>
  );
}