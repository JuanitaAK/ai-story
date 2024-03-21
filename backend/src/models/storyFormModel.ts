import { poolPromise } from "../db/db";

export type storyForm = {
  language: string;
  main_character_name: string;
  character_age: string;
  favorite_object: string;
  story_location: string;
  favorite_colors: string;
};

export const postStoryFormInput = async (
  form: storyForm & { userId: string }
): Promise<storyForm> => {
  const pool = await poolPromise;

  const {
    userId,
    language,
    main_character_name,
    character_age,
    favorite_object,
    story_location,
    favorite_colors,
  } = form;
  if (
    language === undefined ||
    main_character_name === undefined ||
    character_age === undefined ||
    favorite_object === undefined ||
    story_location === undefined ||
    favorite_colors === undefined
  ) {
    throw new Error("One or more form properties are undefined");
  }

  const query: string =
    "INSERT INTO public.stories_form (user_id, language, main_character_name, character_age, favorite_object, story_location, favorite_colors) VALUES ($1, $2, $3, $4, $5, $6, $7)";
  const values = [
    userId,
    language,
    main_character_name,
    character_age,
    favorite_object,
    story_location,
    favorite_colors,
  ];

  const result = await pool.query(query, values);
  return result;
};
