// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import { index, pgTableCreator } from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `rileys-website_${name}`);

export const posts = createTable(
  "post",
  (d) => ({
    id: d.integer().primaryKey().generatedByDefaultAsIdentity(),
    name: d.varchar({ length: 256 }),
    createdAt: d
      .timestamp({ withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: d.timestamp({ withTimezone: true }).$onUpdate(() => new Date()),
  }),
  (t) => [index("name_idx").on(t.name)],
);

export const images = createTable("image", (d) => ({
  id: d.integer().primaryKey().generatedByDefaultAsIdentity(),
  name: d.varchar("name", { length: 256 }),
  ufsUrl: d.varchar("url", { length: 1024 }).notNull(),
  createdAt: d
    .timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: d.timestamp("updated_at"),
}));

export const blogPosts = createTable(
  "blog_post",
  (d) => ({
    id: d.integer().primaryKey().generatedByDefaultAsIdentity(),
    title: d.varchar({ length: 512 }).notNull(),
    content: d.text().notNull(),
    authorId: d.varchar({ length: 256 }).notNull(),
    published: d.boolean().default(false).notNull(),
    createdAt: d
      .timestamp({ withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: d.timestamp({ withTimezone: true }).$onUpdate(() => new Date()),
  }),
  (t) => [index("author_idx").on(t.authorId)],
);

export const comments = createTable(
  "comment",
  (d) => ({
    id: d.integer().primaryKey().generatedByDefaultAsIdentity(),
    content: d.text().notNull(),
    authorId: d.varchar({ length: 256 }).notNull(),
    postId: d
      .integer()
      .references(() => blogPosts.id, { onDelete: "cascade" })
      .notNull(),
    createdAt: d
      .timestamp({ withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: d.timestamp({ withTimezone: true }).$onUpdate(() => new Date()),
  }),
  (t) => [
    index("comment_author_idx").on(t.authorId),
    index("comment_post_idx").on(t.postId),
  ],
);

export const postMedia = createTable(
  "post_media",
  (d) => ({
    id: d.integer().primaryKey().generatedByDefaultAsIdentity(),
    postId: d
      .integer()
      .references(() => blogPosts.id, { onDelete: "cascade" })
      .notNull(),
    imageId: d
      .integer()
      .references(() => images.id, { onDelete: "cascade" })
      .notNull(),
    position: d.integer().default(0),
  }),
  (t) => [index("post_media_post_idx").on(t.postId)],
);
