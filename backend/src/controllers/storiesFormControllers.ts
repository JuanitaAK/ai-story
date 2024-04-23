import { Request, Response } from "express";
import { postStoryFormInput } from "../models/storyFormModel";
import { storyForm } from "../models/storyFormModel";
import openai from "../services/openAiConfig";
import { postNewStory } from "../models/storyModel";

export const postStoryForm = async (
  req: Request,
  res: Response
): Promise<void> => {
  if (!req.body) {
    res.status(400).send({
      message: "No information has been sent.",
    });
  }

  try {
    const storyForm: storyForm & { userId: string } = req.body;
    const storyInputs = await postStoryFormInput(storyForm);
    const {
      language,
      main_character_name,
      character_age,
      favorite_object,
      story_location,
      favorite_colors,
    } = storyForm;

    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `
          
          You are going to play the role of Roald Dahl to write a very imaginative story for a ${character_age} old child called${main_character_name}. ${main_character_name} should himself be the main character of the story. ${main_character_name} loves very much ${favorite_object} and his favorite place is ${story_location}. The story must be entirely written ${language}. The story will subtly emphasize the values of courage, creativity, honesty and resilience if possible, without being too on the nose about it. The story should not have sexism, gender bias, racism or any other form of discrimination. Avoid any illegal or inappropriate content creation. You will write a 1000 words story (without title) in the style so characteristic of Roald Dahl. The story should have a single twist adapted to a ${character_age} year old to ensure the story is not boring -- Your goal is for ${main_character_name} to be delighted and to think this is one of the best short story he ever heard. Feel free to add your own imaginative elements in the story so that it will not be too repetitive if you need to do this exercice multiple times. Remember, this is a SHORT story, don't be too ambitious. Also do not write genericities like "He had many adventures", "Together they faced many dangers"-- This is super boring, write a sharp story with a beginning, and end, and a single twist, but write it well so it reads as a great story to read to a kid before going to bed.
          
          `,

          // // You are a talented children's story creator, specializing in positive and imaginative tales.
          //   Craft a captivating and vivid  short story in ${language}, suitable for a ${character_age} -year-old child to read. Please do not send the Title of for the story.

          //   The main character, ${main_character_name}, is an imaginative ${character_age} ]-year-old who adores the color ${favorite_colors}
          //   and has a special fondness for ${favorite_object}. This object holds a magical quality or significance in the story.
          //   The story should be set in ${story_location}, featuring ${main_character_name} as the main character.

          //   In a whimsical twist of fate, ${main_character_name} encounters a secondary character or stumbles
          //   upon their cherished ${favorite_object}, triggering a series of delightful events that lead to an
          //   extraordinary adventure.

          //   Emphasize the values of courage, creativity, honesty and resilience throughout the story.
          //   As the plot unfolds, seamlessly integrate a valuable moral lesson that resonates with young readers. Maintain
          //   a funny and engaging tone appropriate for a child of ${character_age}.

          //   The central conflict should revolve around a quest or challenge that encourages ${main_character_name} to
          //   showcase their positive qualities. Ensure the story is approximately 500 words long.
          //   ∏

          //   During the story the main character come across his ${favorite_object} or secondary character that triggers a series of events,
          //   leading him on an great adventure. Throughout the story, emphasize in the courage, creativity and honesty,
          //   and other important moral values for children of ${character_age} to learn.

          //   Remember to conclude the story with a memorable resolution that leaves a positive impact on the reader.
          //   Feel free to incorporate elements from Cultural or Contextual Details provided.

          //   The story should not have sexism, gender bias, racism or any other form of discrimination.
          //   Keep in mind that the input may vary, and adapt the story to the unique details provided by each user. Be creative, positive, and avoid any illegal or inappropriate content

          //   //
        },
      ],
      model: "gpt-3.5-turbo",
    });

    const openAiStory = completion.choices[0].message.content?.trim();

    const storyResult = await postNewStory(openAiStory ?? "", req.body.userId);
    res.status(201).json(storyResult);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
