from app.api-access.rag import get_response

query = "My wife is 60 is she still fertile"
response = get_response(query)
print(response)