import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import datetime

cred = credentials.Certificate("./key.json")
firebase_admin.initialize_app(cred)

db = firestore.client()
db.collection('weights').add({
  u'weight': 47.0,
  u'date': datetime.datetime.now()
})
