import openai from 'openai';

openai.apiKey = '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';

export const generatePrompts = async (model, prompt) => {
  const response = await openai.Completion.create(
    {
        model: model,
        prompt: prompt,
        max_tokens: 1024,
        n: 1,
        stop: ".",
        temperature: 0.5
    }
  );
  return response.choices[0].text;
}