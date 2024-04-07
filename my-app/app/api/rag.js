// pages/api/get_response.js
import { Configuration, OpenAIApi } from "openai";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { query } = req.body;
    
    try {
      // Configure OpenAI
      const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
      });
      const openai = new OpenAIApi(configuration);

      // Simulate getting embedding and querying Pinecone (pseudo code)
      const embedding = await getEmbedding(query);
      const searchResults = await queryPinecone(embedding);

      // Generate a prompt based on results
      const prompt = createPrompt(searchResults, query);

      // Complete the prompt with OpenAI
      const completion = await openai.createCompletion({
        model: "gpt-4",
        prompt: prompt,
        max_tokens: 4000
      });

      // Send response
      res.status(200).json({ response: completion.data.choices[0].text });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Error processing your request' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

async function getEmbedding(text) {
    model_name = "text-embedding-ada-002"
    
  // This function should call your embedding service or use an equivalent JS library
  return embedding
}


async function queryPinecone(embedding) {
  // This function should call Pinecone or your vector search database
  return {
    matches: [
      { metadata: { text: 'Example text', title: 'Example Title' } },
      // more matches...
    ]
  };
}

function createPrompt(searchResults, query) {
  const contexts = searchResults.matches.map(match => match.metadata.text);
  const titles = searchResults.matches.map(match => match.metadata.title);
  return `Answer the question based on the contexts below., and list the titles of the contexts that you used\n\ncontexts: ${contexts.join(', ')}\nTitles: ${titles.join(', ')}\n\nQuestion: ${query}\nAnswer:`;
}
