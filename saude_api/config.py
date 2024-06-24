import os

class Config:
    SQLALCHEMY_DATABASE_URI = 'mysql+mysqlconnector://username:password@localhost/saude'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
