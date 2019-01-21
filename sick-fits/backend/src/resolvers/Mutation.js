const Mutation = {
  async createItem(parent, args, ctx, info) {
    // TODO: Check if they are logged in

    // ctx.db is how to access db, can also export db into file
    const item = await ctx.db.mutation.createItem(
      {
        data: {
          ...args
        }
      },
      info
    );
    return item;
  }
  // createDog(parent, args, ctx, info) {
  //   global.dogs = global.dogs || [];
  //   // create a dog
  //   const newDog = { name: args.name };
  //   global.dogs.push(newDog);
  //   return newDog;
  // }
};

module.exports = Mutation;
