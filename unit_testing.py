import unittest
import os
import sys, json
from app import app
from flask import request

class TodoData(unittest.TestCase):

    def setUp(self):
        app.config['TESTING'] = True
        app.config['DEBUG'] = False
        self.app = app.test_client()
 
        self.assertEquals(app.debug, False)

    def tearDown(self):
        pass
        

    def test_get_todo_data(self):
        response = self.app.get('/todoapp/api/v1.0/task/alldata')
        self.assertEqual(response.status_code,200 )


if __name__ == "__main__":
    unittest.main() 
