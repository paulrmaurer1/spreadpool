import requests

from django.conf import settings

def getOpenaiCompletion(prompt):
	"""
	This function will call on ChatGPT3 with a prompt and return
	a chat completion
	"""
	completion_url = "https://api.openai.com/v1/chat/completions"
	completion_data = {
		"model": settings.CHATGPT3_MODEL,
		"messages": [
			{
			"role": "system",
			"content": prompt
			},
		],
		"max_tokens": settings.CHATGPT3_MAXTOKENS,
		"temperature": settings.CHATGPT3_TEMPERATURE,
	}
	headers = {
		"Content-Type": "application/json",
		"Authorization": f"Bearer {settings.OPENAI_API_KEY}",
		"OpenAI-Organization": settings.OPENAI_ORG_ID,
	}
	response = requests.post(
		completion_url,
		headers = headers,
		json=completion_data
	).json()

	# print ("This is the response: ", response)
	
	completion = response["choices"][0]["message"]["content"]
	
	return completion