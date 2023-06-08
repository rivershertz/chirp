import { clerkClient } from "@clerk/nextjs";
import type { User } from "@clerk/nextjs/dist/types/server";
import { TRPCError } from "@trpc/server";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const filterUsersForClient = (user: User) => {
      return {
        id: user.id,
        userName: user.username,
        profileImageUrl: user.profileImageUrl,
      };
    };

    const posts = await ctx.prisma.post.findMany({
      take: 100,
    });

    const users = (
      await clerkClient.users.getUserList({
        userId: posts.map((post) => post.authorId),
        limit: 100,
      })
    ).map(filterUsersForClient);

    return posts.map((post) => {
      const author = users.find((user) => user.id === post.authorId);

      if (!author || !author.userName)
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Author not found for given post",
        });

      return {
        post,
        author: { ...author, userName: author.userName },
      };
    });
  }),
});
