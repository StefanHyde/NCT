import Image from 'next/image';
import defaultCoverImage from '@public/img/actualites/NCT-2.jpg';



export default function BlogPostHeader({
  title,
  date,
  author,
  coverImage,
  tags,
}) {
  return (
    <div className="relative mx-auto mt-14 flex h-full w-full flex-col justify-center">

      <div className="absolute z-20 flex md:h-full w-full flex-col items-start justify-end p-6 md:p-12">
        <div className="flex flex-col md:w-3/4 bg-neutrals-0 rounded-md p-6 border-4 border-primary-300">
          <h1 className="font-poppins text-neutrals-1000 mb-6 text-4xl font-semibold md:text-5xl">
            {title}
          </h1>
          <p className="text-sm font-thin mb-6">
            {`Posté le 
          ${new Date(date).toLocaleDateString('fr-FR', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })} par ${author}`}
          </p>

          <div className="flex flex-wrap gap-2">
            {tags?.nodes?.map((tag) => (
              <div
                key={tag.name}
                className="bg-primary-200 dark:bg-primary-500 text-primary-900 dark:text-almost-white mr-2 rounded-sm p-1 text-xs"
              >
                {tag.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Image
        src={coverImage ? coverImage : defaultCoverImage} // Use fallback image if no cover image is provided
        alt={title}
        width={1200}
        height={800}
        className=" w-full object-cover object-center h-128"
      />
    </div>
  );
}