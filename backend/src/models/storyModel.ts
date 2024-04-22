import { poolPromise } from "../db/db";

export type NewStory = {
  story: string;
  //user_id?: number ;
};

export const postNewStory = async (openAiStory: string, user_id: string) => {
  const pool = await poolPromise;
  const query =
    "INSERT INTO public.story_created (user_id, story) VALUES ($1, $2)";
  const values = [user_id, openAiStory];

  try {
    const result = await pool.query(query, values);
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getAllStories = async (user_id: string): Promise<NewStory> => {
  try {
    const pool = await poolPromise;
    const query =
      "SELECT * FROM public.story_created WHERE user_id = $1 ORDER BY created_at DESC";
    const result = await pool.query(query, [user_id]);
    return result.rows;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getStoryByUserId = async (user_id: string): Promise<NewStory> => {
  const pool = await poolPromise;
  const query = "SELECT * FROM public.story_created WHERE user_id = $1";
  const result = await pool.query(query, [user_id]);
  return result.rows;
};

export const getStoryById = async (id_story: string): Promise<NewStory> => {
  const pool = await poolPromise;
  const query = "SELECT * FROM public.story_created WHERE id_story = $1";
  const result = await pool.query(query, [id_story]);
  return result.rows[0];
};

export const newStory = async (user_id: string): Promise<NewStory> => {
  const pool = await poolPromise;
  const query =
    "SELECT * FROM story_created WHERE user_id = $1 ORDER BY ctid DESC LIMIT 1";
  const result = await pool.query(query, [user_id]);
  return result.rows[0];
};

export const deleteStory = async (id_story: string) => {
  const pool = await poolPromise;
  console.log("deleting story with id:", id_story);
  const query = "DELETE FROM public.story_created WHERE id_story = $1";
  const result = await pool.query(query, [id_story]);
  return "Story deleted successfully";
  //return result.rows;
};

export const updateStory = async (id_story: string, title: string) => {
  const pool = await poolPromise;
  const query =
    "UPDATE public.story_created SET title = $1 WHERE id_story = $2";
  const result = await pool.query(query, [title, id_story]);

  return result.rows;
};
