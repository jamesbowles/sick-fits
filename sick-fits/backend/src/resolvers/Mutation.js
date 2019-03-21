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
  },
  async deleteItem(parent, args, ctx, info) {
    const where = { id: args.id };
    const item = await ctx.db.query.item({ where }, `{id title}`);
    // TOOD - check the user owns the item
    return ctx.db.mutation.deleteItem({ where }, info);
  }
};

module.exports = mutations;
