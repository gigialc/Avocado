import requests

url = "https://whispering-beyond-93204-750417d33585.herokuapp.com/"

payload = {
    "Query": "can PCOS cause infertility"
}
headers = {"Content-Type": "application/json"}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)