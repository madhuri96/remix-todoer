const { PrismaClient } = require('@prisma/client');
const db = new PrismaClient();

async function seed() {
  const kody = await db.user.create({
    data: {
      username: "koko",
      email: "k12@gmail.com",
      // this is a hashed version of "twixrox"
      passwordHash:
        "$2b$10$K7L1OJ45/4Y2nIvhRVpCe.FSmhDdWoXehVzJptJ/op0lSsvqNu/1u",
    },
  });
  const categories = await seedCategories();
  await Promise.all(
    getTodo(categories, kody.id).map(async (todo) => {
      const subtasks = todo.subtask;
      delete todo.subtask;
      const createdTodo = await db.todo.create({
        data: {
          ...todo,
          subtask: {
            create: subtasks.map(subtask => ({
              title: subtask.title,
              status: subtask.status,
            })),
          },
        },
      });
      console.log('Todo seeded:', createdTodo);
    })
  );
}


async function seedCategories() {
  const categoryData = getCategoryData();

  const createdCategories = [];
  for (const category of categoryData) {
    const createdCategory = await db.category.create({
      data: {
        category: category.category,
      },
    });
    createdCategories.push(createdCategory);
    console.log('Category seeded:', createdCategory);
  }

  return createdCategories;
}


seed();

function getTodo(categories, userId) {
  return [
    {
      title: 'Complete the project',
      description: 'Finish building the Todo app.',
      status: 'in-progress',
      categoryId: categories[0].id, 
      todosId: userId,
      subtask: [
        {
          title: 'Implement authentication',
          status: 'in-progress',
        },
        {
          title: 'Add styling',
          status: 'completed',
        },
      ],
    },
    {
      title: 'Prepare presentation',
      description: 'Create slides for the project presentation.',
      status: 'in-progress',
      categoryId: categories[0].id, 
      todosId: userId,
      subtask: [
        {
          title: 'Create outline',
          status: 'in-progress',
        },
        {
          title: 'Design slides',
          status: 'completed',
        },
      ],
    },
    {
      title: 'Buy groceries',
      description: 'Get milk, eggs, and vegetables.',
      status: 'completed',
      categoryId: categories[1].id, 
      todosId: userId,
      subtask: [
        {
          title: 'Visit the supermarket',
          status: 'in-progress',
        },
        {
          title: 'Check off items',
          status: 'completed',
        },
      ],
    },
  ];
}


function getCategoryData() {
  return [
    {
      category: 'Work',
    },
    {
      category: 'Personal',
    },
    // Add more categories 
  ];
}