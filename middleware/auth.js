export default (ctx) => {
  let user = ctx.store.state.users.registered.find(
    (u) => ctx.route.query.name === u.name
  );
  if (!user) {
    console.log("You can not access here!");
    return ctx.redirect({ name: "index" });
  }
};
