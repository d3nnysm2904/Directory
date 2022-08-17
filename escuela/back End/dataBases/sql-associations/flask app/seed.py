
from models import Dt, Emp, db
from app import app


db.drop_all()
db.create_all()


d1 = Dt(dept_code='mktg', dept_name='Marketing', phone='645-5675')
d2 = Dt(dept_code='acct', dept_name='Accounting', phone='344-567')
d3 = Dt(dept_code='hr', dept_name='Human Resources')

denny = Emp(name='Denny Sanchez', state='NYC', dept_code='mktg')
yaki = Emp(name='Yaki Obando', dept_code='acct')
jenny = Emp(name='Jenny Mosquera', dept_code='mktg', state='FL')
ado = Emp(name='Adolis Barzaga', dept_code='acct', state='NY')
luisa = Emp(name='Luisa Mejias', dept_code='hr', state='LA')
ale = Emp(name='Alejandro Gallardo')  # , dept_code='hr', state='LA')


db.session.add_all([d1, d2, d3])
# db.session.add(d2)
# db.session.add(d3)

db.session.commit()

# db.session.add(denny)
# db.session.add(jenny)
# db.session.add(yaki)
# db.session.add(ado)
# db.session.add(luisa)
# db.session.add(ale)
db.session.add_all([denny, yaki, jenny, ado, luisa, ale])
db.session.commit()
