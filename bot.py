import requests
from bottle import (
    run, post, response, request as bottle_request
)
BOT_URL = 'https://api.telegram.org/bot//' # <--- add your telegram token here; it should be like https://api.telegram.org/bot12345678:SOMErAn2dom/
def get_chat_id(data):

    chat_id = data['message']['chat']['id']
    return chat_id
def get_message(data):

    message_text = data['message']['text']
    return message_text
def send_message(prepared_data):

    message_url = BOT_URL + 'sendMessage'+"?chat_id=6561228568&text=loan_le_lo"
    requests.post(message_url, json=prepared_data)  # don't forget to make import requests lib
def change_text_message(text):
    """
    To enable turning our message inside out
    """
    return text[::-1]
def prepare_data_for_answer(data):
    answer = change_text_message(get_message(data))
    json_data = {
        "chat_id": get_chat_id(data),
        "text": answer,
    }
    return json_data
@post('/')
def main():
    message_url = BOT_URL + 'sendMessage'+"?chat_id=6561228568&text=loan_le_lo"
    requests.post(message_url)
    data = bottle_request.json
    log = open("log.txt", "w")
    log.write(str(data) + '\n')
    print(data)  # lets see what we have in data
    answer_data = prepare_data_for_answer(data)
    send_message(answer_data)  # <--- function for sending answer
    return data  # status 200 OK by default
if __name__ == '__main__':
    run(host='localhost', port=8080, debug=True)