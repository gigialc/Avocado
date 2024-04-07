from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from getpass import getpass
from langchain.embeddings.openai import OpenAIEmbeddings
from pinecone import Pinecone
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()



app = Flask(__name__)
CORS(app, origins=["http://localhost:3000"])
# configure client
pc = Pinecone(api_key=os.getenv('PINECONE_API_KEY'))
OPENAI_API_KEY = os.getenv('OPENAI_API_KEY')

model_name = "text-embedding-ada-002"
index_name = "langchain-multi-query-demo2"
index = pc.Index(index_name)

embed = OpenAIEmbeddings(
    model=model_name, openai_api_key=OPENAI_API_KEY, disallowed_special=()
)

client = OpenAI(api_key=OPENAI_API_KEY)

def generate_embedding(text):
    # Generate embedding using OpenAI model
    embedding = embed.embed_documents(texts=[text])
    return embedding[0]  

def complete(prompt):
    response = client.chat.completions.create(
      model="gpt-4",
      messages=[
        {
          "role": "user",
          "content": prompt
        }
      ],
      temperature=1,
      max_tokens=5000,
      top_p=1,
      frequency_penalty=0,
      presence_penalty=0
    )
    return response

def get_response(query):
    embed = generate_embedding(query)
    res = index.query(vector=[embed], top_k=3, include_metadata=True)

    contexts = []
    titles = []
    for i in res['matches']:
        contexts.append(i['metadata']['text'])
        titles.append(i['metadata']['title'])

    prompt = "Answer the question based on the contexts below., and list the titles of the contexts that you used\n\n" + "contexts:" + str(contexts) + "\n\ntitles:" + str(titles) + "\n\nQuestion: " + query + "\nAnswer:"
    result = complete(prompt)
    return result.choices[0].message.content


@app.route('/api/get_response', methods=['POST'])

@app.after_request
def set_referrer_policy(response):
    response.headers['Referrer-Policy'] = 'no-referrer'  # or use 'origin', 'unsafe-url', etc.
    return response

def api_get_response():
    data = request.get_json()
    query = data.get('query')
    response = get_response(query)
    return jsonify({'response': response})

if __name__ == '__main__':
    
    app.run(debug=True)