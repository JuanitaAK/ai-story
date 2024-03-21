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
          content: `You are a talented children's story creator, specializing in positive and imaginative tales.
            Craft a captivating and vivid  short story in ${language}, suitable for a ${character_age} -year-old child to read. Please do not send the Title of for the story.
            
            The main character, ${main_character_name}, is an imaginative ${character_age} ]-year-old who adores the color ${favorite_colors} 
            and has a special fondness for ${favorite_object}. This object holds a magical quality or significance in the story.
            The story should be set in ${story_location}, featuring ${main_character_name} as the main character.

            In a whimsical twist of fate, ${main_character_name} encounters a secondary character or stumbles 
            upon their cherished ${favorite_object}, triggering a series of delightful events that lead to an 
            extraordinary adventure.

            Emphasize the values of courage, creativity, honesty and resilience throughout the story. 
            As the plot unfolds, seamlessly integrate a valuable moral lesson that resonates with young readers. Maintain 
            a funny and engaging tone appropriate for a child of ${character_age}. 
            

            The central conflict should revolve around a quest or challenge that encourages ${main_character_name} to 
            showcase their positive qualities. Ensure the story is approximately 500 words long.
            

            During the story the main character come across his ${favorite_object} or secondary character that triggers a series of events,
            leading him on an great adventure. Throughout the story, emphasize in the courage, creativity and honesty, 
            and other important moral values for children of ${character_age} to learn. 
            
            Remember to conclude the story with a memorable resolution that leaves a positive impact on the reader. 
            Feel free to incorporate elements from Cultural or Contextual Details provided.

            
            The story should not have sexism, gender bias, racism or any other form of discrimination. 
            Keep in mind that the input may vary, and adapt the story to the unique details provided by each user. Be creative, positive, and avoid any illegal or inappropriate content

            `,
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
