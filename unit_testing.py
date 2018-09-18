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

    def test_remove(self):
        response = self.app.delete('/todoapp/api/v1.0/task/delete/6')
        self.assertEqual(response.status_code,200)

    def test_update(self):
        response = self.app.put('/todoapp/api/v1.0/task/update/5')
        self.assertEqual(response.status_code,200 )

    def test_create_todo(self):
        response = self.app.post('/todoapp/api/v1.0/task/add',data=json.dumps(dict({'title':'javas', 'description' : 'androids'})), content_type='application/json')
        self.assertEqual(response.status_code,200)

    def test_change_todo(self):
        response = self.app.put('/todoapp/api/v1.0/task/change/8',data=json.dumps(dict({'title':'Angulars', 'description' : 'BootCamps'})), content_type = 'application/json')
        self.assertEqual(response.status_code,200)
    
    def test_get_single_todo_data(self):
        response =self.app.get('/todoapp/api/v1.0/task/one/5')
        self.assertEqual(response.status_code,200)

if __name__ == "__main__":
    unittest.main() 
