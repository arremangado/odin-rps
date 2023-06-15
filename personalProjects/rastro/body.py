"""import yfinance as yf

watchlist = []
msft = yf.Ticker("MSFT")
watchlist.append(msft)
apple = yf.Ticker("AAPL")
watchlist.append(apple)

for stock in range(0, len(watchlist)):
    print("Stock name: ", watchlist[stock].info['symbol'])
    print("Stock bid price: ", watchlist[stock].info['bid'])
"""
    # Download the helper library from https://www.twilio.com/docs/python/install
# Download the helper library from https://www.twilio.com/docs/python/install
import os
from twilio.rest import Client


# Find your Account SID and Auth Token at twilio.com/console
# and set the environment variables. See http://twil.io/secure
account_sid = os.environ['TWILIO_ACCOUNT_SID']
auth_token = os.environ['TWILIO_AUTH_TOKEN']
client = Client(account_sid, auth_token)

message = client.messages \
    .create(
         body='SMALL STEP FOR HUMANKIND A BIG STEP FOR COMPA JOSE!!!',
         from_='+18336621164',
         to='+16026919638'
     )

print(message.sid)

