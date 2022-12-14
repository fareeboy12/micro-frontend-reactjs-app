import time
from locust import HttpUser, between, task

class WebsiteUser(HttpUser):
    wait_time = between(5, 15)
    
    @task
    def parent(self):
        self.client.get("/")
        
    @task
    def storeone(self):
        self.client.get("/storeOne")

    @task
    def storetwo(self):
        self.client.get("/storeTwo")