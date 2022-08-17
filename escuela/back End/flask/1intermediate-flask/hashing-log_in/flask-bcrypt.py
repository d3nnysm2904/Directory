# in terminal
# # pip install flask_bcrypt

from flask_bcrypt import Bcrypt

bcrypt = Bcrypt()
h = bcrypt.generate_password_hash('secret')
# b'$2b$12$zxq70q67pjmdNtdq5o44yu3wRpCZ5R6qGMU9Zlrgt1LFFbI3Nmgve'

bcrypt.check_password_hash(h, 'secret')
# true
