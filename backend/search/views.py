from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
# Create your views here.
from django.http import HttpResponse
import pandas as pd
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import nltk
from nltk.corpus import stopwords
import string
import requests
class FilterView(APIView):
    def get(self, request):
        query=request.data.get('query')
        print(query)
        df = pd.read_csv('videos.csv')
        print(df.head())
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
            # query = "how to use credit card"
            # #string_gpt = "You are an expert in answering problems related to finance in India. Given the context, answer in 60 words the following query with reference to information found on https://www.rbi.org.in/  "+query
            # string_gpt="Summarize the following text in 40 words: "+query

            recommended_video = recommend(query)
            print(f"Title: {recommended_video['title']}")
            print(f"Description: {recommended_video['description']}")
            print(f"Transcription: {recommended_video['transcriptionAsText']}")
            return Response({'title':recommended_video['title'],'transcription':recommended_video['transcriptionAsText']})
        
        return call()
