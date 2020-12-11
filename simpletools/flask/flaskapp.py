import time

from flask import Flask, request, jsonify, send_from_directory,Response

import pandas as pd
from flask_cors import CORS


#Scraper for Questions
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys
#NLP
from google.cloud import language
from google.cloud.language import enums
from google.cloud.language import types

import os

from prometheus_flask_exporter import PrometheusMetrics

app = Flask(__name__,static_folder='../build', static_url_path='/')
metrics = PrometheusMetrics(app)


@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route("/results", methods=['POST'])

def get_questions():
    query = request.json["search_question"]
    print('this is the query', query)

    chrome_options = Options()
    chrome_options.add_argument('--headless')
    #chrome_options.add_argument('--no-sandbox')
    #chrome_options.add_argument('--disable-dev-shm-usage')

    driver = webdriver.Chrome(options=chrome_options,executable_path='/usr/local/bin/chromedriver')  # Optional argument, if not specified will search path.

    driver.get("https://www.google.com")
    driver.find_element_by_xpath("//input[@aria-label='Search']").send_keys(query+Keys.RETURN)

    #we can make this higher
    clicks = 5;

    paa = driver.find_elements_by_xpath("//span/following-sibling::div[contains(@class,'match-mod-horizontal-padding')]")
    #Its range because clicks is int.
    for i in range(clicks):
        print(i)
        try:
            paa[i].click()
            time.sleep( 2 )
            paa = driver.find_elements_by_xpath("//span/following-sibling::div[contains(@class,'match-mod-horizontal-padding')]")
            for j in paa:
                print(format(j.text))
        except:
            continue
            raise Exception('There are no questions to Click! Index is out of Range. Please add another Keyword that contains questions')
    list_paa = []
    for j in paa:
        p = format(j.text)
        p = p.splitlines()

        list_paa.append(p)

    driver.quit()

    print('Success')

    df = pd.DataFrame(list_paa,columns=['Questions'])

    df = df.dropna()

    if df.empty:
        print('DataFrame is empty!')
        data= [['No results. Please Try again or try a different Keyword','No Results','No Results']]
        df = pd.DataFrame(data,columns=['Questions','Sentiment','Magnitude'])
    else:
    
        #Instantiates a client
        client = language.LanguageServiceClient.from_service_account_json("/var/www/FlaskApp/FlaskApp/SEO-Projects-eaaf07a143b2.json")
        
        sentiment_score = []
        magnitude_score = []
        
        for q in df['Questions']:
            # The text to analyze
            text = q
            document = types.Document(
                content=text,
                type=enums.Document.Type.PLAIN_TEXT)
            
            # Detects the sentiment of the text
            sentiment = client.analyze_sentiment(document=document).document_sentiment
            
            s = sentiment.score
            m = sentiment.magnitude
            
            sentiment_score.append(s)
            magnitude_score.append(m)
        
            print(text)
            print('Sentiment Score:', s , 'Magnitude Score:' , m )
        
        rounded_sentiment_score = []
        for score in sentiment_score:
            rs = str(round(score, 2))
            rounded_sentiment_score.append(rs)
            
        rounded_magnitude_score = []
        for score in magnitude_score:
            rs = str(round(score, 2))
            rounded_magnitude_score.append(rs)
        
        df.insert(1, "Sentiment", rounded_sentiment_score , True)
        df.insert(2, "Magnitude", rounded_magnitude_score , True)
    

    print(df)
        
    json_hist = df.to_json(orient="table")
    return Response(json_hist, mimetype='application/json')


if __name__ == "__main__":
    app.run()
