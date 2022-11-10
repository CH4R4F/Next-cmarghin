import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_API;

// Get all posts
export const getPosts = async () => {
  const query = gql`
    query getPosts {
      posts(orderBy: createdAt_DESC) {
        id
        title
        slug
        description
        cover {
          url
        }
        categories {
          id
          name
          slug
        }
      }
    }
  `;

  const res = await request(graphqlAPI, query);
  return res.posts;
};

// Get featured posts only
export const getFeaturedPosts = async () => {
  const query = gql`
    query getFeaturedPosts {
      posts(where: { featured: true }, orderBy: createdAt_DESC) {
        id
        title
        slug
        description
        cover {
          url
        }
        categories {
          id
          name
          slug
        }
      }
    }
  `;

  const res = await request(graphqlAPI, query);
  return res.posts;
};

// Get all categories
export const getCategories = async () => {
  const query = gql`
    query getCategories {
      categories {
        id
        name
        slug
      }
    }
  `;

  const res = await request(graphqlAPI, query);
  return res.categories;
};

// Get all posts by category
export const getPostsByCategory = async (slug) => {
  const query = gql`
    query getPostsByCategory($slug: String!) {
      posts(where: { categories_some: { slug: $slug } }) {
        id
        title
        slug
        description
        cover {
          url
        }
        categories {
          id
          name
          slug
        }
      }
    }
  `;

  const res = await request(graphqlAPI, query, { slug });
  return res.posts;
};

// Get all projects
export const getProjects = async () => {
  const query = gql`
    query getProjects {
      projects(orderBy: createdAt_DESC) {
        id
        title
        slug
        type
        description
        technologies
        source
        demo
        cover {
          url
        }
      }
    }
  `;

  const res = await request(graphqlAPI, query);
  return res.projects;
};

// Get a single post by slug
export const getProject = async (slug) => {
  const query = gql`
    query getProject($slug: String!) {
      projects(where: { slug: $slug }) {
        id
        title
        slug
        type
        description
        technologies
        source
        demo
        cover {
          url
        }
        images {
          url
        }
      }
    }
  `;

  const res = await request(graphqlAPI, query, { slug });
  return res.projects[0];
};
