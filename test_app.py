import unittest
import sys, json

from app import app
class TestMain(unittest.TestCase):

    def setUp(self):
        app.config["TESTING"]=True
        self.app=app.test_client()


    def tearDown(self):
        pass

    def test_index_get(self):
        response=self.app.get("/todo/api/v1.0/tasks")
        self.assertEqual(response.status_code,200)

    def test_one_get(self):
        response = self.app.get("/todo/api/v1.0/tasks/4")
        self.assertEqual(response.status_code, 200)
    
    def test_post(self):
        response = self.app.post("/todo/api/v1.0/tasks",data=json.dumps(dict({'title':'abchgfjg', 'description' : 'xyzsdljhljfd', 'complete':'false'})), content_type='application/json')
        self.assertEqual(response.status_code, 200)
            