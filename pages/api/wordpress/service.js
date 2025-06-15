/**
 * Fetches a list of posts from the WordPress API.
 *
 * @param {number} [first=10] - The number of posts to fetch. Defaults to 10.
 * @returns {Promise<Array<{ excerpt: string; featuredImage: { node: { sourceUrl: string } }; slug: string; title: string }>>}
 * A promise that resolves to an array of post objects, each containing the excerpt, featured image URL, slug, and title.
 */

import { fetchWPAPI } from './base';

// To gets posts
export async function getPosts(first = 10) {
  const data = await fetchWPAPI(
    `query FetchPosts($first: Int = 10) {
      posts(first: $first, where: { status: PUBLISH }) {
        nodes {
          excerpt
          featuredImage {
            node {
              sourceUrl
            }
          }
          slug
          title
          date
          status
          author {
            node {
              name
            }
          }
          tags {
            nodes {
              name
            }
          }
        }
      }
    }`,
    {
      variables: {
        first,
      },
    },
  );

  return data?.posts?.nodes;
}

// Test function to check WordPress API
export async function testWordPressAPI() {
  const data = await fetchWPAPI(
    `query TestAPI {
      posts(first: 1) {
        nodes {
          id
          title
          slug
          status
        }
      }
    }`
  );

  console.log('[testWordPressAPI] Response:', JSON.stringify(data, null, 2));
  return data;
}

// To get a single post
export async function getPostBySlug(slug) {
  console.log('[getPostBySlug] Attempting to fetch post with slug:', slug);

  // First test the API
  await testWordPressAPI();

  const data = await fetchWPAPI(
    `query GetPost($slug: String!) {
      postBy(slug: $slug) {
        databaseId
        content
        status
        featuredImage {
          node {
            sourceUrl
          }
        }
        slug
        seo {
          metaDesc
          title
          fullHead
          focuskw
          opengraphImage {
            id
            uri
            link
          }
          opengraphDescription
          opengraphTitle
          opengraphUrl
        }
        title
        date
        author {
          node {
            name
            id
          }
        }
        tags {
          nodes {
            name
          }
        }
      }
    }`,
    {
      variables: {
        slug,
      },
    },
  );

  console.log('[getPostBySlug] Response:', JSON.stringify(data, null, 2));
  return data?.postBy;
}

// To get comments for a post
export async function getCommentsByPostId(postId) {
  const data = await fetchWPAPI(
    `query GetComments($postId: ID!) {
      post(id: $postId, idType: SLUG) {
        comments {
          nodes {
            id
            content(format: RENDERED)
            date
            parentId
            author {
              node {
                name
              }
            }
            replies {
              nodes {
                id
                content(format: RENDERED)
                date
                parentId
                author {
                  node {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }`,
    {
      variables: {
        postId,
      },
    },
  );

  return data?.post?.comments?.nodes || [];
}

// To add a comment to a post
export async function addComment(
  postSlug,
  author,
  content,
  email,
) {
  // First, get the post's database ID
  const post = await getPostBySlug(postSlug);
  if (!post?.databaseId) {
    throw new Error("Impossible de trouver l'ID de l'article");
  }

  const data = await fetchWPAPI(
    `mutation CreateComment($input: CreateCommentInput!) {
      createComment(input: $input) {
        success
        comment {
          id
          content
          date
          status
          author {
            node {
              name
            }
          }
        }
      }
    }`,
    {
      variables: {
        input: {
          commentOn: post.databaseId,
          content,
          author,
          authorEmail: email,
        },
      },
    },
  );

  return data?.createComment;
}

// To add a reply to a comment
export async function addReply(
  postSlug,
  parentCommentId,
  author,
  content,
  email,
) {
  // First, get the post's database ID
  const post = await getPostBySlug(postSlug);
  if (!post?.databaseId) {
    throw new Error("Impossible de trouver l'ID de l'article");
  }

  const data = await fetchWPAPI(
    `mutation CreateComment($input: CreateCommentInput!) {
      createComment(input: $input) {
        success
        comment {
          id
          content
          date
          status
          author {
            node {
              name
            }
          }
        }
      }
    }`,
    {
      variables: {
        input: {
          commentOn: post.databaseId,
          content,
          author,
          authorEmail: email,
          parent: parentCommentId,
        },
      },
    },
  );

  return data?.createComment;
}