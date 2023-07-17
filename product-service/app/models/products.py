from .base import Base, BaseMixin
from sqlalchemy import Column, String, Integer


class Products(Base, BaseMixin):
    __tablename__ = 'products'

    name = Column(String(255))
    description = Column(String(255))
    price = Column(Integer)
    image_url = Column(String(255))
