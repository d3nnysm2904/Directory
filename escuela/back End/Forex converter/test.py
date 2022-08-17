from telnetlib import TELNET_PORT
from app import rate
from unittest import TestCase
# from forex_python.converter import CurrencyRates, CurrencyCodes

# c = CurrencyRates()
# co = CurrencyCodes()

# currency = {'EUR'
#             'IDR', 'BGN', 'ILS', 'GBP', 'DKK', 'CAD', 'JPY', 'HUF', 'RON', 'MYR', 'SEK', 'SGD', 'HKD', 'AUD', 'CHF', 'KRW', 'CNY', 'TRY', 'HRK', 'NZD', 'THB', 'USD', 'NOK', 'RUB', 'INR', 'MXN', 'CZK', 'BRL', 'PLN', 'PHP', 'ZAR'}


class test_forex(TestCase):

    def test_usd(self):

        self.assertEqual(rate('USD', 'USD', 1), 1)
        self.assertEqual(rate('USD', 'EUR', 1), 0.9941346058256287)
