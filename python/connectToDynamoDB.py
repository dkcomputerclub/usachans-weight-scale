import boto3
import json
import time
from boto3.dynamodb.conditions import Key, Attr
import datetime
import random

dynamodb = boto3.resource('dynamodb')
table    = dynamodb.Table('DynamoDB_usachans')

dt_now = datetime.datetime.now()
time = dt_now.strftime('%Y-%m-%d %H:%M:%S')
weight = str( round(50 + random.random(), 1) )

table.put_item(
    Item={
        "id": "0001",
        "time": time,
        "weight": weight
   }
)

