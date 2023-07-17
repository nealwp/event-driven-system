
import sqlalchemy

DATABASE_URL = "postgresql://product_service:password@localhost:5433/productdb"

database = databases.Database(DATABASE_URL)
metadata = sqlalchemy.MetaData()
