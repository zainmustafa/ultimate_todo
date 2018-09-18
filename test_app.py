import unittest
import sys, json

from app import app
class TestMain(unittest.TestCase):

    def setUp(self):
        app.config["TESTING"]=True
        self.app=app.test_client()


    def tearDown(self):
        pass
