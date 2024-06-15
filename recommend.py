from django.http import HttpResponse
import pandas as pd
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import nltk
from nltk.corpus import stopwords
import string
import requests
#return HTMLResponse(content="Hello, world!", status_code=200)
# Load CSV data
df = pd.read_csv('videos.csv')

# Preprocess text
def preprocess(text):
    text = text.lower()
    text = text.translate(str.maketrans('', '', string.punctuation))
    stop_words = set(stopwords.words('english'))
    text = ' '.join([word for word in text.split() if word not in stop_words])
    return text

df['clean_transcription'] = df['transcriptionAsText'].apply(preprocess)

vectorizer = TfidfVectorizer()
tfidf_matrix = vectorizer.fit_transform(df['clean_transcription'])

# Function to recommend the most relevant video
def recommend(query):
    query = preprocess(query)
    query_vec = vectorizer.transform([query])
    cosine_sim = cosine_similarity(query_vec, tfidf_matrix)
    most_similar_idx = np.argmax(cosine_sim)
    return df.iloc[most_similar_idx]

# Example query
def call():
	query = "how to use credit card"
	#string_gpt = "You are an expert in answering problems related to finance in India. Given the context, answer in 60 words the following query with reference to information found on https://www.rbi.org.in/  "+query
	string_gpt="Summarize the following text in 40 words: "+query

	recommended_video = recommend(query)
	print(f"Title: {recommended_video['title']}")
	print(f"Description: {recommended_video['description']}")
	print(f"Transcription: {recommended_video['transcriptionAsText']}")

	# url = "https://chatgpt-42.p.rapidapi.com/geminipro"

	# payload = {
	# 	"messages": [
	# 		{
	# 			"role": "user",
	# 			"content": string_gpt  
	# 		}
	# 	],
	# 	"temperature": 0.9,
	# 	"top_k": 5,
	# 	"top_p": 0.9,
	# 	"max_tokens": 256,
	# 	"web_access": False
	# }
	# headers = {
	# 	"x-rapidapi-key": "",
	# 	"x-rapidapi-host": "chatgpt-42.p.rapidapi.com",
	# 	"Content-Type": "application/json"
	# }

	# response = requests.post(url, json=payload, headers=headers)

	# print(response.json())

	response = requests.post('http://localhost:3000/generate-video', json={'scriptText': "This is dummy"})
	return HttpResponse(response.text)

if __name__ == '__main__':
	call()