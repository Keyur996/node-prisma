import prisma from './../../prisma/prisma-connect';
import { ICategory } from './post.model';

export const getAllPosts = (query?: any) => {
  try {
    return prisma.post.findMany({
      include: {
        author: true,
        categories: true,
      },
    });
  } catch (err) {
    console.log('Error inside getAllPosts', err);
    throw err;
  }
};

const getExistingCategories = (_categories: string[]) => {
  return prisma.category.findMany({
    where: {
      name: { in: _categories },
    },
  });
};

const getCategoriesQuery = async (post: any) => {
  let category = null;
  const existingCategories = await getExistingCategories(post.categories || []);

  return (post.categories || []).map((_cat: string) => {
    category = existingCategories.find((_c: ICategory) => _c.name === _cat);
    if (category) {
      return {
        category: {
          connect: {
            id: category.id,
          },
        },
      };
    } else {
      return {
        category: {
          create: {
            name: _cat,
          },
        },
      };
    }
  });
};

export const createPost = async (post: any) => {
  try {
    const categories = await getCategoriesQuery(post);
    return prisma.post.create({
      data: {
        ...post,
        categories: {
          create: categories,
        },
      },
    });
  } catch (err) {
    console.log('Error inside createPost', err);
    throw err;
  }
};

export const updatePost = async (id: number | undefined, post: any) => {
  try {
    const categories = await getCategoriesQuery(post);
    return prisma.post.update({
      where: { id: id },
      data: {
        ...post,
        updatedAt: new Date(),
        categories: {
          create: categories,
        },
      },
    });
  } catch (err) {
    console.log('Error inside updatePost', err);
    throw err;
  }
};

export const deletePost = (id: number | undefined) => {
  try {
    return prisma.post.delete({
      where: { id: id },
    });
  } catch (err) {
    console.log('Error inside deletePost', err);
    throw err;
  }
};

export const postById = (id: number | undefined) => {
  try {
    return prisma.post.findFirst({
      where: {
        id: id,
      },
      include: {
        author: true,
        categories: true,
      },
    });
  } catch (err) {
    console.log('Error inside getPostById', err);
    throw err;
  }
};
