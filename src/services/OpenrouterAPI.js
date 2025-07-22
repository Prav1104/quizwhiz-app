import axios from 'axios';

const OPENROUTER_API_KEY = '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'; // your key

export const fetchAIQuestions = async (subject) => {
  const prompt = `Generate 10 multiple-choice questions with 4 options and answers in JSON format for the subject: ${subject}.
Each question should be in JSON format like:
{
  "question": "Question text?",
  "options": {
    "a": "Option A",
    "b": "Option B",
    "c": "Option C",
    "d": "Option D"
  },
  "answer": "b"
}
Return ONLY a JSON array.`;

const headers = {
  Authorization: `Bearer ${OPENROUTER_API_KEY}`,
  'Content-Type': 'application/json',
//   'HTTP-Referer': 'http://localhost:3000', // or your production domain
  'X-Title': 'QuizWhiz' // any title for your app
};


  const body = {
    model: "mistralai/mistral-7b-instruct",
    messages: [
      { role: "system", content: "You are a helpful assistant that generates JSON quizzes." },
      { role: "user", content: prompt }
    ],
  };

  try {
    const response = await axios.post('https://openrouter.ai/api/v1/chat/completions', body, { headers });
    const content = response.data.choices[0].message.content;
    const parsed = JSON.parse(content);
    return parsed;
  } catch (error) {
    console.error('OpenRouter API error:', error.response?.data || error.message);
    throw new Error('Failed to fetch questions from AI.');
  }
};






