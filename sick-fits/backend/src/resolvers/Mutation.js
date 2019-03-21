const mutations = {
  async createItem(parent, args, ctx, info) {
    //TODO - check if logged in
    const item = await ctx.db.mutation.createItem(
      {
        data: { ...args }
      },
      info
    );

    return item;
  },
  async updateItem(parent, args, ctx, info) {
    const updates = { ...args };
    delete updates.id;
    return (item = await ctx.db.mutation.updateItem({
      data: updates,
      where: {
        id: args.id
      },
      info
    }));
  }
};

module.exports = mutations;
